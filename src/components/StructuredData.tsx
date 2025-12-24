export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sabbi Arrafta Sahib",
    jobTitle: "Front-end Developer",
    description:
      "Front-end Developer specializing in React, Next.js, and TypeScript. Available for remote work and freelance projects.",
    url: "https://sabbiarraftasahib.com", // Replace with actual domain
    sameAs: [
      "https://github.com/yourusername", // Replace with actual GitHub
      "https://linkedin.com/in/yourusername", // Replace with actual LinkedIn
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science & Engineering",
      description: "BSc in Computer Science & Engineering",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
