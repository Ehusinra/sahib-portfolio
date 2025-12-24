"use client";

import { Heart } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-subtle bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Sabbi Arrafta <span className="gradient-text">Sahib</span>
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Front-end Developer crafting scalable, high-performance web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Ehusinra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sabbi-arrafta-sahib-ehus/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border-subtle bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-foreground/50 mt-4">
              Open to remote work and freelance projects
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/50 text-center md:text-left">
              © {currentYear} Sabbi Arrafta Sahib. All rights reserved.
            </p>
            <p className="text-sm text-foreground/50 flex items-center gap-1.5">
              Built with{" "}
              <Heart className="w-3.5 h-3.5 text-accent-primary fill-accent-primary" />{" "}
              using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
