import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import {
  ChevronRight,
  FileText,
  Receipt,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tax Filing Services in Canada",
  description:
    "Explore our comprehensive tax filing services: Personal Tax Filing (T1), GST/HST Returns, and Tax Planning & Advisory. 100% online, serving all of Canada.",
}

const services = [
  {
    icon: FileText,
    title: "Personal Tax Filing (T1)",
    description:
      "Complete individual income tax return preparation and e-filing with the CRA. Ideal for employees, students, newcomers, retirees, and anyone filing a T1 return in Canada.",
    features: [
      "T1 income tax return preparation",
      "Employment, investment, and rental income",
      "Tuition and education credits for students",
      "Newcomer and part-year resident returns",
      "RRSP and charitable donation claims",
      "CRA e-filing for faster refunds",
    ],
    href: "/services/personal-tax-filing",
  },
  {
    icon: Receipt,
    title: "GST/HST Returns",
    description:
      "Accurate GST/HST return preparation and filing for self-employed individuals, freelancers, and small businesses. We ensure compliance and maximize your input tax credits.",
    features: [
      "GST/HST return filing with CRA",
      "Input tax credit (ITC) optimization",
      "Quarterly, annual, or custom filing periods",
      "Self-employed and sole proprietor filing",
      "Small business GST/HST compliance",
      "Voluntary registration guidance",
    ],
    href: "/services/gst-hst-returns",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning & Advisory",
    description:
      "Proactive tax strategies tailored to your financial situation. We help you minimize your tax liability and make smarter financial decisions year-round.",
    features: [
      "RRSP and TFSA optimization strategies",
      "Income splitting opportunities",
      "Business structure and incorporation advice",
      "Capital gains planning",
      "Year-end tax planning reviews",
      "Retirement and estate tax planning",
    ],
    href: "/services/tax-planning",
  },
]

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
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        <Image
          src="/assets/hero4.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            What We Offer
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Tax Filing Services for All of Canada
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            From personal tax returns to strategic tax planning, we provide
            comprehensive services designed to save you time and money.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/assets/section-laptop-work-office.jpg"
              alt="Professional tax filing services"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-8 rounded-2xl border border-border p-8 lg:flex-row lg:items-start lg:p-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Button asChild className="mt-6">
                    <Link href={service.href}>
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What&apos;s Included
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get started for free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  )
}
