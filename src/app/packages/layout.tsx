import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Health Packages | Kunta Devi Health Care",
  description: "Affordable preventive healthcare packages in Kathmandu. Explore our full-body checkups, general wellness, and corporate screening plans.",
  path: "/packages",
});

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
