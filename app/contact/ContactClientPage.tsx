"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        businessType: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Mensagem Enviada!</h2>
            <p className="text-slate-600 mb-6">
              Recebemos sua solicitação e entraremos em contato em até 2 horas durante horário comercial.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/">Voltar ao Início</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

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
                <Link
                  href="/about"
                  className="text-slate-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sobre Nós
                </Link>
                <Link href="/contact" className="text-green-600 px-3 py-2 text-sm font-medium">
                  Contato
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                <Link href="https://wa.me/5592999999999" target="_blank">
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-slate-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Badge className="bg-green-600/20 text-green-300 border-green-600/30 mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Badge>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vamos <span className="text-green-400">Transformar</span> Seu Negócio Amazônico
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Agende um diagnóstico gratuito e descubra como aumentar sua ocupação, vendas e reconhecimento digital na
              região
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <Card className="border-0 shadow-xl rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Solicite Seu Diagnóstico Gratuito</CardTitle>
                  <CardDescription className="text-slate-600">
                    Preencha o formulário e nossa equipe entrará em contato em até 2 horas para agendar uma conversa
                    personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">WhatsApp *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(92) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Nome do Negócio *</Label>
                      <Input
                        id="company"
                        placeholder="Nome da sua pousada, empresa ou marca"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessType">Tipo de Negócio *</Label>
                      <Select onValueChange={(value) => handleChange("businessType", value)}>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Selecione seu tipo de negócio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pousada">Pousada/Hotel Fazenda</SelectItem>
                          <SelectItem value="operadora">Operadora de Turismo</SelectItem>
                          <SelectItem value="receptivo">Agência de Receptivo</SelectItem>
                          <SelectItem value="biojoias">Biojoias/Artesanato</SelectItem>
                          <SelectItem value="alimentos">Produtos Alimentícios (Açaí, Castanha, etc.)</SelectItem>
                          <SelectItem value="cosmeticos">Cosméticos Naturais</SelectItem>
                          <SelectItem value="cooperativa">Cooperativa/Associação</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Principal Interesse</Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Qual serviço mais te interessa?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="site-completo">Site Completo + SEO</SelectItem>
                          <SelectItem value="seo-local">SEO Local Amazônia</SelectItem>
                          <SelectItem value="campanhas-pagas">Campanhas Pagas</SelectItem>
                          <SelectItem value="social-media">Gestão de Redes Sociais</SelectItem>
                          <SelectItem value="marketing-bioeconomia">Marketing para Bioeconomia</SelectItem>
                          <SelectItem value="consultoria-completa">Consultoria Completa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Conte-nos sobre seu negócio *</Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva seu negócio, principais desafios e objetivos. Ex: 'Tenho uma pousada com 8 quartos em Presidente Figueiredo, mas a ocupação está baixa na baixa temporada...'"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="min-h-[120px] rounded-lg"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Solicitar Diagnóstico Gratuito <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      * Campos obrigatórios. Seus dados estão seguros conosco.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Info */}
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Entre em Contato Direto</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Atendemos negócios em toda a região amazônica. Escolha a forma de contato que preferir.
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <Card className="border-0 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">WhatsApp Comercial</h3>
                        <p className="text-slate-600">(92) 99999-9999</p>
                        <Button asChild variant="link" className="p-0 h-auto text-green-600">
                          <Link
                            href="https://wa.me/5592999999999?text=Olá! Gostaria de saber mais sobre os serviços da Meltro Agency para meu negócio."
                            target="_blank"
                          >
                            Iniciar conversa agora
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="border-0 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">E-mail Comercial</h3>
                        <p className="text-slate-600">contato@meltroagency.com</p>
                        <Button asChild variant="link" className="p-0 h-auto text-green-600">
                          <Link href="mailto:contato@meltroagency.com?subject=Interesse em Serviços - Meltro Agency">
                            Enviar e-mail
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="border-0 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Telefone</h3>
                        <p className="text-slate-600">(92) 3000-0000</p>
                        <p className="text-sm text-slate-500">Seg-Sex: 8h às 18h</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="border-0 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Localização</h3>
                        <p className="text-slate-600">Manaus, Amazonas</p>
                        <p className="text-sm text-slate-500">Atendimento em toda a região amazônica</p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              </StaggerContainer>

              <FadeIn delay={0.6}>
                <Card className="border-0 shadow-md rounded-xl p-6 bg-green-50 border-l-4 border-green-600">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Tempo de Resposta</h3>
                      <p className="text-slate-600 text-sm">
                        <strong>Diagnóstico gratuito:</strong> Respondemos em até 2 horas durante horário comercial.
                        <br />
                        <strong>Urgências:</strong> Use nosso WhatsApp para contato imediato.
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Acompanhe Nosso Trabalho</h3>
            <p className="text-slate-600 mb-8">
              Veja cases de sucesso e dicas de marketing digital para negócios amazônicos
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg border-green-600 text-green-600 hover:bg-green-50"
              >
                <Link href="#" target="_blank">
                  Instagram
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg border-green-600 text-green-600 hover:bg-green-50"
              >
                <Link href="#" target="_blank">
                  LinkedIn
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg border-green-600 text-green-600 hover:bg-green-50"
              >
                <Link href="#" target="_blank">
                  Facebook
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
                <Link href="/services#sites" className="block text-slate-400 hover:text-green-400 transition-colors">
                  Sites para Pousadas
                </Link>
                <Link href="/services#seo" className="block text-slate-400 hover:text-green-400 transition-colors">
                  SEO Local Amazônia
                </Link>
                <Link
                  href="/services#bioeconomia"
                  className="block text-slate-400 hover:text-green-400 transition-colors"
                >
                  Marketing Bioeconomia
                </Link>
                <Link href="/services#social" className="block text-slate-400 hover:text-green-400 transition-colors">
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
            <p>&copy; 2024 Meltro Agency. Todos os direitos reservados. Marketing Digital para a Amazônia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
