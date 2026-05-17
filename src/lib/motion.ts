import type { Variants } from "framer-motion";

// ─── Container / Stagger parents ────────────────────────────────────────────
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// ─── Fade-up (default hero / section reveal) ────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Fade-down ───────────────────────────────────────────────────────────────
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Fade-in ─────────────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade-left ───────────────────────────────────────────────────────────────
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Fade-right ──────────────────────────────────────────────────────────────
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Scale-up ────────────────────────────────────────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// ─── Scale-in (springy) ──────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

// ─── Card hover (used with whileHover) ───────────────────────────────────────
export const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 24px rgba(15,23,42,0.08)" },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(14,165,164,0.16)",
    transition: { type: "spring", stiffness: 350, damping: 22 },
  },
};

// ─── Nav item hover ──────────────────────────────────────────────────────────
export const navLinkHover: Variants = {
  rest: { color: "inherit" },
  hover: {
    color: "#0EA5A4",
    transition: { duration: 0.2 },
  },
};

// ─── Mobile menu slide-in ────────────────────────────────────────────────────
export const mobileMenu: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { type: "tween", duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: [0, 0, 0.2, 1] },
  },
};

// ─── Mobile menu item (stagger child) ────────────────────────────────────────
export const mobileMenuItem: Variants = {
  closed: { opacity: 0, x: 24 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Backdrop overlay ────────────────────────────────────────────────────────
export const backdrop: Variants = {
  closed: { opacity: 0, pointerEvents: "none" as const },
  open: { opacity: 1, pointerEvents: "auto" as const, transition: { duration: 0.25 } },
};

// ─── Tab / panel switch ──────────────────────────────────────────────────────
export const tabPanel: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2 },
  },
};

// ─── Number counter (used with useInView) ────────────────────────────────────
export const counterItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.1 },
  },
};

// ─── Floating card (hero badges) ─────────────────────────────────────────────
export const floatingCard: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

// ─── Accordion open/close ────────────────────────────────────────────────────
export const accordionContent: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25 } },
  },
};

// ─── Skeleton pulse ──────────────────────────────────────────────────────────
export const skeletonPulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

// ─── Viewport settings (shared) ──────────────────────────────────────────────
export const viewport = { once: true, margin: "-80px 0px" };
export const viewportEager = { once: true, margin: "-40px 0px" };
