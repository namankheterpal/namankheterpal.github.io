import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import {
  ChevronRight,
  Receipt,
  CheckCircle2,
  Briefcase,
  Store,
  Truck,
  Laptop,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST/HST Return Filing | For Businesses & Self-Employed",
  description:
    "Professional GST/HST return filing for self-employed individuals, freelancers, and small businesses in Canada. Maximize input tax credits. Fast and accurate filing.",
};

const whoNeedsToFile = [
  {
    icon: Laptop,
    title: "Freelancers & Contractors",
    description:
      "Independent contractors and freelancers earning over $30,000 annually.",
  },
  {
    icon: Briefcase,
    title: "Self-Employed Individuals",
    description:
      "Sole proprietors and self-employed professionals with GST/HST obligations.",
  },
  {
    icon: Store,
    title: "Small Business Owners",
    description:
      "Businesses that have exceeded the $30,000 small supplier threshold.",
  },
  {
    icon: Truck,
    title: "Voluntary Registrants",
    description:
      "Businesses that voluntarily registered to claim input tax credits (ITCs).",
  },
];

const included = [
  "GST/HST return preparation and CRA filing",
  "Input tax credit (ITC) calculation and optimization",
  "Review of GST/HST collected on sales",
  "Reconciliation of books with GST/HST accounts",
  "Filing for all reporting periods (monthly, quarterly, annual)",
  "Instalment payment calculations",
  "Quick Method election evaluation",
  "Voluntary registration guidance and advice",
  "CRA correspondence and audit support",
  "Deadline tracking and reminders",
];

const filingFrequencies = [
  {
    period: "Annual",
    threshold: "Revenue up to $1.5M",
    deadline: "3 months after fiscal year-end",
  },
  {
    period: "Quarterly",
    threshold: "Revenue $1.5M - $6M",
    deadline: "1 month after quarter-end",
  },
  {
    period: "Monthly",
    threshold: "Revenue over $6M",
    deadline: "1 month after month-end",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GST/HST Return Filing",
  provider: {
    "@type": "AccountingService",
    name: "North Fin Services",
    url: "https://northfinservices.ca",
  },
  description:
    "Professional GST/HST return preparation and filing for self-employed individuals, freelancers, and small businesses across Canada.",
  areaServed: { "@type": "Country", name: "Canada" },
  serviceType: "GST/HST Return Filing",
};

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
      name: "Services",
      item: "https://northfinservices.ca/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "GST/HST Returns",
      item: "https://northfinservices.ca/services/gst-hst-returns",
    },
  ],
};

export default function GstHstReturnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        <Image
          src="/assets/section-calculator.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Link
                href="/services"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground/80"
              >
                Services
              </Link>
              <span className="text-primary-foreground/40">/</span>
              <span className="text-sm text-primary-foreground/80">
                GST/HST Returns
              </span>
            </div>
            <Receipt className="mx-auto mb-4 h-12 w-12 text-primary-foreground/90" />
            <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              GST/HST Return Filing
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Accurate GST/HST filing for businesses and self-employed
              Canadians. We maximize your input tax credits and ensure full CRA
              compliance.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/contact">
                Book Free Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who Needs to File */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Who Needs to File GST/HST?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            You must register and file GST/HST returns once your business
            revenue exceeds $30,000 in a single calendar quarter or in four
            consecutive calendar quarters.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoNeedsToFile.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-xl border border-border p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a free GST/HST review
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What&apos;s Included in Our GST/HST Service
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Frequencies */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            GST/HST Filing Frequencies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Your filing frequency depends on your annual taxable revenue.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            {filingFrequencies.map((freq) => (
              <div
                key={freq.period}
                className="flex flex-col gap-2 rounded-lg border border-border p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground">{freq.period}</p>
                  <p className="text-sm text-muted-foreground">
                    {freq.threshold}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Deadline: {freq.deadline}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Talk to us free - no commitment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-secondary py-12">
        <div className="mx-auto flex max-w-4xl items-start gap-4 px-4 lg:px-8">
          <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-foreground">Did You Know?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Even if your revenue is below the $30,000 threshold, you can
              voluntarily register for GST/HST. This allows you to claim input
              tax credits on business expenses, which can save you money. We can
              help you decide if voluntary registration makes sense for your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 lg:px-8">
          <ShieldCheck className="h-10 w-10 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-foreground">
              Accuracy Guarantee
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              We guarantee accurate GST/HST filings. If a CRA reassessment
              occurs due to our error, we cover any penalties and interest.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start with a free consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
