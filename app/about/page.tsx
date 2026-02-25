import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import {
  ChevronRight,
  Target,
  Heart,
  Eye,
  Globe,
  ShieldCheck,
  Clock,
  Users,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about North Fin Services - a Canada-wide online tax filing service dedicated to helping individuals and businesses file accurately and maximize their refunds. We speak English, Hindi & Punjabi.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy First",
    description:
      "Every return is thoroughly reviewed before filing. We ensure compliance with all CRA requirements and maximize every eligible credit and deduction.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "No hidden fees, no surprises. We explain every aspect of your tax return in plain language, so you know exactly what you are filing and why.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description:
      "We are passionate about serving Canada's diverse communities. From international students to newcomers, everyone deserves expert tax help.",
  },
  {
    icon: Clock,
    title: "Speed & Efficiency",
    description:
      "Most returns are prepared and filed within 24 to 48 hours. We respect your time and deliver fast without compromising accuracy.",
  },
];

const stats = [
  { label: "Canada-Wide Service", value: "100% Online" },
  { label: "Languages Supported", value: "3" },
  { label: "Turnaround Time", value: "24-48 hrs" },
  { label: "Client Satisfaction", value: "Guaranteed" },
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
      name: "About",
      item: "https://northfinservices.ca/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        <Image
          src="/assets/hero1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            About Us
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Your Trusted Tax Partner Across Canada
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            North Fin Services was founded with a simple mission: make expert
            tax filing accessible, affordable, and hassle-free for every
            Canadian.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Start with a free chat
            </Link>
          </Button>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left column: story text */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Our Story
              </h2>
              <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                <p>
                  Canada is a nation built by people from around the world.
                  International students arrive with dreams of education.
                  Newcomers start fresh with hopes for a better future.
                  Entrepreneurs take the leap into self-employment. Yet for many
                  of these Canadians, navigating the tax system feels
                  overwhelming and intimidating.
                </p>
                <p>
                  North Fin Services was created to change that. We believe that
                  everyone - regardless of their background, language, or level
                  of tax knowledge - deserves access to professional,
                  trustworthy tax services at a fair price.
                </p>
                <p>
                  As a fully online service, we proudly serve clients in every
                  province and territory. Whether you are in Toronto, Vancouver,
                  Calgary, or a small town in the Maritimes, our expert team is
                  just a click away. And because we understand the unique needs
                  of Canada&apos;s diverse communities, we offer our services in
                  English, Hindi, and Punjabi.
                </p>
              </div>
            </div>
            {/* Right column: photo above mission & vision */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/assets/Myphoto.png"
                  alt="North Fin Services team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-secondary p-6">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    To provide accurate, affordable, and accessible tax filing
                    services to every Canadian - empowering individuals and
                    businesses to keep more of what they earn.
                  </p>
                </div>
                <div className="rounded-xl bg-secondary p-6">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Our Vision
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    To be Canada&apos;s most trusted online tax service, known
                    for expertise, speed, and a commitment to serving diverse
                    communities with care and respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What We Stand For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Our values guide every interaction, every return, and every decision
            we make.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Work with us - free consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Award className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Why Clients Trust Us
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Tax filing is personal. It involves your income, your family, and
              your financial future. That is why trust is the foundation of
              everything we do at North Fin Services.
            </p>
            <p>
              We use secure, encrypted systems to protect your data. We explain
              every step of the process in plain language. And we stand behind
              our work with a maximum refund guarantee - if you find a larger
              refund elsewhere, we will match it.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Maximum Refund Guarantee
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Users className="h-5 w-5 text-primary" />
              Multilingual Support
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              24-48 Hour Turnaround
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
