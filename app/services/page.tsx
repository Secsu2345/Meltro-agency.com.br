import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Search, Target, Users, Zap, CheckCircle, Leaf } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

export const metadata: Metadata = {
  title: "Serviços de Marketing Digital para Turismo e Bioeconomia Amazônica",
  description:
    "Conheça nossos serviços especializados: sites para pousadas, SEO local Amazônia, campanhas para turismo, marketing para bioeconomia e gestão de redes sociais.",
  keywords:
    "serviços marketing digital, sites pousadas Amazônia, SEO turismo, campanhas bioeconomia, marketing regional",
  alternates: {
    canonical: "https://meltroagency.com/services",
  },
}

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Sites para Pousadas e Operadoras",
      description:
        "Sites responsivos e otimizados que mostram a beleza da sua propriedade e facilitam reservas diretas, reduzindo dependência de plataformas terceiras.",
      features: [
        "Design responsivo com galeria de fotos profissional",
        "Sistema de reservas integrado ou formulários otimizados",
        "Otimização para velocidade e SEO local",
        "Integração com WhatsApp Business",
        "Mapa interativo e informações de localização",
        "Depoimentos de hóspedes em destaque",
      ],
      price: "A partir de R$ 2.800",
      ideal: "Pousadas, hotéis fazenda, operadoras de turismo",
      result: "Até 60% mais reservas diretas",
    },
    {
      icon: Search,
      title: "SEO Local para Turismo Amazônico",
      description:
        "Posicionamento estratégico no Google para quando turistas procuram experiências na sua região, aumentando sua visibilidade orgânica.",
      features: [
        "Otimização para buscas locais ('pousada em...', 'turismo...')",
        "Criação e otimização do Google Meu Negócio",
        "Conteúdo otimizado sobre atrações locais",
        "Link building com parceiros regionais",
        "Monitoramento de posições e concorrentes",
        "Relatórios mensais de performance",
      ],
      price: "A partir de R$ 1.500/mês",
      ideal: "Negócios que dependem de turistas locais",
      result: "300% mais visibilidade no Google",
    },
    {
      icon: Target,
      title: "Campanhas Pagas para Turismo",
      description:
        "Anúncios direcionados para pessoas interessadas em ecoturismo, turismo de aventura e experiências autênticas na Amazônia.",
      features: [
        "Segmentação por interesses em turismo de natureza",
        "Campanhas sazonais (alta e baixa temporada)",
        "Anúncios no Google e redes sociais",
        "Remarketing para visitantes do site",
        "Otimização contínua baseada em conversões",
        "Relatórios detalhados de ROI",
      ],
      price: "Taxa de gestão: 15% do investimento",
      ideal: "Negócios com orçamento para mídia paga",
      result: "ROI médio de 400%",
    },
    {
      icon: Leaf,
      title: "Marketing para Bioeconomia",
      description:
        "Estratégias específicas para produtos da floresta: açaí, castanha, biojoias, cosméticos naturais e artesanato regional.",
      features: [
        "Storytelling sobre origem e sustentabilidade",
        "E-commerce otimizado para produtos regionais",
        "Campanhas para mercado nacional",
        "Certificações e selos de qualidade em destaque",
        "Parcerias com influenciadores eco-friendly",
        "Estratégia de expansão para novos mercados",
      ],
      price: "A partir de R$ 1.200/mês",
      ideal: "Produtores, cooperativas, marcas sustentáveis",
      result: "Expansão para mercado nacional",
    },
    {
      icon: Zap,
      title: "Copywriting para Turismo",
      description:
        "Textos persuasivos que despertam o desejo de conhecer sua região, destacando experiências únicas e autenticidade local.",
      features: [
        "Descrições envolventes de experiências",
        "E-mail marketing para nurturing de leads",
        "Textos para redes sociais e blog",
        "Scripts para vídeos promocionais",
        "Copy para campanhas publicitárias",
        "Revisão e otimização contínua",
      ],
      price: "A partir de R$ 800/projeto",
      ideal: "Todos os negócios de turismo",
      result: "50% mais conversões",
    },
    {
      icon: Users,
      title: "Gestão de Redes Sociais",
      description:
        "Presença estratégica no Instagram e Facebook, mostrando a beleza da Amazônia e construindo uma comunidade engajada.",
      features: [
        "Conteúdo visual profissional da região",
        "Stories e reels sobre experiências locais",
        "Gestão de comunidade e relacionamento",
        "Campanhas de engajamento sazonal",
        "Parcerias com micro-influenciadores",
        "Análise de métricas e ajustes estratégicos",
      ],
      price: "A partir de R$ 1.400/mês",
      ideal: "Negócios que dependem de presença visual",
      result: "Comunidade 5x mais engajada",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-800">
                Meltro <span className="text-green-600">Agency</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Início
                </Link>
                <Link href="/services" className="text-green-600 px-3 py-2 text-sm font-medium">
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
                <Link href="/contact">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-slate-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn></FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Soluções Completas de <span className="text-green-400">Marketing Digital</span> para a Amazônia
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Estratégias personalizadas para pousadas, operadoras de turismo, produtores de bioeconomia e negócios
              regionais que querem crescer no digital
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card className="border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-slate-800 text-xl">{service.title}</CardTitle>
                          <Badge variant="outline" className="text-green-600 border-green-600 mt-1">
                            {service.price}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-slate-600 text-base mb-4">{service.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-100 text-blue-800">{service.ideal}</Badge>
                      <Badge className="bg-green-100 text-green-800">{service.result}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">
                      <Link href="/contact">
                        Solicitar Proposta <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Como Trabalhamos com Seu Negócio</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Processo personalizado para entender sua realidade e criar estratégias que realmente funcionam na
                Amazônia
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico Gratuito",
                description:
                  "Analisamos seu negócio, concorrência local e oportunidades digitais específicas da sua região",
              },
              {
                step: "02",
                title: "Estratégia Personalizada",
                description:
                  "Criamos um plano sob medida considerando sua sazonalidade, público-alvo e objetivos de crescimento",
              },
              {
                step: "03",
                title: "Implementação",
                description: "Executamos as ações com acompanhamento semanal e ajustes baseados nos resultados obtidos",
              },
              {
                step: "04",
                title: "Resultados e Otimização",
                description: "Monitoramos métricas importantes e otimizamos continuamente para maximizar seu retorno",
              },
            ].map((process, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para Impulsionar Seu Negócio?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-green-100 mb-8">
              Agende uma conversa gratuita e descubra qual estratégia é ideal para seu negócio amazônico crescer no
              digital
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Agendar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
              <p className="text-slate-400 mb-4 max-w-md">
                Especialistas em marketing digital para negócios de turismo amazônico e bioeconomia. Transformamos sua
                presença online em resultados reais.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Nossos Serviços</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Sites para Pousadas
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-green-400 transition-colors">
                  SEO Local Amazônia
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Marketing Bioeconomia
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Redes Sociais
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-slate-400">
                <p>contato@meltroagency.com</p>
                <p>(92) 99999-9999</p>
                <p>Manaus, AM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 Meltro Agency. Marketing Digital para a Amazônia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
