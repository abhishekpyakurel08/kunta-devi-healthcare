"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.12,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Animate section headings upward
    document.querySelectorAll<HTMLElement>("section [class*='text-center'] h2, section [class*='text-center'] > span").forEach((el) => {
      el.classList.add("reveal", "reveal-up");
      observer.observe(el);
    });

    // Animate section subtext
    document.querySelectorAll<HTMLElement>("section [class*='text-center'] > p").forEach((el) => {
      el.classList.add("reveal", "reveal-up", "stagger-1");
      observer.observe(el);
    });

    // Two-column layouts — left slides in from left, right from right
    document.querySelectorAll<HTMLElement>("section .grid > div:first-child, section .lg\\:grid-cols-2 > div:first-child").forEach((el) => {
      el.classList.add("reveal", "reveal-left");
      observer.observe(el);
    });

    document.querySelectorAll<HTMLElement>("section .grid > div:last-child, section .lg\\:grid-cols-2 > div:last-child").forEach((el) => {
      el.classList.add("reveal", "reveal-right");
      observer.observe(el);
    });

    // Grid cards — stagger by index
    document.querySelectorAll<HTMLElement>(".reveal-up").forEach((el) => {
      observer.observe(el);
    });

    // Stat / info cards
    document.querySelectorAll<HTMLElement>("[class*='stat-card'], [class*='info-card']").forEach((el, i) => {
      el.classList.add("reveal", "reveal-scale", `stagger-${(i % 5) + 1}`);
      observer.observe(el);
    });

    // CTA section
    document.querySelectorAll<HTMLElement>("section [class*='bg-primary']").forEach((el) => {
      el.classList.add("reveal", "reveal-scale");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
