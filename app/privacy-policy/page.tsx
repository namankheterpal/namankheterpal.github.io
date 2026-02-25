import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "North Fin Services privacy policy. Learn how we collect, use, and protect your personal and financial information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-12 md:py-16">
        <Image
          src="/assets/section-remote-work.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-primary-foreground/70">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="prose prose-slate mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-0 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-0 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mb-3">
            <div>
              <h2>1. Introduction</h2>
              <p>
                North Fin Services (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed
                to protecting the privacy and confidentiality of your personal
                and financial information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our tax filing services and visit our website.
              </p>
              <p>
                By using our services, you consent to the practices described in
                this policy. We operate in compliance with the Personal
                Information Protection and Electronic Documents Act (PIPEDA) and
                applicable provincial privacy legislation.
              </p>
            </div>

            <div>
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>
                We collect personal information necessary to provide tax filing
                services, including: full name, email address, phone number,
                date of birth, Social Insurance Number (SIN), mailing address,
                employment and income information, and tax-related documents
                such as T4, T5, T2202 slips, and receipts.
              </p>
              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect
                technical information such as your IP address, browser type,
                device information, and pages visited. This data helps us
                improve our website and services.
              </p>
            </div>

            <div>
              <h2>3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Prepare and file your tax returns with the CRA</li>
                <li>Provide tax planning and advisory services</li>
                <li>Communicate with you about your account and services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website</li>
              </ul>
            </div>

            <div>
              <h2>4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  With the Canada Revenue Agency (CRA) as required for tax
                  filing purposes
                </li>
                <li>
                  With service providers who assist us in operating our business
                  (e.g., secure document storage) under strict confidentiality
                  agreements
                </li>
                <li>
                  When required by law, regulation, or legal process
                </li>
                <li>
                  With your explicit consent
                </li>
              </ul>
            </div>

            <div>
              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your
                information, including encrypted data transmission (SSL/TLS),
                secure document upload portals, access controls, and regular
                security audits. However, no method of electronic transmission
                or storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal and tax information for the period
                required by Canadian tax law (generally 6 years from the end of
                the tax year) or as needed to provide our services. After this
                period, your data is securely destroyed.
              </p>
            </div>

            <div>
              <h2>7. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar technologies to improve
                your browsing experience, analyze website traffic, and
                understand user behavior. You can control cookie preferences
                through your browser settings. Disabling cookies may affect
                some website functionality.
              </p>
            </div>

            <div>
              <h2>8. Your Rights</h2>
              <p>Under Canadian privacy law, you have the right to:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Withdraw consent for certain uses of your information</li>
                <li>
                  File a complaint with the Office of the Privacy Commissioner
                  of Canada
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at
                canipunsood@gmail.com.
              </p>
            </div>

            <div>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &quot;Last updated&quot; date.
                We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your personal information, please contact us at:
              </p>
              <p>
                North Fin Services<br />
                Email: canipunsood@gmail.com<br />
                Phone: (639) 895-4000
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Questions? Reach out free
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
