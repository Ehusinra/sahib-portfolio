"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Download, Loader2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form handling)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormStatus("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus("idle");
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 px-6 bg-background border-t border-border-subtle section-gradient-subtle overflow-hidden"
    >
      {/* Background accent orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Open to remote opportunities, freelance projects, and collaborations.
            Let&apos;s build something great together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Left Column - Contact Info & CV */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="group flex items-start gap-4 p-4 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-xl hover:border-foreground/20 transition-all hover:translate-x-2"
                >
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 mb-1">Email</p>
                    <p className="text-foreground font-medium">sabbiarrafta@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 border border-border-subtle bg-background/50 backdrop-blur-sm rounded-xl">
                  <div className="p-2 rounded-lg bg-accent-secondary/10 text-accent-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 mb-1">Location</p>
                    <p className="text-foreground font-medium">Bangladesh</p>
                    <p className="text-sm text-foreground/60">Open to Remote Work</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CV Download */}
            <motion.div variants={itemVariants}>
              <a
                href="/cv.pdf"
                download
                className="group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-foreground/50 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://https://github.com/Ehusinra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110 hover:rotate-6"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sabbi-arrafta-sahib-ehus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110 hover:rotate-6"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formStatus === "success"}
                className="group relative w-full px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : formStatus === "success" ? (
                  <span>Message Sent! ✓</span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </button>

              {formStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-accent-primary text-center"
                >
                  Thank you for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
