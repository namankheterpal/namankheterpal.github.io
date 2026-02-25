import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "North Fin Services terms of service. Read the terms and conditions that govern the use of our tax filing services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-12 md:py-16">
        <Image
          src="/assets/hero2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Terms of Service
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing the North Fin Services website or using any of our
                tax filing services, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </div>

            <div>
              <h2>2. Description of Services</h2>
              <p>
                North Fin Services provides online tax preparation, filing, and
                advisory services for individuals and businesses across Canada.
                Our services include Personal Tax Filing (T1), GST/HST Return
                Filing, and Tax Planning & Advisory services. All services are
                delivered electronically.
              </p>
            </div>

            <div>
              <h2>3. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Provide accurate, complete, and truthful information for all
                  tax return preparation
                </li>
                <li>
                  Supply all necessary documents and tax slips in a timely
                  manner
                </li>
                <li>
                  Review your tax return before it is filed and confirm its
                  accuracy
                </li>
                <li>
                  Notify us promptly of any errors or omissions you discover
                </li>
                <li>Pay all applicable fees for services rendered</li>
              </ul>
              <p>
                You are ultimately responsible for the accuracy and completeness
                of the information on your tax return, even though we prepare it
                on your behalf.
              </p>
            </div>

            <div>
              <h2>4. Fees and Payment</h2>
              <p>
                Service fees are communicated to you before any work begins. We
                provide a clear, upfront quote based on the complexity of your
                tax situation. By engaging our services, you agree to pay the
                quoted fees upon completion of the work. We accept e-Transfer,
                credit cards, and debit payments.
              </p>
            </div>

            <div>
              <h2>5. Maximum Refund Guarantee</h2>
              <p>
                We guarantee to identify and claim every eligible credit and
                deduction to maximize your refund. If another tax preparer finds
                a larger refund for the same tax return using the same
                information, we will review the discrepancy and match the
                refund. This guarantee applies only to returns prepared by North
                Fin Services and is subject to verification.
              </p>
            </div>

            <div>
              <h2>6. Accuracy and Limitations</h2>
              <p>
                While we strive for 100% accuracy, the accuracy of your tax
                return depends on the completeness and correctness of the
                information you provide. North Fin Services is not liable for
                errors, penalties, or interest resulting from incomplete,
                inaccurate, or fraudulent information provided by the client.
              </p>
              <p>
                Our services do not constitute legal advice. For complex legal
                matters, we may recommend you consult a tax lawyer.
              </p>
            </div>

            <div>
              <h2>7. Confidentiality</h2>
              <p>
                We maintain strict confidentiality of all client information in
                accordance with our Privacy Policy and Canadian privacy
                legislation (PIPEDA). We will not disclose your information to
                third parties except as required for tax filing purposes (e.g.,
                filing with the CRA) or as required by law.
              </p>
            </div>

            <div>
              <h2>8. Intellectual Property</h2>
              <p>
                All content on the North Fin Services website, including text,
                graphics, logos, and design elements, is the property of North
                Fin Services and is protected by Canadian copyright law. You may
                not reproduce, distribute, or use any content without our
                written permission.
              </p>
            </div>

            <div>
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, North Fin Services shall
                not be liable for any indirect, incidental, consequential, or
                punitive damages arising from the use of our services. Our total
                liability for any claim shall not exceed the fees paid by you
                for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2>10. Termination</h2>
              <p>
                Either party may terminate the service relationship at any time.
                If you terminate services before completion, you may be
                responsible for fees for work already performed. We reserve the
                right to decline or terminate services if a client provides
                false information, engages in abusive conduct, or requests
                services that would violate tax law.
              </p>
            </div>

            <div>
              <h2>11. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of the Province of Ontario and the
                federal laws of Canada applicable therein.
              </p>
            </div>

            <div>
              <h2>12. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Changes
                will be posted on this page with an updated effective date.
                Continued use of our services after changes are posted
                constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p>
                North Fin Services
                <br />
                Email: canipunsood@gmail.com
                <br />
                Phone: (639) 895-4000
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch - free consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
