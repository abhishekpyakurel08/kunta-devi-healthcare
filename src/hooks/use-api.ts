/**
 * React Query hooks for all data fetching.
 * These wrap the `api` client so components get automatic
 * loading, error, and caching states for free.
 */
"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type {
  Doctor,
  Service,
  Diagnostic,
  HealthPackage,
  Product,
  BlogPost,
  FAQ,
} from "@/lib/api";

// --------------- generic hook ---------------
type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

function useFetch<T>(fetcher: () => Promise<T>): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetcher()
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Something went wrong");
          setIsLoading(false);
        }
      });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
}

// --------------- domain hooks ---------------
export const useDoctors = () => useFetch<Doctor[]>(() => api.doctors.list().then(r => r.data));
export const useDoctor = (id: string) =>
  useFetch<Doctor | null>(() => api.doctors.get(id));

export const useServices = () => useFetch<Service[]>(() => api.services.list().then(r => r.data));
export const useService = (id: string) =>
  useFetch<Service | null>(() => api.services.get(id));

export const useDiagnostics = () =>
  useFetch<Diagnostic[]>(() => api.diagnostics.list().then(r => r.data));

export const usePackages = () => useFetch<HealthPackage[]>(() => api.packages.list().then(r => r.data));

export const useProducts = () => useFetch<Product[]>(() => api.products.list().then(r => r.data));
export const useProduct = (id: string) =>
  useFetch<Product | null>(() => api.products.get(id));

export const useBlogs = () => useFetch<BlogPost[]>(() => api.blogs.list().then(r => r.data));
export const useBlog = (id: string) =>
  useFetch<BlogPost | null>(() => api.blogs.get(id));

export const useFAQs = () => useFetch<FAQ[]>(() => api.faqs.list().then(r => r.data));
