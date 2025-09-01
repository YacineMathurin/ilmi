"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, ChevronLeft, ChevronRight, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight, Mail, Phone, MapPin, Play, Award, Users, TrendingUp, Zap, BookOpen, BarChart3, Microscope, Globe, Shield, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ILMWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      title: "Powered by Experts. Driven by Data. Focused on Patient Impact",
      subtitle: "Our multidisciplinary teams — physicians, pharmacists, and scientists — create clear, compliant, and compelling messages that drive understanding and engagement",
      buttonText: "Meet Our Team",
      image: "https://images.unsplash.com/photo-1716436330152-a58390897652?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Showcasing Real-World Impact Through Science and Strategy",
      subtitle: "From peer-reviewed publications and global congress posters to impactful case studies — discover how our work is driving visibility, credibility, and clinical advancement",
      buttonText: "Explore Our Work",
      image: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Translating Science into Impact for Healthcare Professionals and Patients",
      subtitle: "At ILM, we bring science, strategy, and communication excellence together to support healthcare leaders in making informed, impactful decisions",
      buttonText: "Discover Our Story",
      image: "https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-8xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 sm:space-x-6 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-gray-800 transition-all duration-300 hover:scale-110">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-blue-700 transition-all duration-300 hover:scale-110">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-pink-600 transition-all duration-300 hover:scale-110">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-110">
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="hidden md:flex space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all hover:after:w-full">Join Our Team</a>
            <a href="#" className="hover:text-blue-600 transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all hover:after:w-full">Request A Quote</a>
            <a href="#" className="hover:text-blue-600 transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all hover:after:w-full">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Glassmorphism Header */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-b border-white/10">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Animated Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center group">
                <div className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold mr-2 group-hover:scale-105 transition-transform duration-300">Ilmi</div>
                <div className="text-xs sm:text-xs lg:text-xs text-gray-700 leading-tight opacity-80 hidden sm:block relative top-2">
                  <h5>Consulting Services</h5>
                </div>
              </div>
            </div>

            {/* Desktop Navigation with Hover Effects */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {['About Us'].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-gray-700 font-medium transition-all duration-300 group-hover:scale-105">
                    {item} <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 border border-gray-100">
                    <div className="p-4 space-y-2">
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">Our Story</a>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">Leadership Team</a>
                      <a href="#" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">Mission & Values</a>
                    </div>
                  </div>
                </div>
              ))}
              <a href="#" className="text-gray-700 hover:text-white font-medium transition-all duration-300 hover:scale-105">Careers</a>
              <a href="#" className="text-gray-700 hover:text-white font-medium transition-all duration-300 hover:scale-105">Contact Us</a>
              {/* <button className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300">
                <Search className="w-5 h-5" />
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 hover:scale-110 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-xl rounded-b-3xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['About Us', 'What We Do', 'Our Work', 'Careers', 'Contact Us'].map((item, index) => (
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

      {/* Enhanced Hero with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms]"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.7) 40%, transparent 70%),url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `translateY(${scrollY * 0.3}px)`
                }}
              />
              {/* Enhanced Content */}
              <div className="relative z-100 h-full flex items-center pt-24 sm:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-5xl mx-auto">
                    <div className="mb-6 sm:mb-8 opacity-0 animate-[fadeInUp_1s_0.5s_forwards]">
                      <span className="inline-block px-4 sm:px-6 py-2 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/30">
                        Software Consulting Excellence
                      </span>
                    </div>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight animate-[fadeInUp_1s_0.7s_forwards]">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-1 sm:mr-2 lg:mr-3 hover:text-blue-200 transition-colors duration-300">
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
                        {slide.buttonText} <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Slide Indicators */}
        < div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20" >
          {
            heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${index === currentSlide ? 'bg-white w-8 sm:w-12' : 'bg-white/50 w-4 sm:w-6 hover:bg-white/80'
                  }`}
              />
            ))
          }
        </div>
      </section>

      {/* Modern About Section with Bento Box Layout */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(59,130,246,0.05)_0%,_transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,_rgba(147,51,234,0.05)_0%,_transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Content Card */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 group">
                <div className="w-16 sm:w-20 h-1 sm:h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6 sm:mb-8 group-hover:w-24 sm:group-hover:w-32 transition-all duration-500"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 mb-6 sm:mb-8 leading-tight">
                  Translating Science into Impact
                </h2>
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light">
                  At ILM, we bring science, strategy, and communication excellence together to support
                  healthcare leaders in making informed, impactful decisions. Our team of physicians,
                  pharmacists, and scientists creates clear, evidence-based communications that foster
                  understanding, inspire trust, and elevate patient care.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                  {['Evidence-Based', 'Expert Team', 'Global Reach', 'Patient-Focused'].map((tag, i) => (
                    <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center group-hover:scale-105 transition-all duration-300 shadow-xl">
                  Discover Our Story <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>

            {/* Side Cards */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 opacity-60" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</h3>
                <p className="text-blue-100 text-base sm:text-lg">Scientific Publications</p>
              </div>

              {/* Team Card */}
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600" />
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">100+</h3>
                <p className="text-gray-600 text-base sm:text-lg">Expert Professionals</p>
              </div>

              {/* Experience Card */}
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 opacity-60" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">15+</h3>
                <p className="text-green-100 text-base sm:text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 sm:mb-8">
              Our Core Capabilities
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
              Multidisciplinary services designed to communicate science with clarity, impact, and precision
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Strategic Communications",
                description: "Evidence-based strategies that ensure your scientific messages reach the right stakeholders through expertly planned communications and KOL engagement.",
                icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "blue",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Data Analytics & Visualization",
                description: "Transform complex datasets into compelling visual stories that drive understanding and inform critical healthcare decisions.",
                icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "green",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "Scientific Publications",
                description: "Expert manuscript development and publication support that elevates your research visibility in top-tier medical journals.",
                icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "purple",
                gradient: "from-purple-500 to-violet-600"
              },
              {
                title: "Medical Writing",
                description: "Clear, compliant, and compelling scientific content that communicates complex research with accuracy and clarity.",
                icon: <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "orange",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Congress & Events",
                description: "Create impactful conference presentations, posters, and materials that maximize your scientific presence at key events.",
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "pink",
                gradient: "from-pink-500 to-rose-600"
              },
              {
                title: "Regulatory Support",
                description: "Precise documentation and strategic guidance that supports successful regulatory submissions and approvals.",
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                color: "indigo",
                gradient: "from-indigo-500 to-purple-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>

                {/* Floating Icon Container */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 transition-all duration-500">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base sm:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 text-${service.color}-600`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(59,130,246,0.3)_0%,_transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(147,51,234,0.3)_0%,_transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(16,185,129,0.2)_0%,_transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Driving Impact Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Healthcare
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light px-4 sm:px-0">
              Our track record of success speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "500+", label: "Scientific Publications", icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" /> },
              { number: "50+", label: "Global Clients", icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" /> },
              { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" /> },
              { number: "100+", label: "Expert Team", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" /> }
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

      {/* Next-Gen CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute top-0 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-full text-blue-300 text-xs sm:text-sm font-semibold border border-blue-500/30 mb-6 sm:mb-8">
              Ready to Transform Your Impact?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Elevate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Scientific Impact
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 font-light leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            Partner with our expert team to create compelling communications that drive real-world results
            and advance patient care through evidence-based excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full hover:scale-110 transition-all duration-300 shadow-2xl">
              Start Your Project <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button size="lg" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 sm:px-12 lg:px-16 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full hover:scale-110 transition-all duration-300 backdrop-blur-xl">
              <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" /> Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 opacity-60">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">ISO 27001</div>
              <p className="text-gray-400 text-xs sm:text-sm">Certified Security</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">GDPR</div>
              <p className="text-gray-400 text-xs sm:text-sm">Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <p className="text-gray-400 text-xs sm:text-sm">Support</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
              <p className="text-gray-400 text-xs sm:text-sm">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-gray-700/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="absolute bottom-0 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6 sm:mb-8 group">
                <div className="text-blue-400 text-2xl sm:text-3xl lg:text-4xl font-black mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">ilm</div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                  <div>ILM Consulting Services</div>
                  <div className="text-xs text-gray-500">Healthcare Excellence Since 2009</div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-md text-base sm:text-lg font-light">
                Transforming healthcare through expert scientific communications.
                We bridge the gap between complex science and meaningful patient outcomes with precision and impact.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                {[
                  { icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/10' },
                  { icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, color: 'hover:text-gray-300', bg: 'hover:bg-gray-300/10' },
                  { icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
                  { icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, color: 'hover:text-pink-400', bg: 'hover:bg-pink-400/10' },
                  { icon: <Youtube className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />, color: 'hover:text-red-400', bg: 'hover:bg-red-400/10' }
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

              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                  <span>contact@ilmconsulting.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-purple-400" />
                  <span>Global Offices Available</span>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Columns */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 relative">
                Company
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {['About Us', 'Our Team', 'Careers', 'News & Insights', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base">
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
                {['Medical Writing', 'Publications', 'Data Analytics', 'Strategic Communications', 'Regulatory Support'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-6 lg:mb-0 text-center lg:text-left">
                <p className="text-gray-400 text-base sm:text-lg">
                  © 2024 ILM Consulting Services. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Empowering healthcare through scientific excellence.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-8 text-gray-400 text-sm sm:text-base">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item, i) => (
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

      {/* Floating Scroll to Top Button */}
      <button
        className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 backdrop-blur-xl"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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

export default ILMWebsite;