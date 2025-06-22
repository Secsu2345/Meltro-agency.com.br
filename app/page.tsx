import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
  Star,
  Quote,
  MapPin,
  Clock,
  Award,
  Instagram,
  Linkedin,
  ChromeIcon as GoogleBusiness,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Counter } from "@/components/animations/counter"
import { FloatingElements } from "@/components/animations/floating-elements"
import { ScrollProgress } from "@/components/animations/scroll-progress"

export const metadata: Metadata = {
  title: "Marketing Digital para Turismo e Bioeconomia na Amazônia",
  description:
    "Transforme seu negócio de turismo amazônico ou bioeconomia com nossas estratégias digitais. Aumente sua ocupação, vendas e visibilidade online com a Meltro Agency.",
  keywords:
    "marketing digital turismo, bioeconomia Amazônia, SEO local Amazônia, pousadas marketing, operadoras turismo digital",
  alternates: {
    canonical: "https://meltroagency.com",
  },
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Marketing Digital",
  provider: {
    "@type": "LocalBusiness",
    name: "Meltro Agency",
  },
  areaServed: "Amazônia",
  audience: "Negócios de Turismo e Bioeconomia",
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <div className="min-h-screen bg-white">
        <ScrollProgress />

        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50" role="navigation" aria-label="Menu principal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold text-slate-800"
                  aria-label="Meltro Agency - Página inicial"
                >
                  Meltro <span className="text-green-600">Agency</span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link
                    href="/"
                    className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                    aria-current="page"
                  >
                    Início
                  </Link>
                  <Link
                    href="/services"
                    className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Serviços
                  </Link>
                  <Link
                    href="/about"
                    className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Sobre Nós
                  </Link>
                  <Link
                    href="/contact"
                    className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Contato
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                  <Link href="/contact">Solicitar Orçamento Gratuito</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative text-white py-20 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Floresta+Amazônica')",
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />

          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn delay={0.2}></FadeIn>
                <FadeIn delay={0.4}>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    Transforme Seu Negócio de <span className="text-green-400">Turismo Amazônico</span> com Marketing
                    Digital
                  </h1>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Aumente a ocupação da sua pousada, venda mais produtos da bioeconomia e conecte-se com turistas que
                    valorizam experiências autênticas na Amazônia
                  </p>
                </FadeIn>
                <FadeIn delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105 pulse-glow"
                    >
                      <Link href="/contact">
                        Agendar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Link href="/services">Ver Como Ajudamos</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={1.0} direction="right">
                <div className="relative">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-xl p-6 text-slate-800">
                      <div className="flex items-center mb-4">
                        <Award className="h-8 w-8 text-green-600 mr-3" />
                        <div>
                          <h3 className="font-bold text-lg">Resultados Comprovados</h3>
                          <p className="text-slate-600">Para negócios amazônicos</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            <Counter value={180} suffix="%" />
                          </div>
                          <div className="text-sm text-slate-600">Aumento Ocupação</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            <Counter value={95} suffix="%" />
                          </div>
                          <div className="text-sm text-slate-600">Clientes Satisfeitos</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-50" id="servicos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Soluções Digitais para Seu Negócio Amazônico
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Estratégias personalizadas para pousadas, operadoras de turismo, produtores de bioeconomia e negócios
                  regionais
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Sites que Convertem Hóspedes",
                  description:
                    "Sites otimizados para pousadas e operadoras que transformam visitantes em reservas confirmadas",
                  benefit: "Aumente suas reservas diretas",
                },
                {
                  icon: Search,
                  title: "SEO Local Amazônia",
                  description: "Apareça no Google quando turistas procuram por experiências autênticas na sua região",
                  benefit: "Seja encontrado por mais turistas",
                },
                {
                  icon: Target,
                  title: "Anúncios para Turistas",
                  description:
                    "Campanhas direcionadas para pessoas interessadas em turismo de natureza e experiências únicas",
                  benefit: "Atraia o público certo",
                },
                {
                  icon: TrendingUp,
                  title: "Conteúdo que Vende",
                  description: "Conte a história da sua região e produtos de forma que desperte o desejo de conhecer",
                  benefit: "Conecte-se emocionalmente",
                },
                {
                  icon: Zap,
                  title: "Textos que Persuadem",
                  description: "Copywriting especializado em turismo amazônico e produtos da bioeconomia",
                  benefit: "Converta mais visitantes",
                },
                {
                  icon: Users,
                  title: "Redes Sociais Estratégicas",
                  description: "Mostre a beleza da Amazônia e seus produtos de forma profissional e atrativa",
                  benefit: "Construa uma comunidade fiel",
                },
              ].map((service, index) => (
                <StaggerItem key={index}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md rounded-xl group hover:scale-105 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-slate-800">{service.title}</CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-600 w-fit">
                        {service.benefit}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 mb-4">{service.description}</CardDescription>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        Saiba Mais
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                  Por que Escolher a <span className="text-green-600">Meltro Agency</span>?
                </h2>
              </FadeIn>
              <StaggerContainer className="space-y-6">
                {[
                  "Conhecemos profundamente o mercado de turismo amazônico e bioeconomia",
                  "Estratégias testadas que aumentaram a ocupação de pousadas em até 180%",
                  "Foco em resultados reais: mais reservas, vendas e reconhecimento da marca",
                  "Atendimento personalizado com profissionais que entendem sua realidade",
                  "Cases de sucesso com negócios similares ao seu na região",
                  "Soluções acessíveis para pequenos empreendedores",
                  "Transparência total: você acompanha cada resultado e investimento",
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start group justify-center max-w-3xl mx-auto">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-slate-700 text-lg text-left">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Histórias de Sucesso na Amazônia</h2>
                <p className="text-xl text-slate-600">
                  Veja como transformamos negócios de turismo e bioeconomia em referências digitais
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Carlos Mendes",
                  company: "Pousada Águas Cristalinas",
                  location: "Presidente Figueiredo, AM",
                  text: "Em 8 meses, nossa ocupação saltou de 40% para 85%. O site novo e as campanhas da Meltro trouxeram hóspedes de todo o Brasil que buscam experiências autênticas na floresta.",
                  rating: 5,
                  result: "+180% ocupação",
                },
                {
                  name: "Ana Tuxá",
                  company: "Biojoias Raízes da Floresta",
                  location: "Manaus, AM",
                  text: "Conseguimos expandir para o mercado nacional! As estratégias digitais da Meltro nos ajudaram a contar nossa história e conectar com clientes que valorizam produtos sustentáveis.",
                  rating: 5,
                  result: "+250% vendas online",
                },
                {
                  name: "Roberto Silva",
                  company: "Expedições Rio Solimões",
                  location: "Tabatinga, AM",
                  text: "Profissionais que realmente entendem nosso negócio. Dobrou o número de turistas interessados em nossas expedições de pesca esportiva e observação de fauna.",
                  rating: 5,
                  result: "+120% reservas",
                },
              ].map((testimonial, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 shadow-md rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Badge className="bg-green-100 text-green-800 mb-4">{testimonial.result}</Badge>
                      <Quote className="h-8 w-8 text-green-600 mb-4" />
                      <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                        <p className="text-slate-600 text-sm font-medium">{testimonial.company}</p>
                        <p className="text-slate-500 text-xs">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Perguntas Frequentes</h2>
                <p className="text-xl text-slate-600">
                  Esclarecemos as principais dúvidas sobre marketing digital para negócios amazônicos
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              {[
                {
                  question: "Vocês realmente entendem o mercado de turismo amazônico?",
                  answer:
                    "Sim! Nossa equipe tem experiência específica com pousadas de selva, operadoras de turismo fluvial e negócios de ecoturismo. Conhecemos as particularidades do público que busca experiências autênticas na Amazônia.",
                },
                {
                  question: "Quanto tempo leva para ver resultados?",
                  answer:
                    "Para SEO local, os primeiros resultados aparecem em 2-3 meses. Para campanhas pagas e redes sociais, você pode ver aumento no interesse já nas primeiras semanas. Sites otimizados começam a converter melhor imediatamente.",
                },
                {
                  question: "Trabalham com pequenos produtores da bioeconomia?",
                  answer:
                    "Absolutamente! Temos cases de sucesso com produtores de açaí, castanha, biojoias e cosméticos naturais. Criamos estratégias que valorizam a origem e sustentabilidade dos produtos.",
                },
                {
                  question: "Como funciona o atendimento para quem está no interior?",
                  answer:
                    "Atendemos 100% online, com reuniões por videochamada e WhatsApp. Muitos de nossos clientes estão em cidades do interior e recebem o mesmo nível de atenção e resultados.",
                },
              ].map((faq, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 shadow-md rounded-xl">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-slate-800 mb-3">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-blue-800 text-white relative overflow-hidden">
          <FloatingElements />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para Transformar Seu Negócio Amazônico?</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Agende um diagnóstico gratuito e descubra como aumentar sua ocupação, vendas e reconhecimento digital na
                Amazônia
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105 pulse-glow"
                >
                  <Link href="/contact">
                    <Clock className="mr-2 h-5 w-5" />
                    Agendar Diagnóstico Gratuito
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link href="/" className="text-2xl font-bold mb-4 block">
                  Meltro <span className="text-green-400">Agency</span>
                </Link>
                <p className="text-slate-400 mb-6 max-w-md">
                  Especialistas em marketing digital para negócios de turismo amazônico e bioeconomia. Transformamos sua
                  presença online em resultados reais.
                </p>
                <div className="flex items-center text-slate-400 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Manaus, Amazonas - Atendimento em toda a região</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Seg-Sex: 8h às 18h</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Nossos Serviços</h3>
                <div className="space-y-2">
                  <Link
                    href="/services#web-design"
                    className="block text-slate-400 hover:text-green-400 transition-colors"
                  >
                    Sites para Pousadas
                  </Link>
                  <Link href="/services#seo" className="block text-slate-400 hover:text-green-400 transition-colors">
                    SEO Local Amazônia
                  </Link>
                  <Link
                    href="/services#social-media"
                    className="block text-slate-400 hover:text-green-400 transition-colors"
                  >
                    Marketing para Bioeconomia
                  </Link>
                  <Link
                    href="/services#trafego-pago"
                    className="block text-slate-400 hover:text-green-400 transition-colors"
                  >
                    Anúncios para Turismo
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contato</h3>
                <div className="space-y-2 text-slate-400">
                  <p>contato@meltroagency.com</p>
                  <p>(92) 99999-9999</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                  >
                    <Link href="/contact">Solicitar Orçamento Gratuito</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-slate-800 mt-8 pt-8">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold text-white">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-6">
                  <Link
                    href="https://linkedin.com/company/meltroagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn da Meltro Agency"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/meltro_agency7857/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram da Meltro Agency"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://g.page/meltroagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all duration-300 hover:scale-110"
                    aria-label="Google Meu Negócio da Meltro Agency"
                  >
                    <GoogleBusiness className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2024 Meltro Agency. Todos os direitos reservados. Marketing Digital para a Amazônia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
