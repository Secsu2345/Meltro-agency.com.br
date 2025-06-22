import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Eye, Heart, Users, TrendingUp, MapPin, Leaf, Award } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Counter } from "@/components/animations/counter"

export const metadata: Metadata = {
  title: "Sobre a Meltro Agency - Especialistas em Marketing Digital Amazônico",
  description:
    "Conheça a Meltro Agency, agência especializada em marketing digital para turismo amazônico e bioeconomia. Nossa missão é transformar negócios regionais em referências digitais.",
  keywords:
    "sobre Meltro Agency, marketing digital Amazônia, agência turismo, especialistas bioeconomia, equipe marketing regional",
  alternates: {
    canonical: "https://meltroagency.com/about",
  },
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Transparência Total",
      description:
        "Relatórios claros, comunicação honesta e prestação de contas sobre cada real investido e resultado obtido",
    },
    {
      icon: TrendingUp,
      title: "Resultados Reais",
      description: "Foco em métricas que realmente importam: mais reservas, vendas e reconhecimento da sua marca",
    },
    {
      icon: Heart,
      title: "Paixão pela Amazônia",
      description: "Conhecemos e valorizamos a riqueza cultural e natural da região, criando estratégias autênticas",
    },
  ]

  const stats = [
    { number: "85", suffix: "+", label: "Negócios Atendidos" },
    { number: "180", suffix: "%", label: "Aumento Médio Ocupação" },
    { number: "95", suffix: "%", label: "Clientes Satisfeitos" },
    { number: "4", suffix: "+", label: "Anos de Experiência" },
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
                <Link
                  href="/services"
                  className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Serviços
                </Link>
                <Link href="/about" className="text-green-600 px-3 py-2 text-sm font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.2}>
                <Badge className="bg-green-600/20 text-green-300 border-green-600/30 mb-6">
                  <Leaf className="w-4 h-4 mr-2" />
                  Nossa História
                </Badge>
              </FadeIn>
              <FadeIn delay={0.4}>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Especialistas em <span className="text-green-400">Marketing Digital Amazônico</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Somos a melhor agência de marketing digital especializada exclusivamente em negócios de turismo
                  amazônico e bioeconomia, com profundo conhecimento da região e seu potencial.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.8}>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Paixão pela Amazônia</h3>
                    <p className="text-green-100 max-w-sm">
                      Especialistas dedicados ao crescimento de negócios sustentáveis na região
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Resultados que Comprovam Nossa Expertise</h2>
              <p className="text-lg text-slate-600">Números reais de negócios amazônicos que transformamos</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                    <Counter value={Number.parseInt(stat.number)} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-3 gap-12">
            <StaggerItem>
              <Card className="border-0 shadow-lg rounded-xl text-center p-8 h-full">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Missão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Transformar negócios de turismo amazônico e bioeconomia em referências digitais, conectando-os com
                    clientes que valorizam experiências autênticas e produtos sustentáveis.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-0 shadow-lg rounded-xl text-center p-8 h-full">
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Visão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ser a agência de marketing digital de referência para negócios sustentáveis na Amazônia, reconhecida
                    por resultados excepcionais e conhecimento regional.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-0 shadow-lg rounded-xl text-center p-8 h-full">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Propósito</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Democratizar o acesso ao marketing digital de qualidade para empreendedores amazônicos, valorizando
                    a autenticidade e sustentabilidade regional.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nossos Valores</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Os princípios que guiam nosso trabalho e relacionamento com cada cliente amazônico
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="border-0 shadow-lg rounded-xl text-center p-8 hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Nossa Jornada na Amazônia</h2>
            </div>
          </FadeIn>

          <div className="prose prose-lg max-w-none text-slate-700">
            <FadeIn delay={0.2}>
              <p className="text-xl leading-relaxed mb-8">
                A Meltro Agency nasceu da percepção de que negócios incríveis da Amazônia - pousadas com experiências
                únicas, produtos da bioeconomia de altíssima qualidade, operadoras com conhecimento profundo da região -
                não conseguiam alcançar seu potencial máximo por falta de uma presença digital estratégica.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg leading-relaxed mb-8">
                Fundada por especialistas em marketing digital com experiência em diversos setores, decidimos focar
                nossa expertise exclusivamente em ajudar empreendedores amazônicos que já possuem produtos e serviços
                validados pelo mercado, mas precisam de uma estratégia digital eficaz para escalar seus negócios.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg leading-relaxed mb-8">
                Hoje, trabalhamos com pousadas de selva que recebem turistas do mundo inteiro, operadoras que oferecem
                as mais autênticas experiências amazônicas, marcas de biojoias reconhecidas nacionalmente, cooperativas
                que exportam produtos regionais e diversos outros negócios que compartilham nossos valores de
                sustentabilidade e autenticidade.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-slate-800 italic mb-4">
                      "Nosso diferencial está em entender profundamente o mercado amazônico - suas sazonalidades,
                      público-alvo, desafios logísticos e oportunidades únicas. Criamos estratégias que respeitam a
                      essência de cada negócio enquanto maximizam seus resultados digitais."
                    </p>
                    <p className="text-sm text-slate-600 font-medium">- Equipe Meltro Agency</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Por Que Somos Diferentes</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Nossa especialização exclusiva na Amazônia nos permite oferecer resultados que agências generalistas não
                conseguem
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Conhecimento Regional Profundo",
                description:
                  "Entendemos as particularidades do turismo amazônico, sazonalidades, público-alvo e desafios específicos da região.",
                icon: MapPin,
              },
              {
                title: "Cases de Sucesso Comprovados",
                description:
                  "Pousadas que aumentaram ocupação em 180%, marcas que expandiram nacionalmente, operadoras que dobraram reservas.",
                icon: TrendingUp,
              },
              {
                title: "Estratégias Sustentáveis",
                description:
                  "Criamos campanhas que valorizam a autenticidade, sustentabilidade e responsabilidade socioambiental.",
                icon: Leaf,
              },
              {
                title: "Atendimento Personalizado",
                description:
                  "Cada cliente recebe estratégias sob medida, considerando sua realidade, objetivos e características regionais.",
                icon: Heart,
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Card className="border-0 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-blue-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para Fazer Parte dos Nossos Cases de Sucesso?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-green-100 mb-8">
              Se você tem um negócio estabelecido na Amazônia e quer dar o próximo passo no digital, estamos aqui para
              transformar sua presença online em resultados extraordinários.
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
              <p className="text-slate-400 mb-6 max-w-md">
                Especialistas em marketing digital para negócios de turismo amazônico e bioeconomia. Transformamos sua
                presença online em resultados reais.
              </p>
              <div className="flex items-center text-slate-400 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Manaus, Amazonas - Atendimento em toda a região</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Nossos Serviços</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Sites para Pousadas
                </Link>
                <Link href="/services" className="block text-slate-400 hover:text-green-400 transition-colors">
                  SEO Local Amazônia
                </Link>
                <Link href="/services" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Marketing Bioeconomia
                </Link>
                <Link href="/services" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Campanhas Pagas
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
            <p>&copy; 2024 Meltro Agency. Todos os direitos reservados. Marketing Digital para a Amazônia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
