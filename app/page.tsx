import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { FaqAccordionTracked } from "@/components/faq-accordion-tracked";
import { CTASection } from "@/components/cta-section";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  Globe,
  Lock,
  GraduationCap,
  Plane,
  Briefcase,
  Building2,
  FileText,
  Receipt,
  TrendingUp,
  CheckCircle2,
  Upload,
  BadgeDollarSign,
} from "lucide-react";

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "Maximum Refund Guarantee",
  },
  {
    icon: Clock,
    label: "24-48 Hour Turnaround",
  },
  {
    icon: Globe,
    label: "English, Hindi & Punjabi",
  },
  {
    icon: Lock,
    label: "100% Secure & Online",
  },
];

const taxSituations = [
  {
    icon: GraduationCap,
    title: "International Students",
    description:
      "Claim tuition credits, report scholarships, and file your first Canadian tax return with expert guidance.",
    href: "/services/personal-tax-filing",
  },
  {
    icon: Plane,
    title: "Newcomers to Canada",
    description:
      "Navigate your first Canadian tax filing confidently. We handle part-year residency, foreign income, and all CRA requirements.",
    href: "/services/personal-tax-filing",
  },
  {
    icon: Briefcase,
    title: "Self-Employed & Freelancers",
    description:
      "Maximize deductions, file GST/HST returns, and keep more of what you earn with proper business expense tracking.",
    href: "/services/gst-hst-returns",
  },
  {
    icon: Building2,
    title: "Small Business Owners",
    description:
      "Strategic tax planning, GST/HST compliance, and proactive advisory to help your business grow tax-efficiently.",
    href: "/services/tax-planning",
  },
];

const services = [
  {
    icon: FileText,
    title: "Personal Tax Filing (T1)",
    description:
      "Complete individual income tax return preparation and filing with the CRA. We ensure accuracy and maximize your refund.",
    href: "/services/personal-tax-filing",
  },
  {
    icon: Receipt,
    title: "GST/HST Returns",
    description:
      "Accurate GST/HST filing for self-employed individuals and businesses. We track input tax credits and ensure compliance.",
    href: "/services/gst-hst-returns",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning & Advisory",
    description:
      "Proactive tax strategies to minimize your tax liability. RRSP optimization, TFSA planning, and business structuring.",
    href: "/services/tax-planning",
  },
];

const steps = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Book a Free Consultation",
    description:
      "Schedule a call or fill out our contact form. We'll review your situation and recommend the right service for you.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Share Your Documents",
    description:
      "Securely upload your tax slips, receipts, and documents through our encrypted portal. We'll handle the rest.",
  },
  {
    number: "03",
    icon: BadgeDollarSign,
    title: "Get Your Maximum Refund",
    description:
      "We prepare and file your return with the CRA. You get your maximum legal refund - fast.",
  },
];

