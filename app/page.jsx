"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Play,
  Award,
  Users,
  TrendingUp,
  Zap,
  BookOpen,
  BarChart3,
  Microscope,
  Globe,
  Shield,
  ChevronUp,
  Code,
  Smartphone,
  Cloud,
  Brain,
  Monitor,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const IlmiWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroSlides = [
    {
      title:
        "Expertise Technologique. Innovation Guidée par les Données. Focus sur l'Impact Client",
      subtitle:
        "Nos équipes pluridisciplinaires — développeurs, architectes et spécialistes — créent des solutions web, mobiles et cloud qui transforment vos idées en succès tangibles",
      buttonText: "Découvrir Notre Équipe",
      image:
        "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Démonstration d'Impact Concret à Travers l'Innovation et la Stratégie",
      subtitle:
        "De l'intelligence artificielle aux applications cloud natives — découvrez comment nos solutions digitales stimulent la croissance, renforcent la compétitivité et accélèrent la transformation numérique",
      buttonText: "Explorer Nos Projets",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Transformation Digitale pour les Entreprises et les Utilisateurs",
      subtitle:
        "Chez ilmi-consulting & services, nous combinons expertise technique, stratégie innovante et excellence en développement pour accompagner les leaders dans leurs décisions technologiques critiques",
      buttonText: "Découvrir Notre Histoire",
      image: "",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Barre Flottante Supérieure */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-8xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
          <div></div>
          <div className="flex space-x-4 sm:space-x-6 text-gray-600">
            <a
              href="#"
              className="hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-2 h-2 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#"
              className="hover:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-2 h-2 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-2 h-2 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#"
              className="hover:text-pink-600 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-2 h-2 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-2 h-2 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* En-tête Glassmorphisme */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-b border-white/10">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Animé */}
            <div className="flex-shrink-0">
              <div className="flex items-center group">
                <div className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold mr-2 group-hover:scale-105 transition-transform duration-300">
                  ilmi
                </div>
                <div className="text-xs sm:text-xs lg:text-xs text-gray-700 leading-tight opacity-80 hidden sm:block relative top-2">
                  <h5>consulting & services</h5>
                </div>
              </div>
            </div>

            {/* Navigation Desktop avec Effets de Survol */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105"
              >
                Accueil
              </a>

              {["À Propos"].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-gray-700 font-medium transition-all duration-300 group-hover:scale-105">
                    {item}{" "}
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 border border-gray-100">
                    <div className="p-4 space-y-2">
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Notre Histoire
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Équipe de Direction
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Mission & Valeurs
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {["Services"].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-gray-700 font-medium transition-all duration-300 group-hover:scale-105">
                    {item}{" "}
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 border border-gray-100">
                    <div className="p-4 space-y-2">
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Développement Web
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Applications Mobiles
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Solutions Cloud
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Intelligence Artificielle
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                      >
                        Logiciels Sur Mesure
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>

            {/* Bouton menu mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 hover:scale-110 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Mobile Améliorée */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-xl rounded-b-3xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  "À Propos",
                  "Services",
                  "Nos Projets",
                  "Carrières",
                  "Contact",
                ].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 block px-4 sm:px-6 py-3 sm:py-4 font-medium rounded-2xl hover:bg-blue-50 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Amélioré avec Parallaxe */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms]"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.7) 40%, transparent 70%), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `translateY(${scrollY * 0.3}px)`,
                }}
              />
              {/* Contenu Amélioré */}
              <div className="relative z-100 h-full flex items-center pt-24 sm:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-5xl mx-auto">
                    <div className="mb-6 sm:mb-8 opacity-0 animate-[fadeInUp_1s_0.5s_forwards]">
                      <span className="inline-block px-4 sm:px-6 py-2 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/30">
                        Excellence en Conseil Informatique
                      </span>
                    </div>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight animate-[fadeInUp_1s_0.7s_forwards]">
                      {slide.title.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className="inline-block mr-1 sm:mr-2 lg:mr-3 hover:text-blue-200 transition-colors duration-300"
                        >
                          {word}
                        </span>
                      ))}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light animate-[fadeInUp_1s_0.7s_forwards] max-w-4xl px-4 sm:px-0">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-[fadeInUp_1s_0.7s_forwards] px-4 sm:px-0">
                      <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
                      >
                        {slide.buttonText}{" "}
                        <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicateurs de Diapositive Améliorés */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentSlide
                  ? "bg-white w-8 sm:w-12"
                  : "bg-white/50 w-4 sm:w-6 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section À Propos Moderne avec Layout Bento */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Motif d'Arrière-plan */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(59,130,246,0.05)_0%,_transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,_rgba(147,51,234,0.05)_0%,_transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Carte de Contenu Principal */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 group">
                <div className="w-16 sm:w-20 h-1 sm:h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6 sm:mb-8 group-hover:w-24 sm:group-hover:w-32 transition-all duration-500"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 mb-6 sm:mb-8 leading-tight">
                  Transformer la Technologie en Impact
                </h2>
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
                  Chez ilmi-consulting & services, nous combinons expertise
                  technique, stratégie d'innovation et excellence en
                  développement pour accompagner les leaders technologiques dans
                  leurs décisions critiques. Notre équipe de développeurs,
                  architectes et spécialistes crée des solutions claires,
                  performantes et évolutives qui favorisent la croissance et
                  inspirent la confiance.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                  {[
                    "Solutions Sur Mesure",
                    "Équipe Experte",
                    "Portée Globale",
                    "Centré Client",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center group-hover:scale-105 transition-all duration-300 shadow-xl">
                  Découvrir Notre Histoire{" "}
                  <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>

            {/* Cartes Latérales */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              {/* Carte Statistiques */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 opacity-60" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  200+
                </h3>
                <p className="text-blue-100 text-base sm:text-lg">
                  Projets Réalisés
                </p>
              </div>

              {/* Carte Équipe */}
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600" />
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  25+
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Experts Techniques
                </p>
              </div>

              {/* Carte Expérience */}
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 opacity-60" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  10+
                </h3>
                <p className="text-green-100 text-base sm:text-lg">
                  Années d'Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Révolutionnaire */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Éléments d'Arrière-plan Animés */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 sm:mb-8">
              Nos Compétences Clés
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
              Services pluridisciplinaires conçus pour transformer vos défis
              technologiques en solutions innovantes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Développement Web",
                description:
                  "Solutions web modernes et performantes utilisant les dernières technologies pour créer des expériences utilisateur exceptionnelles et des plateformes évolutives.",
                icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Applications Mobiles",
                description:
                  "Applications iOS et Android natives et cross-platform qui offrent des performances optimales et une expérience utilisateur fluide sur tous les appareils.",
                icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "green",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                title: "Solutions Cloud",
                description:
                  "Architecture cloud native et migration vers le cloud pour optimiser vos coûts, améliorer la scalabilité et garantir la sécurité de vos données.",
                icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "purple",
                gradient: "from-purple-500 to-violet-600",
              },
              {
                title: "Intelligence Artificielle",
                description:
                  "Intégration d'IA et machine learning pour automatiser vos processus, améliorer la prise de décision et créer de nouvelles opportunités business.",
                icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "orange",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Logiciels Sur Mesure",
                description:
                  "Développement de logiciels personnalisés qui répondent exactement à vos besoins métier avec une architecture robuste et une interface intuitive.",
                icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "pink",
                gradient: "from-pink-500 to-rose-600",
              },
              {
                title: "Data & Analytics",
                description:
                  "Solutions de gestion et d'analyse des données pour transformer vos informations en insights actionnables et en avantage concurrentiel.",
                icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "indigo",
                gradient: "from-indigo-500 to-purple-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Gradient d'Arrière-plan Animé */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                ></div>

                {/* Conteneur d'Icône Flottant */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 transition-all duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base sm:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Flèche de Survol */}
                <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowRight
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-${service.color}-600`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques Immersive */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Motif d'Arrière-plan Animé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(59,130,246,0.3)_0%,_transparent_50%)] animate-pulse"></div>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(147,51,234,0.3)_0%,_transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(16,185,129,0.2)_0%,_transparent_50%)] animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Impact Technologique Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                l'Innovation
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light px-4 sm:px-0">
              Notre bilan de réussite parle de lui-même
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                number: "200+",
                label: "Projets Réalisés",
                icon: (
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                ),
              },
              {
                number: "50+",
                label: "Clients Globaux",
                icon: (
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                ),
              },
              {
                number: "10+",
                label: "Années d'Expérience",
                icon: (
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                ),
              },
              {
                number: "25+",
                label: "Experts Techniques",
                icon: (
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                ),
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 border border-white/20">
                  <div className="text-white/80 mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-white/80 text-sm sm:text-base lg:text-lg font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Nouvelle Génération */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        {/* Arrière-plan Dynamique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-full text-blue-300 text-xs sm:text-sm font-semibold border border-blue-500/30 mb-6 sm:mb-8">
              Prêt à Transformer Votre Vision ?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Élevez Votre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Impact Technologique
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 font-light leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            Collaborez avec notre équipe d'experts pour créer des solutions
            technologiques innovantes qui génèrent des résultats concrets et
            accélèrent votre transformation digitale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Démarrer Votre Projet{" "}
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full hover:scale-110 transition-all duration-300 backdrop-blur-xl"
            >
              <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" /> Planifier
              une Consultation
            </Button>
          </div>

          {/* Indicateurs de Confiance */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 opacity-60">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                ISO 27001
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Sécurité Certifiée
              </p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                RGPD
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Conforme</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                24/7
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Support</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                99.9%
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Disponibilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de Page Ultra-Moderne */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-gray-700/50 relative overflow-hidden">
        {/* Éléments d'Arrière-plan */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="absolute bottom-0 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Informations Entreprise Améliorées */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6 sm:mb-8 group">
                <div className="text-blue-400 text-2xl sm:text-3xl lg:text-4xl font-black mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">
                  ilmi
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                  <div>consulting & services</div>
                  <div className="text-xs text-gray-500">
                    Excellence Technologique depuis 2014
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-md text-base sm:text-lg font-light">
                Transformer les entreprises grâce à l'expertise en développement
                informatique. Nous créons le pont entre l'innovation
                technologique et les résultats business concrets avec précision
                et impact.
              </p>

              {/* Liens Sociaux Améliorés */}
              <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                {[
                  {
                    icon: (
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    ),
                    color: "hover:text-blue-400",
                    bg: "hover:bg-blue-400/10",
                  },
                  {
                    icon: (
                      <Twitter className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    ),
                    color: "hover:text-gray-300",
                    bg: "hover:bg-gray-300/10",
                  },
                  {
                    icon: (
                      <Facebook className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    ),
                    color: "hover:text-blue-500",
                    bg: "hover:bg-blue-500/10",
                  },
                  {
                    icon: (
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    ),
                    color: "hover:text-pink-400",
                    bg: "hover:bg-pink-400/10",
                  },
                  {
                    icon: (
                      <Youtube className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    ),
                    color: "hover:text-red-400",
                    bg: "hover:bg-red-400/10",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`text-gray-400 ${social.color} ${social.bg} p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Informations de Contact */}
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                  <span>contact@ilmi-consulting.fr</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-400" />
                  <span>+33 (0)1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-purple-400" />
                  <span>Bureaux Internationaux Disponibles</span>
                </div>
              </div>
            </div>

            {/* Colonnes de Navigation Améliorées */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 relative">
                Entreprise
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "À Propos",
                  "Notre Équipe",
                  "Carrières",
                  "Actualités",
                  "Contact",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 relative">
                Services
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Développement Web",
                  "Applications Mobiles",
                  "Solutions Cloud",
                  "Intelligence Artificielle",
                  "Logiciels Sur Mesure",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bas de Pied de Page Amélioré */}
          <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-6 lg:mb-0 text-center lg:text-left">
                <p className="text-gray-400 text-base sm:text-lg">
                  © 2024 ilmi-consulting & services. Tous droits réservés.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Transformer les entreprises grâce à l'excellence
                  technologique.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-8 text-gray-400 text-sm sm:text-base">
                {[
                  "Politique de Confidentialité",
                  "Conditions d'Utilisation",
                  "Politique des Cookies",
                  "Accessibilité",
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-white transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton Retour en Haut Flottant */}
      <button
        className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 backdrop-blur-xl"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default IlmiWebsite;
