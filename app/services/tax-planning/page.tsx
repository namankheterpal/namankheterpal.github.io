import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import {
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  PiggyBank,
  BarChart3,
  Building2,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Planning & Advisory | Strategic Tax Strategies",
  description:
    "Proactive tax planning and advisory services for Canadians. RRSP & TFSA optimization, income splitting, business structuring, and year-round tax strategies to minimize your liability.",
};

const strategies = [
  {
    icon: PiggyBank,
    title: "RRSP & TFSA Optimization",
    description:
      "Maximize your registered account contributions to reduce taxable income and grow wealth tax-free. We calculate optimal contribution amounts based on your income and tax bracket.",
  },
  {
    icon: Users,
    title: "Income Splitting",
    description:
      "Legally distribute income among family members to reduce your overall household tax burden. We identify pension splitting, spousal RRSP, and TOSI-compliant strategies.",
  },
  {
    icon: Building2,
    title: "Business Structuring",
    description:
      "Should you incorporate? We analyze your business situation to determine the most tax-efficient structure - sole proprietorship, partnership, or corporation.",
  },
  {
    icon: BarChart3,
    title: "Capital Gains Planning",
    description:
      "Strategic timing of capital gains and losses to minimize taxes. Includes principal residence exemption planning and capital gains reserve strategies.",
  },
  {
    icon: Target,
    title: "Year-End Tax Planning",
    description:
      "Proactive reviews before year-end to ensure you have taken advantage of all available deductions, credits, and tax deferral opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Retirement & Estate Planning",
    description:
      "Tax-efficient strategies for retirement income, RRIF withdrawals, OAS clawback avoidance, and estate planning to preserve wealth for your beneficiaries.",
  },
];

const benefits = [
  "Save thousands of dollars in taxes each year",
  "Avoid CRA penalties and surprise tax bills",
  "Optimize your RRSP, TFSA, and registered accounts",
  "Make informed financial decisions year-round",
  "Reduce your effective tax rate legally",
  "Plan for major life events - retirement, home purchase, business sale",
  "Coordinate personal and business taxes seamlessly",
  "Receive personalized, ongoing tax advice from experts",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tax Planning & Advisory",
  provider: {
    "@type": "AccountingService",
    name: "North Fin Services",
    url: "https://northfinservices.ca",
  },
  description:
    "Proactive tax planning and advisory services including RRSP optimization, income splitting, business structuring, and year-round tax strategies.",
  areaServed: { "@type": "Country", name: "Canada" },
  serviceType: "Tax Planning",
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
      name: "Tax Planning & Advisory",
      item: "https://northfinservices.ca/services/tax-planning",
    },
  ],
};

export default function TaxPlanningPage() {
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
          src="/assets/srction-business.jpg"
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
                Tax Planning & Advisory
              </span>
            </div>
            <TrendingUp className="mx-auto mb-4 h-12 w-12 text-primary-foreground/90" />
            <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Tax Planning & Advisory
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Proactive tax strategies that save you money year after year. We
              help you make smarter financial decisions and minimize your tax
              liability legally.
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

      {/* Strategies Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Our Tax Planning Strategies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            We tailor tax strategies to your unique financial situation, goals,
            and timeline.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((strategy) => (
              <div
                key={strategy.title}
                className="flex flex-col rounded-xl border border-border p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <strategy.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {strategy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a free tax planning call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Benefits of Professional Tax Planning
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Tax planning is not just for the wealthy. Every Canadian can benefit
            from proactive tax strategies.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Start */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            When Should You Start Tax Planning?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The best time to start tax planning is now. Many tax-saving
            strategies require action before year-end, and some decisions - like
            incorporation or RRSP contributions - have specific deadlines. The
            earlier you start, the more opportunities you have to reduce your
            tax bill. Whether you are planning for the current tax year or
            thinking about the future, our advisors can create a customized plan
            that works for your situation.
          </p>
          <Button asChild className="mt-8">
            <Link href="/contact">
              Get Started With a Free Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
