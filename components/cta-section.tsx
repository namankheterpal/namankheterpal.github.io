import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: "default" | "dark"
}

export function CTASection({
  title = "Ready to File Your Taxes?",
  description = "Book a free consultation with our tax experts. We'll review your situation and ensure you get the maximum refund you deserve.",
  buttonText = "Book Free Consultation",
  buttonHref = "/contact",
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={`py-16 lg:py-20 ${
        isDark ? "bg-primary text-primary-foreground" : "bg-secondary"
      }`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2
          className={`text-balance text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl ${
            isDark ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-2xl text-pretty leading-relaxed ${
            isDark ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className={
              isDark
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                : ""
            }
          >
            <Link href={buttonHref}>
              {buttonText}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
