import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Canadian tax filing, personal tax returns (T1), GST/HST filing, tax planning, CRA deadlines, and how North Fin Services works.",
};

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What services does North Fin Services offer?",
        answer:
          "We offer three core services: Personal Tax Filing (T1) for individuals, GST/HST Return Filing for businesses and self-employed individuals, and Tax Planning & Advisory for proactive tax strategies. All services are available 100% online across Canada.",
      },
      {
        question: "Do I need to visit an office to file my taxes?",
        answer:
          "No. North Fin Services operates entirely online. You can book a consultation, submit documents, and receive your completed return - all from the comfort of your home. We serve clients in every province and territory of Canada.",
      },
      {
        question: "What languages do you offer services in?",
        answer:
          "We provide services in English, Hindi, and Punjabi. Our multilingual team ensures you can communicate comfortably and clearly about your tax situation.",
      },
      {
        question: "How much do your services cost?",
        answer:
          "We offer a free initial consultation to understand your situation. After that, we provide a clear, upfront quote based on the complexity of your return. No hidden fees, no surprises. Contact us to get your personalized quote.",
      },
      {
        question: "Is my personal and financial information secure?",
        answer:
          "Absolutely. We use encrypted systems and secure document upload portals to protect your data. We follow strict privacy practices in compliance with Canadian privacy laws. Your information is never shared with third parties.",
      },
    ],
  },
  {
    title: "Personal Tax Filing (T1)",
    faqs: [
      {
        question: "What documents do I need to file my personal tax return?",
        answer:
          "Common documents include T4 slips (employment income), T5 slips (investment income), T2202 (tuition certificates), RRSP contribution receipts, charitable donation receipts, rental income records, and medical expense receipts. We provide a detailed checklist based on your situation.",
      },
      {
        question: "When is the deadline to file my personal taxes in Canada?",
        answer:
          "For most Canadians, the T1 filing deadline is April 30th. If you or your spouse are self-employed, the filing deadline is June 15th, but any balance owing is still due by April 30th to avoid interest charges.",
      },
      {
        question: "Can you file taxes for international students?",
        answer:
          "Yes. We specialize in helping international students file their Canadian tax returns. Students can claim tuition credits using the T2202 form, report scholarships, and may be eligible for the GST/HST credit. Even if you earned no income, filing can benefit you.",
      },
      {
        question: "I am a newcomer to Canada. Do I need to file taxes?",
        answer:
          "If you were a resident of Canada for any part of the tax year and earned income, you should file a tax return. Even if you had no income, filing can make you eligible for benefits like the GST/HST credit, Canada Child Benefit, and provincial credits. We specialize in newcomer and part-year resident returns.",
      },
      {
        question: "Can you help if I missed filing taxes for previous years?",
        answer:
          "Yes. You can file tax returns for up to 10 previous years with the CRA. Many clients discover they are owed refunds from past years. We will review your situation and file any outstanding returns to bring you up to date.",
      },
      {
        question: "What is the maximum refund guarantee?",
        answer:
          "We guarantee that we will claim every eligible credit and deduction to maximize your tax refund. If you find a larger refund through another tax preparer for the same tax return, we will review and match it.",
      },
    ],
  },
  {
    title: "GST/HST Returns",
    faqs: [
      {
        question: "Who needs to register for and file GST/HST?",
        answer:
          "You must register for a GST/HST account once your total taxable revenue exceeds $30,000 in a single calendar quarter or in four consecutive calendar quarters. This applies to sole proprietors, freelancers, partnerships, and corporations.",
      },
      {
        question: "What are input tax credits (ITCs)?",
        answer:
          "Input tax credits allow you to recover the GST/HST you paid on business-related purchases and expenses. For example, if you paid GST on office supplies, software, or professional services for your business, you can claim those amounts back on your GST/HST return.",
      },
      {
        question: "How often do I need to file GST/HST returns?",
        answer:
          "Filing frequency depends on your annual taxable revenue: Annual filing for revenue up to $1.5 million, quarterly filing for revenue between $1.5 million and $6 million, and monthly filing for revenue over $6 million. You can also voluntarily elect a more frequent filing period.",
      },
      {
        question: "Should I voluntarily register for GST/HST?",
        answer:
          "It depends on your business situation. Voluntary registration allows you to claim input tax credits on expenses, which can save you money. However, it also means you must charge GST/HST to your clients. We can analyze your specific situation and advise whether registration makes financial sense for you.",
      },
    ],
  },
  {
    title: "Tax Planning & Advisory",
    faqs: [
      {
        question: "What is tax planning and why do I need it?",
        answer:
          "Tax planning is the process of organizing your financial affairs to minimize your tax liability within the law. It includes strategies like optimizing RRSP and TFSA contributions, income splitting, timing capital gains, and choosing the right business structure. Good tax planning can save you thousands of dollars every year.",
      },
      {
        question: "When should I start tax planning?",
        answer:
          "The best time is as early in the tax year as possible. Many strategies - such as RRSP contributions, business expense planning, and income splitting - need to be implemented before year-end to be effective. However, it is never too late to start. Contact us for a review of your current situation.",
      },
      {
        question: "Is tax planning only for high-income earners?",
        answer:
          "No. Tax planning benefits everyone. Whether you are a student, an employee, self-employed, or a small business owner, there are strategies that can reduce your tax burden. Even simple actions like maximizing TFSA contributions or timing medical expense claims can make a difference.",
      },
      {
        question: "Can you help me decide whether to incorporate my business?",
        answer:
          "Yes. Incorporation can offer significant tax advantages, but it also comes with additional costs and complexity. We analyze your income level, business type, growth plans, and personal financial goals to determine whether incorporation is the right move for you.",
      },
    ],
  },
  {
    title: "How We Work",
    faqs: [
      {
        question: "How do I get started with North Fin Services?",
        answer:
          "Getting started is simple: 1) Book a free consultation through our contact page or by calling us. 2) We review your situation and recommend the right service. 3) You securely upload your documents. 4) We prepare and file your return. Everything is done online.",
      },
      {
        question: "How long does it take to file my tax return?",
        answer:
          "Most personal tax returns are prepared and filed within 24 to 48 hours after we receive all your documents. More complex returns (rental income, self-employment, multiple income sources) may take slightly longer. We will always communicate the timeline upfront.",
      },
      {
        question: "How do I send you my documents?",
        answer:
          "We provide a secure, encrypted document upload portal. You can upload photos or scans of your tax slips, receipts, and any other relevant documents. All data is encrypted in transit and at rest.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept e-Transfer, credit cards, and debit payments. Payment details are provided after your return is prepared and reviewed with you.",
      },
    ],
  },
];

// Generate FAQPage schema from all categories
const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
      name: "FAQ",
      item: "https://northfinservices.ca/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        <Image
          src="/assets/hero5.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            FAQ
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Everything you need to know about our tax filing services, Canadian
            tax deadlines, and how we work.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <FaqAccordion categories={faqCategories} />
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Ask us for free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Our team is happy to help. Book a free consultation and we will answer any questions you have about your tax situation."
        buttonText="Contact Us"
        variant="dark"
      />
    </>
  );
}
