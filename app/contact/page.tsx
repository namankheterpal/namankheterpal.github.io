import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Mail, Phone, Clock, Globe, MapPin, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation",
  description:
    "Get in touch with North Fin Services for a free tax consultation. We serve all of Canada online. Available in English, Hindi, and Punjabi. Call, email, or fill out our contact form.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "canipunsood@gmail.com",
    href: "mailto:canipunsood@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(639) 895-4000",
    href: "tel:+16398954000",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@northfinservices",
    href: "https://www.instagram.com/northfinservices/",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://northfinservices.ca",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://northfinservices.ca/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        <Image
          src="/assets/hero2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Get In Touch
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Book Your Free Consultation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Have questions about your taxes? Reach out to our team. We offer a
            free initial consultation to review your situation and recommend the
            right service.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                Fill out the form below and we will get back to you within one
                business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Prefer to reach out directly? Here is how you can get in
                  touch.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={
                      detail.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <detail.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Business Hours
                  </h3>
                </div>
                <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 6:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">
                      10:00 AM - 4:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Extended hours available during tax season (Feb - Apr)
                </p>
              </div>

              {/* Languages & Location */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                  <Globe className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Multilingual Support
                    </p>
                    <p className="text-xs text-muted-foreground">
                      English, Hindi & Punjabi
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Serving All of Canada
                    </p>
                    <p className="text-xs text-muted-foreground">
                      100% online - no in-person visit needed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
