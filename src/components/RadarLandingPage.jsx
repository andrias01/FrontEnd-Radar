import React, { useState, useEffect } from 'react';
import { GraduationCap, Building2, TrendingUp, Users, Mail, Phone, MapPin, Github, Linkedin, Twitter, ChevronRight, BarChart3, Target, Zap } from 'lucide-react';
import {Link } from "react-router-dom";

function RadarLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Instituciones Educativas",
      description: "Monitorea el desempeño de tus egresados y optimiza los perfiles de carrera según las demandas reales del mercado laboral."
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Empresas",
      description: "Encuentra talento calificado y evalúa el rendimiento de practicantes con datos precisos sobre competencias técnicas y blandas."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Análisis en Tiempo Real",
      description: "Visualiza estadísticas detalladas sobre brechas de competencias, tendencias de contratación y perfiles más demandados."
    }
  ];

  const benefits = [
    "Reduce la brecha entre formación académica y necesidades empresariales",
    "Identifica competencias técnicas y habilidades blandas en estudiantes",
    "Facilita la toma de decisiones basada en datos reales",
    "Conecta instituciones educativas con empresas de manera efectiva"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">RADAR</span>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            <Link to="/RadarLogin">
              Iniciar Sesión
            </Link>
            
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                  Plataforma de Análisis Educativo
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Conectando
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Educación </span>
                con el
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Mercado Laboral</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                RADAR es la plataforma que revoluciona la forma en que instituciones educativas y empresas colaboran para cerrar la brecha entre formación académica y necesidades del mercado laboral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Comenzar Ahora</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-purple-500/20 rounded-xl">
                    <Users className="w-8 h-8 text-purple-400" />
                    <div>
                      <p className="text-sm text-slate-400">Estudiantes Activos</p>
                      <p className="text-2xl font-bold text-white">12,450+</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-pink-500/20 rounded-xl">
                    <Building2 className="w-8 h-8 text-pink-400" />
                    <div>
                      <p className="text-sm text-slate-400">Empresas Asociadas</p>
                      <p className="text-2xl font-bold text-white">350+</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-cyan-500/20 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-cyan-400" />
                    <div>
                      <p className="text-sm text-slate-400">Tasa de Éxito</p>
                      <p className="text-2xl font-bold text-white">87%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">¿Qué es RADAR?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Una plataforma integral que recolecta y analiza información sobre perfiles académicos, desempeño de estudiantes en prácticas y demandas del mercado laboral.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Beneficios Clave</h2>
              <p className="text-xl text-slate-300 mb-8">
                RADAR facilita la conexión entre el mundo académico y empresarial mediante análisis profundos de competencias técnicas y habilidades blandas.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Competencias Evaluadas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">🎓 Competencias Técnicas</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Aplicación de conocimientos teóricos</li>
                    <li>• Calidad y precisión en el trabajo</li>
                    <li>• Resolución de problemas complejos</li>
                    <li>• Manejo de herramientas especializadas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-pink-400 font-semibold mb-3">🤝 Habilidades Blandas</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Iniciativa y proactividad</li>
                    <li>• Capacidad de aprendizaje y adaptación</li>
                    <li>• Trabajo en equipo y comunicación</li>
                    <li>• Responsabilidad y ética profesional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">¿Listo para transformar tu institución?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Únete a RADAR y descubre cómo datos precisos pueden mejorar la empleabilidad de tus estudiantes.
            </p>
            <button className="px-10 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contactar con Ventas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RADAR</span>
              </div>
              <p className="text-slate-400 text-sm">
                Conectando educación con oportunidades laborales mediante análisis de datos inteligentes.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Ayuda</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@radar.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+57 300 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Medellín, Colombia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 RADAR. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RadarLandingPage;
