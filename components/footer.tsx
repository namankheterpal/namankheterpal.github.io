"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone, Instagram } from "lucide-react";
import { track } from "@/lib/analytics";

const footerLinks = {
  services: [
    { name: "Personal Tax Filing (T1)", href: "/services/personal-tax-filing" },
    { name: "GST/HST Returns", href: "/services/gst-hst-returns" },
    { name: "Tax Planning & Advisory", href: "/services/tax-planning" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="North Fin Services"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-lg font-semibold">North Fin Services</span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Expert tax filing services for individuals and businesses across
              Canada. We make tax season simple, fast, and stress-free.
            </p>
            <div className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2">
              <Globe className="h-4 w-4 shrink-0 text-primary-foreground/70" />
              <span className="text-sm text-primary-foreground/80">
                We speak English, Hindi & Punjabi
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h3>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer services navigation"
            >
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Company
            </h3>
            <nav
              className="flex flex-col gap-2"
              aria-label="Footer company navigation"
            >
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                Legal
              </h3>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:canipunsood@gmail.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                canipunsood@gmail.com
              </a>
              <a
                href="tel:+16398954000"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                onClick={() => track("phone_call_click", { source: "footer" })}
              >
                <Phone className="h-4 w-4 shrink-0" />
                (639) 895-4000
              </a>
              <a
                href="https://www.instagram.com/northfinservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                Follow us on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            {new Date().getFullYear()} North Fin Services. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Serving all of Canada - 100% online tax filing services
          </p>
        </div>
      </div>
    </footer>
  );
}
