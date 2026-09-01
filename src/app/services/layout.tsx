import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Services | Sabbi Arrafta Sahib",
  description:
    "Professional website development services including responsive business websites, corporate websites, CMS platforms, and custom web applications. Fixed packages and custom quotes available.",
  keywords: [
    "Website Development",
    "Web Development Services",
    "Custom Websites",
    "Business Websites",
    "E-commerce Development",
    "Web Design",
    "Freelance Developer",
    "Website Pricing",
  ],
  openGraph: {
    title: "Website Development Services | Sabbi Arrafta Sahib",
    description:
      "Professional website development services. Modern, responsive sites built for performance.",
    url: "https://sahib-portfolio-zeta.vercel.app/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
