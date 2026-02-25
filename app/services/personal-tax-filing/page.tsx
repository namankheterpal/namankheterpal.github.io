import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import {
  ChevronRight,
  FileText,
  CheckCircle2,
  GraduationCap,
  Plane,
  Briefcase,
  Users,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Tax Filing (T1) | Canada-Wide Service",
  description:
    "Professional T1 personal income tax return filing in Canada. Expert service for employees, students, newcomers, retirees, and more. Maximum refund guaranteed. File online in 24-48 hours.",
};

const whoItsFor = [
  {
    icon: Briefcase,
    title: "Employees",
    description: "T4 employment income, deductions, and credits.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Tuition credits (T2202), scholarships, and education deductions.",
  },
  {
    icon: Plane,
    title: "Newcomers & Immigrants",
    description:
      "First-year and part-year resident returns, foreign income reporting.",
  },
  {
    icon: Users,
    title: "Families",
    description: "Canada Child Benefit, spousal claims, and family deductions.",
  },
];

const included = [
  "T1 General Income Tax Return preparation and review",
  "Employment income (T4), investment income (T5), and pension (T4A)",
  "RRSP deduction and contribution room optimization",
  "Tuition (T2202) and education credit claims",
  "Charitable donation and medical expense claims",
  "Rental income and expense reporting (T776)",
  "Capital gains and losses reporting",
  "CRA EFILE for fast processing and refunds",
  "Notice of Assessment review",
  "Support with CRA correspondence",
];

const deadlines = [
  {
    date: "February 28",
    description: "Employers must issue T4 slips for the previous tax year",
  },
  {
    date: "March 1",
    description: "RRSP contribution deadline for the previous tax year",
  },
  {
    date: "April 30",
    description: "Tax filing deadline for most Canadians and payment due date",
  },
  {
    date: "June 15",
    description:
      "Filing deadline for self-employed (balance owing still due April 30)",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Personal Tax Filing (T1)",
  provider: {
    "@type": "AccountingService",
    name: "North Fin Services",
    url: "https://northfinservices.ca",
  },
  description:
    "Professional T1 personal income tax return preparation and electronic filing with the CRA for individuals across Canada.",
  areaServed: { "@type": "Country", name: "Canada" },
  serviceType: "Personal Tax Filing",
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
      name: "Personal Tax Filing",
      item: "https://northfinservices.ca/services/personal-tax-filing",
    },
  ],
};

export default function PersonalTaxFilingPage() {
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
          src="/assets/section-documents.jpg"
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
                Personal Tax Filing
              </span>
            </div>
            <FileText className="mx-auto mb-4 h-12 w-12 text-primary-foreground/90" />
            <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Personal Tax Filing (T1)
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Accurate, fast, and hassle-free T1 income tax return preparation
              for individuals across Canada. We ensure every credit and
              deduction is claimed.
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

      {/* Who It's For */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Who Is This Service For?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Our personal tax filing service covers all types of individual tax
            situations in Canada.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoItsFor.map((item) => (
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
                Get your free T1 assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What&apos;s Included
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Everything you need for a complete, accurate personal tax return.
          </p>
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

      {/* Important Deadlines */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Important CRA Deadlines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Stay ahead of key dates to avoid penalties and interest charges.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            {deadlines.map((deadline) => (
              <div
                key={deadline.date}
                className="flex items-start gap-4 rounded-lg border border-border p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {deadline.date}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {deadline.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Free consultation - no obligation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-secondary py-12">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 lg:px-8">
          <ShieldCheck className="h-10 w-10 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold text-foreground">
              Maximum Refund Guarantee
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              We guarantee to find every eligible credit and deduction to
              maximize your tax refund. If you find a higher refund elsewhere,
              we will match it.
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
