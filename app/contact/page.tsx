import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contato - Agende Seu Diagnóstico Gratuito | Meltro Agency",
  description:
    "Entre em contato com a Meltro Agency para transformar seu negócio de turismo amazônico ou bioeconomia. Diagnóstico gratuito e atendimento personalizado.",
  keywords:
    "contato Meltro Agency, diagnóstico gratuito marketing digital, consultoria turismo Amazônia, orçamento marketing bioeconomia",
  alternates: {
    canonical: "https://meltroagency.com/contact",
  },
}

export default function Contact() {
  return <ContactClientPage />
}
