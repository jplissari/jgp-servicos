import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Chatbot from "@/components/Chatbot";
import { ArrowRight, Bot, Brain, LineChart, Menu, Sparkles, Target, X, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">JGP Serviços</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#beneficios" className="text-sm font-medium hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#solucoes" className="text-sm font-medium hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <a href="#contato">Fale Conosco</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="container py-4 flex flex-col gap-4">
              <a
                href="#servicos"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#beneficios"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#solucoes"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluções
              </a>
              <a
                href="#contato"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
              <Button asChild className="w-full">
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Inteligência Artificial para Negócios
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Impulsione seu negócio com{" "}
                <span className="text-primary">Inteligência Artificial</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Transformamos empresas através de soluções inteligentes de IA. Automatize processos, 
                otimize decisões e acelere o crescimento do seu negócio com tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#contato">
                    Começar Agora
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#servicos">Conheça os Serviços</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <Bot className="w-48 h-48 text-primary opacity-80" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas de IA personalizadas para as necessidades específicas do seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Chatbots Inteligentes</CardTitle>
                <CardDescription>
                  Atendimento automatizado 24/7 com IA conversacional avançada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Melhore o atendimento ao cliente com chatbots que entendem contexto, 
                  resolvem problemas e aprendem continuamente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Análise Preditiva</CardTitle>
                <CardDescription>
                  Previsões precisas baseadas em dados para decisões estratégicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Antecipe tendências de mercado, comportamento de clientes e otimize 
                  seu planejamento com machine learning.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Automação de Processos</CardTitle>
                <CardDescription>
                  Elimine tarefas repetitivas e ganhe eficiência operacional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automatize fluxos de trabalho complexos, reduza erros humanos e 
                  libere sua equipe para atividades estratégicas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Consultoria em IA</CardTitle>
                <CardDescription>
                  Estratégia personalizada para implementação de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Identificamos oportunidades, desenvolvemos roadmaps e guiamos sua 
                  transformação digital com inteligência artificial.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Marketing Inteligente</CardTitle>
                <CardDescription>
                  Campanhas otimizadas com IA para máximo ROI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Segmentação avançada, personalização em escala e otimização 
                  automática de campanhas para melhores resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Soluções Personalizadas</CardTitle>
                <CardDescription>
                  Desenvolvimento sob medida para seu desafio específico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Criamos soluções de IA customizadas que se integram perfeitamente 
                  aos seus sistemas e processos existentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Por que escolher a JGP Serviços?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Somos especialistas em transformar desafios empresariais em oportunidades através da IA
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Resultados Rápidos</h3>
              <p className="text-sm text-muted-foreground">
                Implementação ágil com resultados mensuráveis em semanas, não meses
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Foco no ROI</h3>
              <p className="text-sm text-muted-foreground">
                Cada solução é projetada para maximizar o retorno sobre investimento
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Expertise Comprovada</h3>
              <p className="text-sm text-muted-foreground">
                Time experiente com projetos bem-sucedidos em diversos setores
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Suporte Contínuo</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhamento constante para garantir evolução e otimização
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Soluções que transformam negócios
              </h2>
              <p className="text-muted-foreground">
                Nossa abordagem combina tecnologia de ponta com profundo entendimento do seu negócio. 
                Não oferecemos soluções genéricas - cada projeto é desenvolvido para resolver seus 
                desafios específicos e impulsionar seus objetivos estratégicos.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Redução de Custos</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatize processos e reduza custos operacionais em até 60%
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Aumento de Produtividade</h4>
                    <p className="text-sm text-muted-foreground">
                      Equipes mais eficientes com ganhos de produtividade de até 40%
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Decisões Baseadas em Dados</h4>
                    <p className="text-sm text-muted-foreground">
                      Insights precisos para decisões estratégicas mais assertivas
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Eficiência Operacional</span>
                      <span className="font-semibold">+85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Satisfação do Cliente</span>
                      <span className="font-semibold">+92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Redução de Custos</span>
                      <span className="font-semibold">+78%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      Média de resultados alcançados pelos nossos clientes
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entre em contato conosco e descubra como a inteligência artificial pode 
                impulsionar seus resultados. Agende uma consulta gratuita com nossos especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:contato@jgpservice.com">
                    Falar com Especialista
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">JGP Serviços</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transformando negócios através de soluções inteligentes de IA
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Chatbots</a></li>
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Análise Preditiva</a></li>
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Automação</a></li>
                <li><a href="#servicos" className="hover:text-foreground transition-colors">Consultoria</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#beneficios" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
                <li><a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a></li>
                <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@jgpservice.com</li>
                <li>www.jgpservice.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} JGP Serviços. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

