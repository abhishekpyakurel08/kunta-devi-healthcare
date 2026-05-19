/**
 * Central API client for Kunta Devi Health Care.
 * Simulates network requests against local mock data with dynamic features.
 * When a real backend is available, replace the body of each
 * `apiGet` call with `fetch(BASE_URL + path)`.
 */

import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { diagnostics } from "@/data/diagnostics";
import { healthPackages } from "@/data/packages";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faqs";

// --------------- types ---------------
export type Doctor = (typeof doctors)[number];
export type Service = (typeof services)[number];
export type Diagnostic = (typeof diagnostics)[number];
export type HealthPackage = (typeof healthPackages)[number];
export type Product = (typeof products)[number];
export type BlogPost = (typeof blogPosts)[number];
export type FAQ = (typeof faqs)[number];

export interface QueryOptions {
  page?: number;
  limit?: number;
  search?: string;
  filter?: Record<string, unknown>;
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  doctorId?: string;
  serviceId?: string;
  packageId?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface ReservationFormData {
  fullName: string;
  phoneNumber: string;
  productId: string;
  quantity: number;
  pickupDelivery: 'pickup' | 'delivery';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// --------------- cache ---------------
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCacheKey(resource: string, options?: QueryOptions): string {
  return `${resource}-${JSON.stringify(options || {})}`;
}

function getCached<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;
  
  if (Date.now() - cached.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  
  return cached.data as T;
}

function setCache<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

function clearCache(resource?: string): void {
  if (resource) {
    const keysToDelete: string[] = [];
    cache.forEach((_, key) => {
      if (key.startsWith(resource)) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => cache.delete(key));
  } else {
    cache.clear();
  }
}

// --------------- helpers ---------------
const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

async function simulateFetch<T>(data: T): Promise<T> {
  // Simulate variable network delay for realism
  const randomDelay = 300 + Math.random() * 300;
  await delay(randomDelay);
  return data;
}

function applyQueryOptions<T extends Record<string, unknown>>(
  data: T[],
  options?: QueryOptions
): PaginatedResponse<T> {
  let filtered = [...data];
  
  // Apply search
  if (options?.search) {
    const searchLower = options.search.toLowerCase();
    filtered = filtered.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchLower)
      )
    );
  }
  
  // Apply filters
  if (options?.filter) {
    filtered = filtered.filter(item =>
      Object.entries(options.filter || {}).every(([key, value]) =>
        item[key] === value
      )
    );
  }
  
  // Apply sorting
  if (options?.sort) {
    filtered.sort((a, b) => {
      const aValue = a[options.sort!.field];
      const bValue = b[options.sort!.field];
      
      if (String(aValue) < String(bValue)) return options.sort!.order === 'asc' ? -1 : 1;
      if (String(aValue) > String(bValue)) return options.sort!.order === 'asc' ? 1 : -1;
      return 0;
    });
  }
  
  // Apply pagination
  const page = options?.page || 1;
  const limit = options?.limit || data.length;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedData = filtered.slice(startIndex, startIndex + limit);
  
  return {
    data: paginatedData,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
}

// --------------- endpoints ---------------
export const api = {
  doctors: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('doctors', options);
      const cached = getCached<PaginatedResponse<Doctor>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(doctors, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
    get: (id: string) => {
      const cacheKey = `doctor-${id}`;
      const cached = getCached<Doctor | null>(cacheKey);
      
      if (cached !== undefined) return Promise.resolve(cached);
      
      const result = simulateFetch(doctors.find((d) => d.id === id) ?? null);
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  services: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('services', options);
      const cached = getCached<PaginatedResponse<Service>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(services, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
    get: (id: string) => {
      const cacheKey = `service-${id}`;
      const cached = getCached<Service | null>(cacheKey);
      
      if (cached !== undefined) return Promise.resolve(cached);
      
      const result = simulateFetch(services.find((s) => s.id === id) ?? null);
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  diagnostics: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('diagnostics', options);
      const cached = getCached<PaginatedResponse<Diagnostic>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(diagnostics, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
    get: (id: string) => {
      const cacheKey = `diagnostic-${id}`;
      const cached = getCached<Diagnostic | null>(cacheKey);
      
      if (cached !== undefined) return Promise.resolve(cached);
      
      const result = simulateFetch(diagnostics.find((d) => d.id === id) ?? null);
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  packages: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('packages', options);
      const cached = getCached<PaginatedResponse<HealthPackage>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(healthPackages, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  products: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('products', options);
      const cached = getCached<PaginatedResponse<Product>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(products, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
    get: (id: string) => {
      const cacheKey = `product-${id}`;
      const cached = getCached<Product | null>(cacheKey);
      
      if (cached !== undefined) return Promise.resolve(cached);
      
      const result = simulateFetch(products.find((p) => p.id === id) ?? null);
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  blogs: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('blogs', options);
      const cached = getCached<PaginatedResponse<BlogPost>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(blogPosts, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
    get: (id: string) => {
      const cacheKey = `blog-${id}`;
      const cached = getCached<BlogPost | null>(cacheKey);
      
      if (cached !== undefined) return Promise.resolve(cached);
      
      const result = simulateFetch(blogPosts.find((b) => b.id === id) ?? null);
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  faqs: {
    list: (options?: QueryOptions) => {
      const cacheKey = getCacheKey('faqs', options);
      const cached = getCached<PaginatedResponse<FAQ>>(cacheKey);
      
      if (cached) return Promise.resolve(cached);
      
      const result = simulateFetch(applyQueryOptions(faqs, options));
      result.then(data => setCache(cacheKey, data));
      return result;
    },
  },
  cache: {
    clear: clearCache,
  },
};
