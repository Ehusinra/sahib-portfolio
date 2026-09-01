"use client";

import { motion } from "framer-motion";

interface AdditionalService {
  title: string;
  priceRange: string;
}

export default function AdditionalServices() {
  const services: AdditionalService[] = [
    { title: "Additional page", priceRange: "৳1,000–3,000" },
    { title: "Additional revision round", priceRange: "৳2,000+" },
    { title: "Logo/basic brand design", priceRange: "৳3,000–10,000" },
    { title: "SEO package", priceRange: "৳5,000+" },
    { title: "Payment gateway integration", priceRange: "৳5,000–15,000+" },
    { title: "Third-party API integration", priceRange: "৳5,000+" },
    { title: "Product/content upload", priceRange: "৳50–150/item" },
    { title: "Advanced animation", priceRange: "৳3,000+" },
    { title: "Admin dashboard", priceRange: "৳15,000+" },
    { title: "E-commerce functionality", priceRange: "৳25,000+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-4 mb-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 4 }}
            className="group flex items-center justify-between p-4 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm hover:border-accent-primary/40 hover:bg-background/70 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(59,130,246,0.1)]"
          >
            <h4 className="font-medium text-foreground group-hover:text-accent-primary transition-colors text-sm md:text-base">
              {service.title}
            </h4>
            <span className="text-sm md:text-base font-semibold text-accent-primary group-hover:scale-110 transition-transform">
              {service.priceRange}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="p-6 rounded-lg border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm"
      >
        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Note:</span> Final pricing for additional services depends on project complexity, timeline, and specific requirements. Contact me with details for an accurate quote.
        </p>
      </motion.div>
    </div>
  );
}
