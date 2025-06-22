import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://meltroagency.com"),
  title: {
    default: "Meltro Agency | Marketing Digital para Turismo e Bioeconomia na Amazônia",
    template: "%s | Meltro Agency",
  },
  description:
    "Agência especializada em marketing digital para negócios de turismo amazônico e bioeconomia. SEO local, sites responsivos, tráfego pago e social media para pousadas, operadoras e produtores regionais.",
  keywords: [
    "marketing digital turismo",
    "bioeconomia Amazônia",
    "SEO local Amazônia",
    "agência de marketing regional",
    "turismo amazônico",
    "marketing digital Manaus",
    "pousadas Amazônia",
    "operadoras turismo",
    "biojoias marketing",
    "produtos regionais Amazônia",
  ],
  authors: [{ name: "Meltro Agency", url: "https://meltroagency.com" }],
  creator: "Meltro Agency",
  publisher: "Meltro Agency",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://meltroagency.com",
    title: "Meltro Agency | Marketing Digital para Turismo e Bioeconomia na Amazônia",
    description:
      "Transformamos negócios de turismo amazônico e bioeconomia com estratégias digitais eficazes. Especialistas em SEO local, sites otimizados e campanhas direcionadas.",
    siteName: "Meltro Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meltro Agency - Marketing Digital Amazônia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meltro Agency | Marketing Digital Amazônia",
    description: "Especialistas em marketing digital para turismo e bioeconomia amazônica",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://meltroagency.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meltro Agency",
  description: "Agência de marketing digital especializada em turismo amazônico e bioeconomia",
  url: "https://meltroagency.com",
  telephone: "+55-92-99999-9999",
  email: "contato@meltroagency.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.1190275,
    longitude: -60.0217314,
  },
  areaServed: [
    {
      "@type": "State",
      name: "Amazonas",
    },
    {
      "@type": "Country",
      name: "Brasil",
    },
  ],
  serviceType: ["Marketing Digital", "SEO Local", "Web Design", "Tráfego Pago", "Social Media"],
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [
    "https://instagram.com/meltroagency",
    "https://linkedin.com/company/meltroagency",
    "https://facebook.com/meltroagency",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
