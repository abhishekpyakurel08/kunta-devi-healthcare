"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppointmentModalState {
  isOpen: boolean;
  preSelectedDoctor: string | null;
  preSelectedService: string | null;
  preSelectedPackage: string | null;
}

interface DoctorsFilterState {
  search: string;
  specialty: string;
  availableToday: boolean;
  language: string;
}

interface ServicesFilterState {
  search: string;
  category: string;
  ageGroup: string;
}

interface ProductsFilterState {
  search: string;
  category: string;
  purpose: string;
  inStock: boolean;
}

interface AppContextType {
  // Appointment Modal
  appointmentModal: AppointmentModalState;
  openAppointmentModal: (doctorId?: string, serviceId?: string, packageId?: string) => void;
  closeAppointmentModal: () => void;
  
  // Doctors Filters
  doctorsFilters: DoctorsFilterState;
  setDoctorsFilters: React.Dispatch<React.SetStateAction<DoctorsFilterState>>;
  resetDoctorsFilters: () => void;
  
  // Services Filters
  servicesFilters: ServicesFilterState;
  setServicesFilters: React.Dispatch<React.SetStateAction<ServicesFilterState>>;
  resetServicesFilters: () => void;
  
  // Products Filters
  productsFilters: ProductsFilterState;
  setProductsFilters: React.Dispatch<React.SetStateAction<ProductsFilterState>>;
  resetProductsFilters: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Appointment Modal State
  const [appointmentModal, setAppointmentModal] = useState<AppointmentModalState>({
    isOpen: false,
    preSelectedDoctor: null,
    preSelectedService: null,
    preSelectedPackage: null,
  });

  // Doctors Filters State
  const [doctorsFilters, setDoctorsFilters] = useState<DoctorsFilterState>({
    search: '',
    specialty: '',
    availableToday: false,
    language: '',
  });

  // Services Filters State
  const [servicesFilters, setServicesFilters] = useState<ServicesFilterState>({
    search: '',
    category: '',
    ageGroup: '',
  });

  // Products Filters State
  const [productsFilters, setProductsFilters] = useState<ProductsFilterState>({
    search: '',
    category: '',
    purpose: '',
    inStock: false,
  });

  // Appointment Modal Actions
  const openAppointmentModal = (doctorId?: string, serviceId?: string, packageId?: string) => {
    setAppointmentModal({
      isOpen: true,
      preSelectedDoctor: doctorId || null,
      preSelectedService: serviceId || null,
      preSelectedPackage: packageId || null,
    });
  };

  const closeAppointmentModal = () => {
    setAppointmentModal({
      isOpen: false,
      preSelectedDoctor: null,
      preSelectedService: null,
      preSelectedPackage: null,
    });
  };

  // Filter Reset Actions
  const resetDoctorsFilters = () => {
    setDoctorsFilters({
      search: '',
      specialty: '',
      availableToday: false,
      language: '',
    });
  };

  const resetServicesFilters = () => {
    setServicesFilters({
      search: '',
      category: '',
      ageGroup: '',
    });
  };

  const resetProductsFilters = () => {
    setProductsFilters({
      search: '',
      category: '',
      purpose: '',
      inStock: false,
    });
  };

  return (
    <AppContext.Provider
      value={{
        appointmentModal,
        openAppointmentModal,
        closeAppointmentModal,
        doctorsFilters,
        setDoctorsFilters,
        resetDoctorsFilters,
        servicesFilters,
        setServicesFilters,
        resetServicesFilters,
        productsFilters,
        setProductsFilters,
        resetProductsFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
