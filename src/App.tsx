import React, { createContext, useContext, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Code2, Database, Globe, ShoppingBag, Sun, Moon, GraduationCap, Award, ExternalLink } from 'lucide-react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

function Portfolio() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#sobre" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sobre
                </a>
                <a href="#habilidades" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Habilidades
                </a>
                <a href="#projetos" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projetos
                </a>
                <a href="#experiencia" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Experiência
                </a>
                <a href="#educacao" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Educação
                </a>
              </div>
            </div>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-purple-100/40 dark:from-blue-600/20 dark:to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Anderson Silva
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-slate-700 dark:text-slate-200 font-light">
              Desenvolvedor Fullstack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 dark:text-slate-300 mb-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Ribeirão Preto - São Paulo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>(16) 98823-1969</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <a 
                href="#" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 px-8 py-3 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
              <div className="flex gap-4">
                <SocialLink icon={<Github />} href="#" />
                <SocialLink icon={<Linkedin />} href="#" />
                <SocialLink icon={<Mail />} href="#" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Resumo Profissional</SectionTitle>
            <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-white/10">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Profissional com ampla experiência em desenvolvimento fullstack, atuando na criação,
                manutenção e otimização de sistemas web e e-commerce. Possui expertise em diversas
                tecnologias front-end e back-end, com foco em alta performance, segurança e
                escalabilidade.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mt-4">
                Atualmente, atua no setor de suporte da Alpina Digital, garantindo o bom funcionamento
                de sistemas, prestando atendimento técnico e solucionando problemas em plataformas de
                e-commerce e aplicações web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Habilidades Técnicas</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillCategory 
                icon={<Code2 className="w-6 h-6" />}
                title="Frameworks e Linguagens"
                skills={["Laravel", "CodeIgniter", "Spring Boot", "Symfony", "Next.js", "PHP", "Python", "JavaScript", "Node.js", "Java"]}
              />
              <SkillCategory 
                icon={<Globe className="w-6 h-6" />}
                title="Front-end"
                skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "CodyHouse"]}
              />
              <SkillCategory 
                icon={<Database className="w-6 h-6" />}
                title="Banco de Dados"
                skills={["MySQL", "PostgreSQL", "SQL Server", "SQLite", "Redis"]}
              />
              <SkillCategory 
                icon={<ShoppingBag className="w-6 h-6" />}
                title="E-commerce & CMS"
                skills={["WooCommerce", "Shopify", "PrestaShop", "WordPress", "Moodle"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Projetos</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <ProjectCard
                title="E-commerce Dashboard"
                description="Sistema de gestão para e-commerce com painel administrativo completo. Inclui gestão de produtos, pedidos, clientes e relatórios de vendas."
                technologies={["Laravel", "MySQL", "React", "TypeScript", "Redis"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Sistema de Gestão de Cursos"
                description="Plataforma LMS para gerenciamento de cursos online. Suporta múltiplos tipos de conteúdo, sistema de avaliação e certificados automáticos."
                technologies={["PHP", "CodeIgniter", "PostgreSQL", "jQuery", "AWS"]}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="Bot Discord Multifuncional"
                description="Bot para Discord com funcionalidades de moderação, música, jogos e integração com APIs externas. Inclui sistema de níveis e economia virtual."
                technologies={["Python", "Discord.py", "MongoDB", "REST APIs"]}
                githubUrl="#"
                liveUrl="#"
              />
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-dashed border-slate-200/20 dark:border-white/10 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-blue-600/70 dark:text-blue-400/70" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900/70 dark:text-white/70">Mais Projetos em Breve</h3>
                <p className="text-sm text-slate-600/70 dark:text-slate-300/70">Novos projetos estão sendo desenvolvidos e serão adicionados em breve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Experiência Profissional</SectionTitle>
            <div className="space-y-8">
              <ExperienceCard 
                company="Alpina Digital"
                position="Desenvolvedor Fullstack"
                period="09/2024 - Presente"
                responsibilities={[
                  "Manutenção e correção de problemas em sistemas, e-commerces e aplicativos",
                  "Atendimento a chamados de suporte, fornecendo assistência técnica e solucionando problemas de clientes",
                  "Otimização de desempenho de sites e plataformas, ajustando códigos e bancos de dados",
                  "Integração e configuração de ferramentas, incluindo APIs, gateways de pagamento e automação de marketing",
                  "Documentação e treinamento de processos técnicos para clientes e equipe interna",
                  "Monitoramento e prevenção de falhas em sistemas e implementação de medidas de segurança",
                  "Colaboração com equipes multidisciplinares para garantir que as soluções atendam aos requisitos técnicos e de UX"
                ]}
              />
              <ExperienceCard 
                company="Nepuga"
                position="Desenvolvedor Fullstack"
                period="01/2023 - 09/2024"
                responsibilities={[
                  "Desenvolvimento e manutenção de aplicações web, garantindo estabilidade e eficiência nos sistemas",
                  "Implementação de novas funcionalidades e correção de bugs conforme as necessidades do negócio",
                  "Integração de APIs e otimização de processos, colaborando com a equipe de desenvolvimento para melhor desempenho",
                  "Desenvolvimento de bots para Discord utilizando Python, automatizando tarefas e interações",
                  "Atuação com WordPress, PHP e Moodle, criando e aprimorando funcionalidades para plataformas educacionais"
                ]}
              />
              <ExperienceCard 
                company="SellersFlow"
                position="Desenvolvedor Fullstack"
                period="02/2022 - 01/2023"
                responsibilities={[
                  "Desenvolvimento de soluções personalizadas para e-commerce, aprimorando funcionalidades e escalabilidade",
                  "Manutenção e atualização de sistemas existentes, garantindo segurança e eficiência",
                  "Implementação de novas funcionalidades e suporte técnico para a equipe, otimizando fluxos de trabalho",
                  "Desenvolvimento de lojas utilizando WooCommerce, Shopify e PrestaShop, adaptando soluções para diferentes necessidades de mercado"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacao" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Formação Acadêmica</SectionTitle>
            <div className="grid grid-cols-1 gap-6">
              <EducationCard 
                course="Análise e Desenvolvimento de Sistemas"
                institution="Estácio"
                year="2025"
              />
              <EducationCard 
                course="Desenvolvimento de Sistemas"
                institution="Etec José Martimiano da Silva"
                year="2024"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p> 2024 Anderson Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="bg-white dark:bg-white/5 p-3 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 text-slate-600 dark:text-white"
    >
      {icon}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
      {children}
    </h2>
  );
}

function SkillCategory({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors duration-300 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300 px-4 py-1.5 border border-slate-200 dark:border-white/5 hover:border-blue-500/50 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ company, position, period, responsibilities }: { 
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}) {
  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors duration-300">
      <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">{company}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{position}</p>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{period}</p>
      <ul className="space-y-3 text-slate-600 dark:text-slate-300">
        {responsibilities.map((resp, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationCard({ course, institution, year }: {
  course: string;
  institution: string;
  year: string;
}) {
  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{course}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400">{institution}</p>
      <p className="text-blue-600 dark:text-blue-400 mt-2">Conclusão: {year}</p>
    </div>
  );
}

function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}) {
  return (
    <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-slate-200 dark:border-white/10 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default App;