const faqs = [
  {
    question: "What documents do I need to file my taxes in Canada?",
    answer:
      "You'll typically need your T4 slips (employment income), T5 slips (investment income), any T2202 tuition certificates, RRSP contribution receipts, rental income records, and receipts for eligible deductions. We'll provide a complete checklist based on your situation.",
  },
  {
    question: "When is the tax filing deadline in Canada?",
    answer:
      "For most Canadians, the deadline to file your income tax return is April 30th. If you or your spouse are self-employed, the filing deadline is June 15th, but any balance owing is still due by April 30th.",
  },
  {
    question: "Can you help if I haven't filed taxes for previous years?",
    answer:
      "Yes, we can help you file tax returns for up to 10 previous years. Many people discover they are owed refunds from prior years. We'll review your situation and file any outstanding returns.",
  },
  {
    question: "Do you offer services in languages other than English?",
    answer:
      "Yes! We proudly serve clients in English, Hindi, and Punjabi. Our multilingual team ensures you can communicate comfortably about your tax situation.",
  },
  {
    question: "How does online tax filing work with North Fin Services?",
    answer:
      "It's simple: book a free consultation, securely upload your documents through our portal, and our experts prepare and file your return. Everything is done online - no in-person visit needed. We serve clients across all of Canada.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
        <Image
          src="/assets/hero4.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(42,91,215,0.3)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Trusted Tax Experts Across Canada
            </p>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Expert Tax Filing, Maximum Refund Guaranteed
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Professional online tax filing for individuals and businesses.
              Personal tax returns, GST/HST, and strategic tax planning - filed
              in <span className="font-bold">24-48 hours</span>.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <TrackedLink
                  href="/contact"
                  eventName="cta_click"
                  eventProperties={{ text: "Book Free Consultation", section: "hero" }}
                >
                  Book Free Consultation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </TrackedLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <TrackedLink
                  href="/services"
                  eventName="cta_click"
                  eventProperties={{ text: "Explore Our Services", section: "hero" }}
                >
                  Explore Our Services
                </TrackedLink>
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-2 rounded-lg bg-primary-foreground/5 px-4 py-4 text-center backdrop-blur-sm"
              >
                <badge.icon className="h-6 w-6 text-primary-foreground/90" />
                <span className="text-xs font-medium text-primary-foreground/80 sm:text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Situations Section */}
      <section className="py-16 lg:py-24">
        <AnimateOnScroll className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/srction-business.jpg"
              alt="Tax filing for business and individuals"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Tax Filing for Every Situation
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Whether you are a student, newcomer, freelancer, or business owner
              - we have the expertise to handle your Canadian tax needs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {taxSituations.map((situation) => (
              <TrackedLink
                key={situation.title}
                href={situation.href}
                eventName="service_card_click"
                eventProperties={{ service_name: situation.title, section: "Tax Situations" }}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <situation.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {situation.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {situation.description}
                </p>
                <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  Learn More
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </TrackedLink>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventProperties={{ text: "Get your free assessment", section: "Tax Situations" }}
              >
                Get your free assessment
              </TrackedLink>
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Services Overview */}
      <section className="bg-secondary py-16 lg:py-24">
        <AnimateOnScroll className="mx-auto max-w-7xl px-4 lg:px-8" delay={100}>
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/section-laptop-work-office.jpg"
              alt="Professional tax filing services"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Our Tax Filing Services
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Comprehensive tax services designed to save you time, money, and
              stress. All available 100% online across Canada.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <TrackedLink
                key={service.title}
                href={service.href}
                eventName="service_card_click"
                eventProperties={{ service_name: service.title, section: "Services Overview" }}
                className="group flex flex-col rounded-xl border border-border bg-background p-8 transition-all hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  Learn More
                </span>
              </TrackedLink>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <AnimateOnScroll className="mx-auto max-w-7xl px-4 lg:px-8" delay={100}>
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/section-remote-work.jpg"
              alt="100% online tax filing across Canada"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Why Canadians Choose North Fin Services
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We combine expertise, speed, and personal service to deliver the
              best tax filing experience in Canada.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center rounded-xl border border-border p-8 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {feature.label}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventProperties={{ text: "Join them - get started free", section: "Why Choose Us" }}
              >
                Join them - get started free
                <ChevronRight className="ml-1 h-4 w-4" />
              </TrackedLink>
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-16 lg:py-24">
        <AnimateOnScroll className="mx-auto max-w-7xl px-4 lg:px-8" delay={100}>
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/section-documents.jpg"
              alt="Share your documents securely"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Three simple steps to get your taxes filed - all from the comfort
              of your home.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24">
        <AnimateOnScroll className="mx-auto max-w-3xl px-4 lg:px-8" delay={100}>
          <div className="text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Quick answers to common questions about tax filing in Canada.
            </p>
          </div>
          <div className="mt-10">
            <FaqAccordionTracked faqs={faqs} />
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline">
              <TrackedLink
                href="/faq"
                eventName="cta_click"
                eventProperties={{ text: "View All FAQs", section: "FAQ Preview" }}
              >
                View All FAQs
              </TrackedLink>
            </Button>
            <Button asChild>
              <TrackedLink
                href="/contact"
                eventName="cta_click"
                eventProperties={{ text: "Get a free consultation", section: "FAQ Preview" }}
              >
                Get a free consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </TrackedLink>
            </Button>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Final CTA */}
      <CTASection variant="dark" />
    </>
  );
}
