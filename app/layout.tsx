import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { OfferModal } from "@/components/offer-modal"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default:
      "North Fin Services | Expert Tax Filing Across Canada",
    template: "%s | North Fin Services",
  },
  description:
    "Professional tax filing services for individuals and businesses across Canada. Personal tax (T1), GST/HST returns, and tax planning. Maximum refund guaranteed. We speak English, Hindi & Punjabi.",
  keywords: [
    "tax filing Canada",
    "personal tax filing",
    "T1 tax return",
    "GST HST returns",
    "tax planning Canada",
    "Canadian tax services",
    "online tax filing",
    "tax preparation",
    "CRA tax filing",
    "North Fin Services",
  ],
  authors: [{ name: "North Fin Services" }],
  creator: "North Fin Services",
  metadataBase: new URL("https://northfinservices.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "North Fin Services",
    title: "North Fin Services | Expert Tax Filing Across Canada",
    description:
      "Professional tax filing for individuals and businesses. Maximum refund guaranteed. Fast 24-48 hour turnaround. We speak English, Hindi & Punjabi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Fin Services | Expert Tax Filing Across Canada",
    description:
      "Professional tax filing for individuals and businesses. Maximum refund guaranteed. Fast 24-48 hour turnaround.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        type: "image/png",
      },
    ],
    apple: "/assets/logo.png",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "North Fin Services",
  description:
    "Professional tax filing services for individuals and businesses across Canada. Personal tax (T1), GST/HST returns, and tax planning advisory.",
  url: "https://northfinservices.ca",
  telephone: "+1-639-895-4000",
  email: "canipunsood@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  serviceType: [
    "Personal Tax Filing",
    "GST/HST Returns",
    "Tax Planning & Advisory",
  ],
  knowsLanguage: ["English", "Hindi", "Punjabi"],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tax Filing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Tax Filing (T1)",
          description:
            "Individual income tax return filing for employees, students, newcomers, and retirees across Canada.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GST/HST Returns",
          description:
            "GST/HST filing for self-employed individuals, freelancers, and small businesses in Canada.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tax Planning & Advisory",
          description:
            "Strategic tax planning including RRSP optimization, TFSA strategies, and business tax advisory.",
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <OfferModal />
        <Analytics />
      </body>
    </html>
  )
}
