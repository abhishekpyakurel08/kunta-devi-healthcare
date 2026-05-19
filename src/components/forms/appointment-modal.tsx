"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useApp } from '@/contexts/app-context';
import { api, type Doctor, type Service, type HealthPackage } from '@/lib/api';
import { Calendar, Clock, User, Phone, Stethoscope, Package } from 'lucide-react';

export function AppointmentModal() {
  const { appointmentModal, closeAppointmentModal } = useApp();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    doctorId: appointmentModal.preSelectedDoctor || '',
    serviceId: appointmentModal.preSelectedService || '',
    packageId: appointmentModal.preSelectedPackage || '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [packages, setPackages] = useState<HealthPackage[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [doctorsRes, servicesRes, packagesRes] = await Promise.all([
        api.doctors.list({ limit: 100 }),
        api.services.list({ limit: 100 }),
        api.packages.list({ limit: 100 }),
      ]);
      setDoctors(doctorsRes.data);
      setServices(servicesRes.data);
      setPackages(packagesRes.data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (appointmentModal.preSelectedDoctor) {
      setFormData(prev => ({ ...prev, doctorId: appointmentModal.preSelectedDoctor || '' }));
    }
    if (appointmentModal.preSelectedService) {
      setFormData(prev => ({ ...prev, serviceId: appointmentModal.preSelectedService || '' }));
    }
    if (appointmentModal.preSelectedPackage) {
      setFormData(prev => ({ ...prev, packageId: appointmentModal.preSelectedPackage || '' }));
    }
  }, [appointmentModal.preSelectedDoctor, appointmentModal.preSelectedService, appointmentModal.preSelectedPackage]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = 'Name should contain only letters';
    }

    // Phone validation (Nepali format: 10 digits, starts with 97 or 98)
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^(97|98)\d{8}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid Nepali phone number (10 digits starting with 97 or 98)';
    }

    // Date validation
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Date must be today or in the future';
      }
    }

    // Time validation
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    // At least one of doctor, service, or package must be selected
    if (!formData.doctorId && !formData.serviceId && !formData.packageId) {
      newErrors.selection = 'Please select a doctor, service, or package';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Store submission (in a real app, this would send to backend)
    console.log('Appointment submitted:', formData);

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        fullName: '',
        phoneNumber: '',
        doctorId: '',
        serviceId: '',
        packageId: '',
        preferredDate: '',
        preferredTime: '',
        notes: '',
      });
      setShowSuccess(false);
      closeAppointmentModal();
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00 AM`);
      slots.push(`${hour}:30 AM`);
    }
    return slots;
  };

  return (
    <Dialog open={appointmentModal.isOpen} onOpenChange={closeAppointmentModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[36px] font-bold text-secondary">
            Book an Appointment
          </DialogTitle>
        </DialogHeader>

        {showSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-[24px] font-semibold text-secondary mb-2">Appointment Request Sent!</h3>
            <p className="text-[16px] text-text-body">We'll contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-[14px] text-text-body">
                <User className="w-5 h-5 text-[#0A7075]" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={errors.fullName ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}
              />
              {errors.fullName && (
                <p className="text-[14px] text-error">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="flex items-center gap-2 text-[14px] text-text-body">
                <Phone className="w-5 h-5 text-[#0A7075]" />
                Phone Number *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                placeholder="98XXXXXXXX"
                className={errors.phoneNumber ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}
              />
              {errors.phoneNumber && (
                <p className="text-[14px] text-error">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Doctor Selection */}
            <div className="space-y-2">
              <Label htmlFor="doctorId" className="flex items-center gap-2 text-[14px] text-text-body">
                <Stethoscope className="w-5 h-5 text-[#0A7075]" />
                Select Doctor (Optional)
              </Label>
              <Select
                value={formData.doctorId}
                onValueChange={(value: string) => handleChange('doctorId', value)}
                disabled={!!appointmentModal.preSelectedDoctor}
              >
                <SelectTrigger className={errors.selection && !formData.doctorId && !formData.serviceId && !formData.packageId ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}>
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent>
                  {doctors.map((doctor: Doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <Label htmlFor="serviceId" className="text-[14px] text-text-body">Select Service (Optional)</Label>
              <Select
                value={formData.serviceId}
                onValueChange={(value: string) => handleChange('serviceId', value)}
                disabled={!!appointmentModal.preSelectedService}
              >
                <SelectTrigger className={errors.selection && !formData.doctorId && !formData.serviceId && !formData.packageId ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service: Service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Package Selection */}
            <div className="space-y-2">
              <Label htmlFor="packageId" className="flex items-center gap-2 text-[14px] text-text-body">
                <Package className="w-5 h-5 text-[#0A7075]" />
                Select Package (Optional)
              </Label>
              <Select
                value={formData.packageId}
                onValueChange={(value) => handleChange('packageId', value)}
                disabled={!!appointmentModal.preSelectedPackage}
              >
                <SelectTrigger className={errors.selection && !formData.doctorId && !formData.serviceId && !formData.packageId ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}>
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg: HealthPackage) => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.name} - NPR {pkg.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.selection && (
                <p className="text-[14px] text-error">{errors.selection}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="flex items-center gap-2 text-[14px] text-text-body">
                <Calendar className="w-5 h-5 text-[#0A7075]" />
                Preferred Date *
              </Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={errors.preferredDate ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}
              />
              {errors.preferredDate && (
                <p className="text-[14px] text-error">{errors.preferredDate}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="flex items-center gap-2 text-[14px] text-text-body">
                <Clock className="w-5 h-5 text-[#0A7075]" />
                Preferred Time *
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleChange('preferredTime', value)}
              >
                <SelectTrigger className={errors.preferredTime ? 'border-error bg-[#FEF2F2]' : 'border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20'}>
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {generateTimeSlots().map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="text-[14px] text-error">{errors.preferredTime}</p>
              )}
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-[14px] text-text-body">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Any additional information or special requests..."
                rows={3}
                className="border-border focus:border-[#0A7075] focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#0A7075] hover:bg-primary-dark text-white rounded-[8px] py-[12px] px-[24px] text-[14px] font-semibold transition-all duration-200 ease hover:-translate-y-px"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
