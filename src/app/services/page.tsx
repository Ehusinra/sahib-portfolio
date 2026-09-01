"use client";

import ServiceHero from "@/components/ServiceHero";
import FeatureGrid from "@/components/FeatureGrid";
import PricingCard from "@/components/PricingCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import SupportCard from "@/components/SupportCard";
import MaintenanceCards from "@/components/MaintenanceCards";
import AdditionalServices from "@/components/AdditionalServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientOnlyParticles from "@/components/ClientOnlyParticles";
import ClientOnlyFloatingIcons from "@/components/ClientOnlyFloatingIcons";
import ClientOnlyBlobs from "@/components/ClientOnlyBlobs";
import ClickRipple from "@/components/ClickRipple";
import ClientOnlyThemeToggle from "@/components/ClientOnlyThemeToggle";
import ClientOnlyProfileButton from "@/components/ClientOnlyProfileButton";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const pricingPackages = [
    {
      name: "Basic",
      priceRange: "৳15,000–25,000",
      timeline: "5–7 working days",
      revisions: "2 revision rounds",
      features: [
        "3–5 pages",
        "Responsive design",
        "Contact form",
        "Google Maps",
        "Social links",
        "Basic SEO",
        "SSL/deployment setup",
      ],
    },
    {
      name: "Business",
      priceRange: "৳25,000–45,000",
      timeline: "7–14 working days",
      revisions: "3 revision rounds",
      features: [
        "5–10 pages",
        "Custom UI",
        "Gallery / blog / news",
        "Contact forms",
        "Analytics setup",
        "Basic performance optimization",
        "SEO-ready structure",
      ],
      isPopular: true,
    },
    {
      name: "Professional",
      priceRange: "৳45,000–80,000",
      timeline: "14–25 working days",
      revisions: "4 revision rounds",
      features: [
        "10–20 pages",
        "Advanced UI/UX",
        "Animations",
        "Dynamic sections",
        "Blog / projects / team",
        "Advanced forms",
        "Performance optimization",
        "Deployment",
      ],
    },
    {
      name: "Dynamic / CMS",
      priceRange: "৳70,000–120,000+",
      timeline: "20–35 working days",
      revisions: "4 revision rounds",
      features: [
        "Admin dashboard",
        "Database",
        "Content management",
        "Authentication",
        "CRUD functionality",
        "Search/filtering",
        "Backup and deployment",
      ],
    },
  ];

  const serviceCategories = [
    { icon: "🌐", name: "Business Websites", desc: "Professional sites for small to medium businesses" },
    { icon: "🏢", name: "Corporate Websites", desc: "Large-scale corporate presence and branding" },
    { icon: "👤", name: "Portfolio Websites", desc: "Personal portfolios for professionals and creatives" },
    { icon: "📰", name: "Dynamic / CMS", desc: "Content management systems for blogs and news" },
    { icon: "🛍️", name: "E-commerce", desc: "Full-featured online stores and shopping carts" },
    { icon: "⚙️", name: "Web Applications", desc: "Custom web apps with advanced functionality" },
  ];

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <CustomCursor />
      <ClientOnlyParticles />
      <ClientOnlyFloatingIcons />
      <ClientOnlyBlobs />
      <ClickRipple />
      <ScrollProgress />
      <ClientOnlyThemeToggle />
      <ClientOnlyProfileButton />

      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <ServiceHero
          onContactClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
          onPackagesClick={() => {
            const packagesSection = document.getElementById("packages");
            packagesSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 01: What I Offer */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                What I <span className="gradient-text">Offer</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                I specialize in building custom, high-quality websites tailored to different business needs
              </p>
            </motion.div>

            {/* Service Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group p-8 rounded-xl border border-border-subtle bg-background/50 backdrop-blur-sm hover:border-foreground/20 hover:bg-background/70 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 02: Website Packages */}
        <section
          id="packages"
          className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden"
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Website <span className="gradient-text">Packages</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Flexible packages with transparent pricing. Prices are starting estimates and may vary based on specific requirements.
              </p>
            </motion.div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {pricingPackages.map((pkg, index) => (
                <PricingCard
                  key={index}
                  index={index}
                  name={pkg.name}
                  priceRange={pkg.priceRange}
                  timeline={pkg.timeline}
                  revisions={pkg.revisions}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                />
              ))}
            </div>

            {/* Custom Projects Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-lg border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm text-center"
            >
              <p className="text-foreground/80">
                <span className="font-semibold text-foreground">Custom Projects:</span> Complex systems, e-commerce platforms, management applications typically start from <span className="font-semibold text-accent-primary">৳120,000</span> and are quoted separately based on requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 03: What's Included */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Every project includes comprehensive deliverables and support
              </p>
            </motion.div>

            <FeatureGrid />
          </div>
        </section>

        {/* Section 04: Development Process */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Development <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Transparent, step-by-step journey from concept to delivery
              </p>
            </motion.div>

            <ProcessTimeline />
          </div>
        </section>

        {/* Section 05: Revision Policy */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-20 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Revision <span className="gradient-text">Policy</span>
              </h2>
            </motion.div>

            {/* Revision Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Basic", rounds: "2 revision rounds" },
                { title: "Business", rounds: "3 revision rounds" },
                { title: "Professional", rounds: "4 revision rounds" },
                { title: "Dynamic/CMS", rounds: "4 revision rounds" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-accent-primary font-medium">{item.rounds}</p>
                </motion.div>
              ))}
            </div>

            {/* Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 rounded-xl border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm"
            >
              <p className="text-foreground/80 leading-relaxed">
                <span className="font-semibold text-foreground">What counts as a revision?</span> Reasonable modifications to the agreed design or functionality. This includes layout changes, color adjustments, minor content updates, and bug fixes within the scope.
              </p>
              <p className="text-foreground/70 mt-4 leading-relaxed">
                <span className="font-semibold text-foreground">What's NOT included?</span> New pages, new features, new integrations, major redesigns, or changes outside the agreed scope are quoted separately as additional services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 06: After-Sales Support */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                After-Sales <span className="gradient-text">Support</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Comprehensive support after delivery to ensure your site runs smoothly
              </p>
            </motion.div>

            <SupportCard />
          </div>
        </section>

        {/* Section 07: Maintenance Plans */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Maintenance <span className="gradient-text">Plans</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Optional ongoing support plans to keep your website running smoothly
              </p>
            </motion.div>

            <MaintenanceCards />
          </div>
        </section>

        {/* Section 08: Additional Services */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Additional <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Beyond packages: extra services available on demand
              </p>
            </motion.div>

            <AdditionalServices />
          </div>
        </section>

        {/* Section 09: Domain & Hosting */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Domain & <span className="gradient-text">Hosting</span>
              </h2>

              <div className="text-center space-y-6">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Domain registration and hosting are <span className="font-semibold text-foreground">not included</span> in the website development packages unless explicitly stated in the quotation.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-6 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm text-left"
                  >
                    <h3 className="font-semibold text-foreground mb-3">Option 1: Self-Managed</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      You purchase hosting and domain directly from a provider. Then provide me access to set up the website.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-6 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm text-left"
                  >
                    <h3 className="font-semibold text-foreground mb-3">Option 2: I Can Arrange</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      You can request me to arrange and manage hosting and domain setup as an additional service.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 10: Payment & Terms */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Payment & <span className="gradient-text">Project Terms</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Standard Projects</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-accent-primary">50%</span>
                    <span className="text-foreground/70">Advance payment to begin</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-accent-primary">50%</span>
                    <span className="text-foreground/70">Before final deployment</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Larger Projects</h3>
                <p className="text-foreground/70 mb-3">Milestone-based payment structure:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-accent-primary">40%</span>
                    <span className="text-foreground/70">At project start</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-accent-primary">30%</span>
                    <span className="text-foreground/70">At mid-point</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-accent-primary">30%</span>
                    <span className="text-foreground/70">Before final delivery</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-lg border border-accent-primary/20 bg-accent-primary/5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Important Terms</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Timeline begins after advance payment and receipt of required content</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>You must provide text, images, logo, and business information</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>New requirements outside the agreed scope incur additional charges</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Source code and assets handover occurs after all payments are settled</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 11: Custom Projects */}
        <section className="relative py-24 px-6 bg-background border-t border-border-subtle overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Have something more <span className="gradient-text">specific in mind?</span>
              </h2>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Every project is different. If you need an e-commerce platform, management system, booking system, dashboard, API integration, or another custom web application, I can prepare a tailored proposal based on your requirements.
              </p>

        {/* Custom Projects CTA */}
        <motion.button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="px-8 py-3 rounded-lg bg-accent-primary hover:bg-accent-primary/90 text-white font-medium text-base transition-all duration-300 inline-block hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          Discuss Your Project
        </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
