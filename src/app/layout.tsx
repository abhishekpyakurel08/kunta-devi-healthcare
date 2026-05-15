import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0EA5A4",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kuntadevihealthcare.com'),
  title: {
    default: 'Kunta Devi Health Care',
    template: '%s | Kunta Devi Health Care',
  },
  description:
    'Trusted healthcare services for families. Medical specialists, diagnostics, pharmacy, and health consultations.',
  keywords: [
    'hospital Nepal',
    'healthcare',
    'medical clinic',
    'doctor appointment',
    'pharmacy',
    'Kunta Devi Health Care',
  ],
  openGraph: {
    title: 'Kunta Devi Health Care',
    description: 'Trusted healthcare for every family.',
    url: 'https://kuntadevihealthcare.com',
    siteName: 'Kunta Devi Health Care',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunta Devi Health Care',
    description: 'Trusted healthcare for every family.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        jakarta.variable
      )}>
        <div className="page-transition">
          {children}
        </div>
      </body>
    </html>
  );
}