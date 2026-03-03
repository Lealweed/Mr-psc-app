import React, { useState, useEffect } from 'react';
import { 
  Building2,
  Briefcase,
  ShieldCheck,
  Brain, 
  ArrowRight, 
  PlayCircle, 
  Verified, 
  BrainCircuit, 
  ClipboardPlus, 
  Scale, 
  Flower2, 
  Quote, 
  ChevronDown, 
  Facebook, 
  Instagram, 
  Twitter,
  Mail,
  Phone,
  MapPin,
  Star,
  ArrowLeft,
  LayoutDashboard,
  Calendar,
  Users,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Timer,
  MessageSquare,
  Search,
  ChevronRight,
  Download,
  Lock,
  CalendarPlus,
  UserPlus,
  BarChart3,
  QrCode,
  Copy,
  Info,
  CheckCircle2,
  Plus,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from './lib/utils';

const LandingPage = ({ onNavigate, siteData }: { onNavigate: (page: string) => void, siteData: any }) => {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-nude-dark transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
              <BrainCircuit className="size-6 relative z-10" />
            </div>
            <h2 className="text-text-main text-xl font-bold tracking-tight">{siteData.company.name}</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-text-main hover:text-primary transition-colors text-sm font-semibold" href="#">Início</a>
            <a className="text-text-main hover:text-primary transition-colors text-sm font-semibold" href="#process">Processo</a>
            <a className="text-text-main hover:text-primary transition-colors text-sm font-semibold" href="#services">Serviços</a>
            <a className="text-text-main hover:text-primary transition-colors text-sm font-semibold" href="#corporate">Empresas</a>
            <a className="text-text-main hover:text-primary transition-colors text-sm font-semibold" href="#testimonials">Depoimentos</a>
          </nav>
          <div className="flex items-center gap-4">
              <a 
                href={`https://wa.me/${siteData.profile.phone}?text=Olá! Gostaria de solicitar um orçamento para uma consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex group relative overflow-hidden rounded-full h-11 px-6 bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-primary/30 text-white text-sm font-bold items-center gap-2"
              >
              <span className="relative z-10">Solicitar Orçamento</span>
              <ArrowRight className="size-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="text-text-main hover:text-primary text-sm font-semibold hidden md:block"
            >
              Portal
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 lg:py-32 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-accent/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-700"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-nude-dark/50 w-fit shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-text-light">Aceitando Novos Pacientes</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 w-fit shadow-sm">
                <Building2 className="size-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Soluções Corporativas B2B</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-main leading-[1.1] tracking-tight">
              Cuidado Compassivo para sua <span className="text-primary italic">Mente</span>
            </h1>
            <p className="text-xl text-text-light leading-relaxed max-w-lg">
              Uma abordagem moderna à psicologia. Oferecemos um espaço confidencial e seguro, adaptado à sua jornada única de cura e crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-2">
              <a 
                href={`https://wa.me/${siteData.profile.phone}?text=Olá! Gostaria de iniciar minha jornada terapêutica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto shadow-primary/20"
              >
                Comece sua Jornada
              </a>
              <button className="group flex items-center justify-center rounded-full h-14 px-8 bg-white/80 border border-nude-dark text-text-main hover:border-primary text-base font-bold transition-all w-full sm:w-auto backdrop-blur-sm hover:bg-white">
                <PlayCircle className="size-6 mr-2 group-hover:text-primary transition-colors" />
                Ver Processo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/40 rounded-[2.5rem] transform rotate-3 scale-105 blur-lg"></div>
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group cursor-pointer">
              <img 
                src={siteData.media.heroImage} 
                alt="Therapy Session" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-text-main/10 group-hover:bg-text-main/20 transition-colors duration-300 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="size-10 text-primary ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-nude/20 relative" id="process">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50"></div>
                <img 
                  src={siteData.media.processImage} 
                  alt="Our Process" 
                  className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Nosso Processo</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-text-main mb-8 leading-tight">Como Trabalhamos Juntos</h3>
              <div className="space-y-8">
                {[
                { step: '01', title: 'Consulta Inicial', desc: 'Uma breve reunião para entender suas necessidades e alinhar expectativas.' },
                { step: '02', title: 'Plano Personalizado', desc: 'Desenvolvemos uma abordagem sob medida baseada em seus objetivos e histórico únicos.' },
                { step: '03', title: 'Suporte Contínuo', desc: 'Sessões regulares focadas em crescimento, cura e estratégias práticas.' },
              ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-extrabold text-primary/20 group-hover:text-primary transition-colors duration-500 font-serif italic">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-main mb-2">{item.title}</h4>
                      <p className="text-text-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white relative" id="services">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Nossa Especialidade</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Serviços Psicológicos Personalizados</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Psicoterapia Online', icon: BrainCircuit, desc: 'Sessões individuais de 50 minutos realizadas por vídeo, no conforto do seu espaço.' },
              { title: 'Avaliação Psicológica', icon: ClipboardPlus, desc: 'Processo técnico-científico de coleta de dados para entender o funcionamento psíquico.' },
              { title: 'Avaliação Bariátrica', icon: Scale, desc: 'Avaliação psicológica obrigatória e cuidadosa para candidatos à cirurgia bariátrica.' },
              { title: 'Pacotes de Acompanhamento', icon: Flower2, desc: 'Planos estruturados para um suporte contínuo e focado em resultados a longo prazo.', popular: true },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={cn(
                  "group p-8 rounded-3xl border transition-all duration-500 flex flex-col h-full relative overflow-hidden",
                  service.popular ? "bg-text-main text-white border-text-main shadow-xl" : "bg-white border-nude-dark hover:border-primary/30 shadow-sm hover:shadow-2xl"
                )}
              >
                {service.popular && <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl z-20">POPULAR</div>}
                <div className={cn(
                  "size-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-inner",
                  service.popular ? "bg-white/10 text-white" : "bg-secondary/40 text-text-main group-hover:bg-primary group-hover:text-white"
                )}>
                  <service.icon className="size-8" />
                </div>
                <h4 className={cn("text-xl font-bold mb-3", service.popular ? "text-white" : "text-text-main group-hover:text-primary")}>{service.title}</h4>
                {service.popular && (
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-white">{siteData.pricing.package}</span>
                    <span className="text-xs text-gray-400 ml-2">/ mês</span>
                  </div>
                )}
                {!service.popular && service.title === 'Psicoterapia Online' && (
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{siteData.pricing.session}</span>
                    <span className="text-xs text-text-light ml-2">/ sessão</span>
                  </div>
                )}
                <p className={cn("text-sm mb-8 flex-grow leading-relaxed", service.popular ? "text-gray-300" : "text-text-light")}>{service.desc}</p>
                <div className={cn("mt-auto pt-6 border-t flex justify-between items-center", service.popular ? "border-white/10" : "border-gray-100")}>
                  <a 
                    href={`https://wa.me/${siteData.profile.phone}?text=Olá Mayara! Gostaria de saber mais sobre ${service.title}. Aceita PIX ou Cartão?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold hover:text-primary transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                  <div className={cn("size-8 rounded-full flex items-center justify-center transition-all", service.popular ? "bg-white/20" : "bg-nude text-primary group-hover:bg-primary group-hover:text-white")}>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-24 px-4 bg-text-main text-white relative overflow-hidden" id="corporate">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                <Building2 className="size-4 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Soluções Corporativas</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Saúde Mental como <span className="text-primary italic">Estratégia</span> de Negócio
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Programas personalizados para promover o bem-estar, reduzir o burnout e aumentar a produtividade da sua equipe através de suporte psicológico especializado.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Workshops e Palestras', desc: 'Temas como inteligência emocional, gestão de estresse e liderança.' },
                  { title: 'Plantão Psicológico', desc: 'Atendimento pontual e emergencial para colaboradores em crise.' },
                  { title: 'Consultoria de RH', desc: 'Suporte na implementação de políticas de saúde mental e clima.' },
                  { title: 'Pacotes Corporativos', desc: 'Sessões de psicoterapia subsidiadas para toda a organização.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="size-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href={`https://wa.me/${siteData.profile.phone}?text=Olá! Gostaria de saber mais sobre as soluções de saúde mental para minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-xl hover:shadow-primary/20"
              >
                Falar com Consultor B2B
                <ArrowRight className="size-5 ml-2" />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-square">
                <img 
                  src={siteData.media.corporateImage} 
                  alt="Corporate Wellness" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-main via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-primary flex items-center justify-center">
                      <Briefcase className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">Impacto Real</p>
                      <p className="text-sm font-medium">Redução de até 40% no absenteísmo por causas psicológicas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-nude/30 relative overflow-hidden" id="testimonials">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Depoimentos</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight">Histórias de Cura e Crescimento</h3>
              <p className="text-text-light mb-8 text-lg">Leia como nossa abordagem compassiva ajudou outros a navegar em suas jornadas únicas.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="size-12 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-bold text-text-main">
                  <span className="text-primary">500+</span> Pacientes Felizes
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Alex Rivera", role: "Paciente", text: "Mayara ofereceu um espaço seguro que eu não sabia que precisava. Sua abordagem é gentil, mas incrivelmente eficaz. Sinto-me mais no controle da minha vida do que nunca." },
                { name: "Jordan Smith", role: "Paciente", text: "O processo de avaliação bariátrica foi tranquilo e acolhedor. Senti-me ouvido e compreendido durante toda a avaliação." },
                { name: "Morgan Lee", role: "Paciente", text: "Já tentei muitos terapeutas, mas a conexão aqui foi imediata. O foco no crescimento interior mudou verdadeiramente minha perspectiva sobre saúde mental." },
                { name: "Casey Wright", role: "Paciente", text: "As sessões online são muito convenientes e parecem tão pessoais quanto estar no consultório. Recomendo fortemente para quem tem uma agenda lotada." }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-nude-dark relative"
                >
                  <Quote className="absolute top-6 right-8 size-10 text-primary/10" />
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="size-4 fill-current" />)}
                  </div>
                  <p className="text-text-main mb-6 italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-sm">{t.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-text-light font-bold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-nude-dark pt-20 pb-10 px-4">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <BrainCircuit className="size-5" />
              </div>
              <h2 className="text-xl font-bold text-text-main">{siteData.profile.name}</h2>
            </div>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              Psicóloga {siteData.profile.name}. Oferecendo cuidado psicológico compassivo e baseado em evidências. Atendimento das {siteData.profile.hours}.
            </p>
            <div className="flex gap-4 mb-6">
              <a href={`https://www.instagram.com/${siteData.profile.instagram}/`} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-nude flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="size-5" />
              </a>
              <div className="flex items-center gap-2 text-xs font-bold text-text-light">
                <CreditCard className="size-4 text-primary" />
                PIX • Crédito • Débito
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-text-light">
              <li><a className="hover:text-primary transition-colors" href="#">Psicoterapia</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Avaliações</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Saúde Mental Corporativa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-text-light">
              <li><a className="hover:text-primary transition-colors" href="#">Sobre {siteData.profile.name}</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Carreiras</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-text-light">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-primary" />
                <span>{siteData.profile.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <span>{siteData.profile.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-light">
          <p>© 2023 {siteData.company.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Política de Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Termos de Serviço</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Dashboard = ({ onNavigate, siteData, setSiteData }: { 
  onNavigate: (page: string) => void, 
  siteData: any, 
  setSiteData: React.Dispatch<React.SetStateAction<any>> 
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'patients' | 'corporate' | 'settings'>('overview');
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [patients, setPatients] = useState<any[]>([]);
  const [showNewPatientModal, setShowNewPatientModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null);
  const [newPatient, setNewPatient] = useState({
    name: '',
    status: 'Ativo',
    last_session: 'Hoje',
    next_appt: '-',
    avatar: 'user',
    notes: ''
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('/api/patients');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleUpdateNotes = async (id: number, notes: string) => {
    try {
      await fetch(`/api/patients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes })
      });
      fetchPatients();
      if (selectedPatient && selectedPatient.id === id) {
        setSelectedPatient({ ...selectedPatient, notes });
      }
    } catch (error) {
      console.error('Error updating notes:', error);
    }
  };

  const handleAddPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPatient)
      });
      if (response.ok) {
        setShowNewPatientModal(false);
        setNewPatient({ name: '', status: 'Ativo', last_session: 'Hoje', next_appt: '-', avatar: 'user', notes: '' });
        fetchPatients();
      }
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light">
      {/* Patient Detail Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-nude-dark p-6 bg-nude/10">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl overflow-hidden border border-nude-dark">
                  <img src={`https://picsum.photos/seed/${selectedPatient.avatar}/100/100`} alt="" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-main">{selectedPatient.name}</h2>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                    selectedPatient.status === 'Ativo' ? "bg-emerald-100 text-emerald-700" : 
                    selectedPatient.status === 'Pendente' ? "bg-amber-100 text-amber-700" : 
                    "bg-gray-100 text-gray-600"
                  )}>
                    {selectedPatient.status}
                  </span>
                </div>
              </div>
              <button onClick={() => setSelectedPatient(null)} className="p-2 hover:bg-nude rounded-full transition-colors">
                <X className="size-5 text-text-light" />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-nude/20 border border-nude-dark">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-light mb-1">Última Sessão</p>
                  <p className="font-bold text-text-main">{selectedPatient.last_session}</p>
                </div>
                <div className="p-4 rounded-2xl bg-nude/20 border border-nude-dark">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-light mb-1">Próxima Consulta</p>
                  <p className="font-bold text-text-main">{selectedPatient.next_appt}</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
                  <FileText className="size-5 text-primary" /> Notas Clínicas
                </h3>
                <textarea 
                  className="w-full h-48 rounded-2xl border-nude-dark bg-background-light text-sm p-4 focus:ring-primary focus:border-primary resize-none"
                  value={selectedPatient.notes}
                  onChange={e => handleUpdateNotes(selectedPatient.id, e.target.value)}
                  placeholder="Adicione notas sobre o progresso do paciente..."
                ></textarea>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all">
                  <Calendar className="size-4" /> Agendar Próxima
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-nude-dark bg-white py-3 text-sm font-bold text-text-main hover:bg-nude transition-all">
                  <Mail className="size-4" /> Enviar Mensagem
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* New Patient Modal */}
      {showNewPatientModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-nude-dark p-6 bg-nude/10">
              <h2 className="text-xl font-bold text-text-main">Novo Paciente</h2>
              <button onClick={() => setShowNewPatientModal(false)} className="p-2 hover:bg-nude rounded-full transition-colors">
                <X className="size-5 text-text-light" />
              </button>
            </div>
            <form onSubmit={handleAddPatient} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-text-main mb-1.5">Nome Completo</label>
                <input 
                  required
                  value={newPatient.name}
                  onChange={e => setNewPatient({...newPatient, name: e.target.value})}
                  className="w-full rounded-xl border-nude-dark bg-background-light text-text-main focus:border-primary focus:ring-primary py-3 px-4" 
                  placeholder="Ex: João Silva" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-main mb-1.5">Status Inicial</label>
                <select 
                  value={newPatient.status}
                  onChange={e => setNewPatient({...newPatient, status: e.target.value})}
                  className="w-full rounded-xl border-nude-dark bg-background-light text-text-main focus:border-primary focus:ring-primary py-3 px-4"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg shadow-primary/20 mt-4"
              >
                <UserPlus className="size-5" /> Cadastrar Paciente
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-nude-dark bg-white lg:flex">
        <div className="flex h-20 items-center gap-3 px-6 border-b border-nude-dark">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <BrainCircuit className="size-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-main">PsiCare</span>
        </div>
        <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all",
                activeTab === 'overview' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-text-light hover:bg-nude"
              )}
            >
              <LayoutDashboard className="size-5" /> Visão Geral
            </button>
            <button 
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-text-light hover:bg-nude transition-all"
            >
              <Calendar className="size-5" /> Agenda
            </button>
            <button 
              onClick={() => setActiveTab('patients')}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all",
                activeTab === 'patients' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-text-light hover:bg-nude"
              )}
            >
              <Users className="size-5" /> Pacientes
            </button>
            <button 
              onClick={() => setActiveTab('corporate')}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all",
                activeTab === 'corporate' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-text-light hover:bg-nude"
              )}
            >
              <Building2 className="size-5" /> Empresas
            </button>
            <button 
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-text-light hover:bg-nude transition-all"
            >
              <FileText className="size-5" /> Relatórios
            </button>
          </nav>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('settings')}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all",
                activeTab === 'settings' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-text-light hover:bg-nude"
              )}
            >
              <Settings className="size-5" /> Configurações
            </button>
            <button onClick={() => onNavigate('landing')} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-text-light hover:bg-nude transition-all">
              <LogOut className="size-5" /> Sair
            </button>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-nude-dark bg-nude/30 p-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-secondary border border-white shadow-sm">
                <img src={siteData.media.heroImage} alt={siteData.profile.name} referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-sm font-bold text-text-main">{siteData.profile.name}</span>
                <span className="truncate text-[10px] uppercase tracking-wider font-bold text-text-light">{siteData.profile.title}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-7xl">
            {activeTab === 'overview' ? (
              <>
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-extrabold text-text-main tracking-tight">Visão Geral</h1>
                    <p className="mt-1 text-sm text-text-light">Bem-vinda de volta, {siteData.profile.name.split(' ')[0]}. Aqui está o que está acontecendo hoje.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-full border border-nude-dark bg-white px-5 py-2.5 text-sm font-bold text-text-main hover:bg-nude transition-all shadow-sm">
                      <CalendarPlus className="size-4" /> Nova Sessão
                    </button>
                    <button 
                      onClick={() => setShowNewPatientModal(true)}
                      className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                    >
                      <UserPlus className="size-4" /> Novo Paciente
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { label: 'Sessões Hoje', value: '8', trend: '+2 sessões', color: 'primary', icon: BarChart3 },
                    { label: 'Pacientes Ativos', value: '42', trend: '+3 novos', color: 'secondary', icon: Users },
                    { label: 'Novos Contatos', value: '12', trend: '+5 esta semana', color: 'accent', icon: MessageSquare },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-3xl border border-nude-dark bg-white p-6 shadow-sm hover:shadow-md transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <div className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl transition-all group-hover:scale-110",
                          stat.color === 'primary' ? "bg-primary/10 text-primary" : 
                          stat.color === 'secondary' ? "bg-secondary/40 text-primary-dark" : 
                          "bg-accent/40 text-indigo-600"
                        )}>
                          <stat.icon className="size-6" />
                        </div>
                        <span className="flex items-center text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {stat.trend}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-text-light">{stat.label}</p>
                        <h3 className="mt-1 text-3xl font-extrabold text-text-main">{stat.value}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="rounded-3xl border border-nude-dark bg-white shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between border-b border-nude-dark p-6 bg-nude/10">
                        <h2 className="text-xl font-bold text-text-main">Agenda de Hoje</h2>
                        <button className="text-sm font-bold text-primary hover:underline">Ver calendário completo</button>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { name: 'Sarah Johnson', type: 'Terapia Cognitiva', time: '15:00 - 15:50', status: 'Online', avatar: 'sarah' },
                          { name: 'Michael Chen', type: 'Acompanhamento', time: '16:30 - 17:20', status: 'Presencial', avatar: 'michael' },
                          { name: 'Emma Wilson', type: 'Primeira Consulta', time: '18:00 - 18:50', status: 'Online', avatar: 'emma' },
                        ].map((session, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-nude-dark hover:bg-nude/20 transition-all group cursor-pointer">
                            <div className="h-12 w-12 rounded-xl overflow-hidden border border-nude-dark shadow-sm">
                              <img src={`https://picsum.photos/seed/${session.avatar}/100/100`} alt={session.name} referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">{session.name}</h3>
                              <p className="text-xs text-text-light">{session.type}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-xs font-bold text-text-main mb-1">
                                <Timer className="size-3 text-primary" /> {session.time}
                              </div>
                              <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md",
                                session.status === 'Online' ? "bg-accent/40 text-indigo-700" : "bg-secondary text-primary-dark"
                              )}>
                                {session.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="rounded-3xl bg-text-main p-8 text-white shadow-xl relative overflow-hidden group">
                      <div className="absolute -right-10 -top-10 size-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-8">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Próxima Sessão</p>
                            <h3 className="mt-1 text-3xl font-extrabold">Em 15 min</h3>
                          </div>
                          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                            <Timer className="size-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-14 w-14 rounded-2xl bg-white/10 overflow-hidden border border-white/20">
                            <img src="https://picsum.photos/seed/sarah/100/100" alt="Sarah" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="font-bold text-lg">Sarah Johnson</p>
                            <p className="text-xs text-gray-400">Terapia Cognitiva</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                            Iniciar Sessão
                          </button>
                          <button className="flex items-center justify-center rounded-xl bg-white/10 px-4 py-3 text-white hover:bg-white/20 transition-all backdrop-blur-md">
                            <MessageSquare className="size-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-nude-dark bg-white p-6 shadow-sm">
                      <h3 className="font-bold text-text-main mb-4 flex items-center gap-2">
                        <Brain className="size-5 text-primary" /> Notas Rápidas
                      </h3>
                      <textarea 
                        className="w-full h-32 rounded-2xl border-nude-dark bg-nude/20 text-sm p-4 focus:ring-primary focus:border-primary resize-none placeholder:text-text-light/50"
                        placeholder="Escreva um lembrete rápido..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-extrabold text-text-main tracking-tight">Pacientes</h1>
                    <p className="mt-1 text-sm text-text-light">Gerencie sua lista de pacientes e registros.</p>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-text-light" />
                    <input 
                      type="text" 
                      placeholder="Buscar pacientes..." 
                      className="pl-11 pr-4 py-2.5 rounded-full border-nude-dark bg-white text-sm focus:ring-primary focus:border-primary w-64 shadow-sm"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-nude-dark shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-nude/30 border-b border-nude-dark">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-text-light">Paciente</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-text-light">Última Sessão</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-text-light">Status</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-text-light">Próxima Consulta</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-text-light">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-nude-dark">
                      {patients.map((patient, i) => (
                        <tr 
                          key={i} 
                          onClick={() => setSelectedPatient(patient)}
                          className="hover:bg-nude/10 transition-colors group cursor-pointer"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-10 rounded-xl overflow-hidden border border-nude-dark">
                                <img src={`https://picsum.photos/seed/${patient.avatar}/100/100`} alt="" referrerPolicy="no-referrer" />
                              </div>
                              <span className="font-bold text-text-main group-hover:text-primary transition-colors">{patient.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-text-light">{patient.last_session}</td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full",
                              patient.status === 'Ativo' ? "bg-emerald-100 text-emerald-700" : 
                              patient.status === 'Pendente' ? "bg-amber-100 text-amber-700" : 
                              "bg-gray-100 text-gray-600"
                            )}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-text-main font-medium">{patient.next_appt}</td>
                          <td className="px-6 py-4">
                            <button className="p-2 rounded-lg hover:bg-nude text-text-light hover:text-primary transition-all">
                              <ArrowRight className="size-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'corporate' && (
              <div className="space-y-8">
                {/* ... existing corporate content ... */}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8">
                  <h1 className="text-3xl font-extrabold text-text-main tracking-tight">Configurações</h1>
                  <p className="mt-1 text-sm text-text-light">Gerencie as informações da sua página e conta.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    {/* Profile Settings */}
                    <div className="bg-white rounded-3xl border border-nude-dark shadow-sm p-8">
                      <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                        <Users className="size-5 text-primary" /> Perfil Profissional
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Nome</label>
                            <input 
                              type="text" 
                              value={siteData.profile.name}
                              onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, name: e.target.value } })}
                              className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Título</label>
                            <input 
                              type="text" 
                              value={siteData.profile.title}
                              onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, title: e.target.value } })}
                              className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">E-mail</label>
                          <input 
                            type="email" 
                            value={siteData.profile.email}
                            onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, email: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Telefone (WhatsApp)</label>
                          <input 
                            type="text" 
                            value={siteData.profile.phone}
                            onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, phone: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Instagram (Username)</label>
                          <input 
                            type="text" 
                            value={siteData.profile.instagram}
                            onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, instagram: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Endereço</label>
                          <textarea 
                            value={siteData.profile.address}
                            onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, address: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary h-20 resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Horário de Atendimento</label>
                          <input 
                            type="text" 
                            value={siteData.profile.hours}
                            onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, hours: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pricing Settings */}
                    <div className="bg-white rounded-3xl border border-nude-dark shadow-sm p-8">
                      <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                        <CreditCard className="size-5 text-primary" /> Valores e Planos
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Valor Sessão Individual</label>
                          <input 
                            type="text" 
                            value={siteData.pricing.session}
                            onChange={(e) => setSiteData({ ...siteData, pricing: { ...siteData.pricing, session: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Valor Pacote Mensal (Continuidade)</label>
                          <input 
                            type="text" 
                            value={siteData.pricing.package}
                            onChange={(e) => setSiteData({ ...siteData, pricing: { ...siteData.pricing, package: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Settings */}
                    <div className="bg-white rounded-3xl border border-nude-dark shadow-sm p-8">
                      <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                        <Building2 className="size-5 text-primary" /> Dados da Empresa
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">Nome da Empresa</label>
                          <input 
                            type="text" 
                            value={siteData.company.name}
                            onChange={(e) => setSiteData({ ...siteData, company: { ...siteData.company, name: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">CNPJ</label>
                          <input 
                            type="text" 
                            value={siteData.company.cnpj}
                            onChange={(e) => setSiteData({ ...siteData, company: { ...siteData.company, cnpj: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Media Settings */}
                    <div className="bg-white rounded-3xl border border-nude-dark shadow-sm p-8">
                      <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                        <PlayCircle className="size-5 text-primary" /> Mídia e Imagens
                      </h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-text-light">Imagem Hero</label>
                            <div className="aspect-video rounded-2xl overflow-hidden border border-nude-dark bg-nude/10">
                              <img src={siteData.media.heroImage} alt="Hero Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <input 
                              type="text" 
                              value={siteData.media.heroImage}
                              onChange={(e) => setSiteData({ ...siteData, media: { ...siteData.media, heroImage: e.target.value } })}
                              className="w-full rounded-xl border-nude-dark bg-background-light text-[10px] p-2 focus:ring-primary focus:border-primary"
                              placeholder="URL da Imagem"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-text-light">Imagem Processo</label>
                            <div className="aspect-video rounded-2xl overflow-hidden border border-nude-dark bg-nude/10">
                              <img src={siteData.media.processImage} alt="Process Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <input 
                              type="text" 
                              value={siteData.media.processImage}
                              onChange={(e) => setSiteData({ ...siteData, media: { ...siteData.media, processImage: e.target.value } })}
                              className="w-full rounded-xl border-nude-dark bg-background-light text-[10px] p-2 focus:ring-primary focus:border-primary"
                              placeholder="URL da Imagem"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-text-light">Imagem Corporativa</label>
                            <div className="aspect-video rounded-2xl overflow-hidden border border-nude-dark bg-nude/10">
                              <img src={siteData.media.corporateImage} alt="Corporate Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <input 
                              type="text" 
                              value={siteData.media.corporateImage}
                              onChange={(e) => setSiteData({ ...siteData, media: { ...siteData.media, corporateImage: e.target.value } })}
                              className="w-full rounded-xl border-nude-dark bg-background-light text-[10px] p-2 focus:ring-primary focus:border-primary"
                              placeholder="URL da Imagem"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-text-light">Vídeo Institucional</label>
                            <div className="aspect-video rounded-2xl overflow-hidden border border-nude-dark bg-nude/10 flex items-center justify-center relative">
                              {siteData.media.videoUrl.includes('youtube.com') || siteData.media.videoUrl.includes('youtu.be') ? (
                                <iframe 
                                  src={siteData.media.videoUrl} 
                                  className="w-full h-full" 
                                  title="Video Preview"
                                  allowFullScreen
                                ></iframe>
                              ) : (
                                <PlayCircle className="size-8 text-primary/40" />
                              )}
                            </div>
                            <input 
                              type="text" 
                              value={siteData.media.videoUrl}
                              onChange={(e) => setSiteData({ ...siteData, media: { ...siteData.media, videoUrl: e.target.value } })}
                              className="w-full rounded-xl border-nude-dark bg-background-light text-[10px] p-2 focus:ring-primary focus:border-primary"
                              placeholder="Embed URL (Youtube/Vimeo)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google Account Settings */}
                    <div className="bg-white rounded-3xl border border-nude-dark shadow-sm p-8">
                      <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                        <Mail className="size-5 text-primary" /> Conta Google
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-text-light mb-2">E-mail Google (Agenda/Meet)</label>
                          <input 
                            type="email" 
                            value={siteData.profile.googleAccount}
                            onChange={(e) => setSiteData({ ...siteData, profile: { ...siteData.profile, googleAccount: e.target.value } })}
                            className="w-full rounded-xl border-nude-dark bg-background-light text-sm p-3 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary/50 flex items-center gap-3">
                          <Info className="size-5 text-primary" />
                          <p className="text-xs text-text-main leading-relaxed">
                            Esta conta será usada para sincronizar sua agenda e gerar links do Google Meet automaticamente.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => {
                          setShowSaveToast(true);
                          setTimeout(() => setShowSaveToast(false), 3000);
                        }}
                        className="flex-1 rounded-2xl bg-primary py-4 text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                      >
                        Salvar Alterações
                      </button>
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className="flex-1 rounded-2xl border border-nude-dark bg-white py-4 text-text-main font-bold hover:bg-nude transition-all"
                      >
                        Cancelar
                      </button>
                    </div>

                    {showSaveToast && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-8 right-8 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-[200]"
                      >
                        <CheckCircle2 className="size-5" />
                        <span className="font-bold text-sm">Configurações salvas com sucesso!</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};


const Confirmation = ({ onNavigate, siteData }: { onNavigate: (page: string) => void, siteData: any }) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <header className="h-20 bg-white/80 backdrop-blur-md border-b border-nude-dark flex items-center px-4">
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-secondary text-primary flex items-center justify-center">
              <BrainCircuit className="size-6" />
            </div>
            <h2 className="text-text-main text-xl font-bold tracking-tight">{siteData.company.name}</h2>
          </div>
          <button onClick={() => onNavigate('landing')} className="text-sm font-bold text-primary">Voltar ao Início</button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4 relative">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-nude-dark overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center size-16 rounded-full bg-secondary text-primary mb-6 relative border border-secondary">
                <CheckCircle2 className="size-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-25"></div>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-text-main mb-2">Agendamento Confirmado!</h1>
              <p className="text-text-light text-lg">Sua consulta foi agendada com sucesso. Estamos ansiosos para falar com você.</p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-6 mb-8 border border-secondary/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-nude-dark text-center min-w-[70px]">
                  <span className="block text-xs font-bold text-primary uppercase">Out</span>
                  <span className="block text-2xl font-extrabold text-text-main">24</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main">Consulta Inicial</h3>
                  <p className="text-text-light text-sm">com {siteData.profile.name}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-text-main font-medium">
                    <Timer className="size-5 text-primary" /> 16:00 - 16:50 (50 min)
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-nude-dark flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <Brain className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-text-main">meet.google.com/abc-defg-hij</span>
                </div>
                <button className="text-primary"><Copy className="size-5" /></button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 px-6 rounded-full shadow-md">
                Adicionar ao Calendário
              </button>
              <button onClick={() => onNavigate('landing')} className="flex-1 flex items-center justify-center gap-2 bg-white border border-nude-dark text-text-main font-bold py-3.5 px-6 rounded-full">
                Voltar ao Início
              </button>
            </div>
          </div>
          <div className="bg-secondary/40 border-t md:border-t-0 md:border-l border-nude-dark p-8 md:p-12 md:w-2/5">
            <h3 className="font-bold text-lg text-text-main mb-6 flex items-center gap-2">
              <Info className="size-5 text-primary" /> Antes de nos encontrarmos
            </h3>
            <div className="space-y-6">
              {[
                { id: 1, title: 'Verifique sua conexão', desc: 'Certifique-se de ter uma conexão estável com a internet.' },
                { id: 2, title: 'Preencha os Formulários', desc: 'Por favor, preencha o questionário pré-sessão.' },
                { id: 3, title: 'Teste Câmera e Microfone', desc: 'Recomendamos o uso de fones de ouvido para um melhor áudio.' },
              ].map((step) => (
                <div key={step.id} className="flex gap-4">
                  <span className="flex-shrink-0 size-6 rounded-full bg-white text-primary text-xs font-bold flex items-center justify-center border border-primary/20">{step.id}</span>
                  <div>
                    <h4 className="text-sm font-bold text-text-main mb-1">{step.title}</h4>
                    <p className="text-xs text-text-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [siteData, setSiteData] = useState({
    profile: {
      name: 'Mayara Rocha',
      title: 'Psicóloga',
      email: 'contato@mayararocha.com.br',
      phone: '5511999999999',
      instagram: 'psico_mayararocha',
      address: 'Rua do Bem-Estar, 123, Sala 400, São Paulo, SP 01234-567',
      hours: '15h às 19h',
      googleAccount: 'mayara.rocha@gmail.com',
    },
    company: {
      name: 'Mayara Rocha Psicologia',
      cnpj: '00.000.000/0001-00',
    },
    pricing: {
      session: 'R$ 180,00',
      package: 'R$ 650,00',
    },
    media: {
      heroImage: 'https://picsum.photos/seed/psychology/800/1000',
      processImage: 'https://picsum.photos/seed/process/800/600',
      corporateImage: 'https://picsum.photos/seed/corporate-wellness/1000/1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    }
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'landing': return <LandingPage onNavigate={setCurrentPage} siteData={siteData} />;
      case 'dashboard': return <Dashboard onNavigate={setCurrentPage} siteData={siteData} setSiteData={setSiteData} />;
      case 'confirmation': return <Confirmation onNavigate={setCurrentPage} siteData={siteData} />;
      default: return <LandingPage onNavigate={setCurrentPage} siteData={siteData} />;
    }
  };

  return (
    <div className="font-sans antialiased">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      {renderPage()}
    </div>
  );
};

export default App;
