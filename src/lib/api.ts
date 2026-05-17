/**
 * Central API client for Kunta Devi Health Care.
 * Simulates network requests against local mock data.
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

// --------------- helpers ---------------
const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

async function simulateFetch<T>(data: T): Promise<T> {
  await delay();
  return data;
}

// --------------- endpoints ---------------
export const api = {
  doctors: {
    list: () => simulateFetch(doctors),
    get: (id: string) =>
      simulateFetch(doctors.find((d) => d.id === id) ?? null),
  },
  services: {
    list: () => simulateFetch(services),
    get: (id: string) =>
      simulateFetch(services.find((s) => s.id === id) ?? null),
  },
  diagnostics: {
    list: () => simulateFetch(diagnostics),
    get: (id: string) =>
      simulateFetch(diagnostics.find((d) => d.id === id) ?? null),
  },
  packages: {
    list: () => simulateFetch(healthPackages),
  },
  products: {
    list: () => simulateFetch(products),
    get: (id: string) =>
      simulateFetch(products.find((p) => p.id === id) ?? null),
  },
  blogs: {
    list: () => simulateFetch(blogPosts),
    get: (id: string) =>
      simulateFetch(blogPosts.find((b) => b.id === id) ?? null),
  },
  faqs: {
    list: () => simulateFetch(faqs),
  },
};
