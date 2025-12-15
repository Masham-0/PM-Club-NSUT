'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Menu, X, Linkedin, Instagram, Mail, Calendar, Users, Trophy, Target, ArrowRight, Sparkles, TrendingUp, Lightbulb, Award, Sun, Moon, Star, Zap, Heart, MessageCircle, Send, Check, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    branch: '',
    interests: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { scrollY } = useScroll();
  
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whyJoinRef = useRef(null);
  const footerRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const whatWeDoInView = useInView(whatWeDoRef, { once: true });
  const whyJoinInView = useInView(whyJoinRef, { once: true });
  const footerInView = useInView(footerRef, { once: true });

  const navBackground = useTransform(scrollY, [0, 100], 
    [isDarkMode ? 'rgba(17, 24, 39, 0)' : 'rgba(255, 255, 255, 0)', 
     isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)']);
  const navShadow = useTransform(scrollY, [0, 100], ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']);

  const menuItems = ['Home', 'About', 'Events', 'Contact'];

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowJoinModal(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', year: '', branch: '', interests: [] });
    }, 2000);
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const branchOptions = [
    'BBA', 'BBA-IEV', 'CSAI', 'CSE', 'MAC', 'CSDS', 'IT', 'ITNS', 'CSDA', 'ECE', 'EVDT', 'EE', 'ICE', 'ME', 'Civil'
  ];

  const interestOptions = ['Product Management', 'Data Analytics', 'UI/UX Design', 'Marketing', 'Tech'];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Animated Background Elements - Optimized for mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0], // Reduced movement for mobile
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-20 left-10 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            isDarkMode ? 'bg-blue-900' : 'bg-blue-200'
          }`}
        />
        <motion.div
          animate={{
            x: [0, -50, 0], // Reduced movement for mobile
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-40 right-10 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            isDarkMode ? 'bg-indigo-900' : 'bg-indigo-200'
          }`}
        />
        <motion.div
          animate={{
            x: [0, 25, 0], // Reduced movement for mobile
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            isDarkMode ? 'bg-cyan-900' : 'bg-cyan-200'
          }`}
        />
      </div>

      {/* Decorative Stickers - Completely hidden on mobile to prevent overlap */}
      <div className="hidden lg:block fixed top-32 right-8 z-10 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-4xl"
        >
          ⭐
        </motion.div>
      </div>
      
      <div className="hidden lg:block fixed top-64 left-8 z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl"
        >
          🚀
        </motion.div>
      </div>

      <div className="hidden lg:block fixed bottom-32 right-12 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl"
        >
          💡
        </motion.div>
      </div>

      <div className="hidden lg:block fixed top-96 left-16 z-10 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-2xl"
        >
          ⚡
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        ref={navRef}
        style={{ backgroundColor: navBackground, boxShadow: navShadow }}
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          isDarkMode ? 'border-gray-800' : 'border-gray-100'
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              <div className="relative">
                <img
                  src="https://i.ibb.co/N0HLfgW/Logo-pmclub.png"
                  alt="PM Club NSUT"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>PM Club</h1>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>NSUT</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    if (item === 'Home') scrollToSection(heroRef);
                    else if (item === 'About') scrollToSection(aboutRef);
                    else if (item === 'Events') scrollToSection(whatWeDoRef);
                    else if (item === 'Contact') scrollToSection(footerRef);
                  }}
                  className={`font-medium transition-colors duration-200 relative group text-sm lg:text-base ${
                    isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors md:hidden ${
                  isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors md:hidden ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setIsOpen(false);
                    if (item === 'Home') scrollToSection(heroRef);
                    else if (item === 'About') scrollToSection(aboutRef);
                    else if (item === 'Events') scrollToSection(whatWeDoRef);
                    else if (item === 'Contact') scrollToSection(footerRef);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                    isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section - Fixed mobile layout */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              className="mb-6 sm:mb-8 inline-block"
            >
              <Sparkles className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </motion.div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PM Club NSUT
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Product Management & Analytics Club of NSUT
              <br />
              <span className={`text-sm sm:text-base lg:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We Learn, Teach & Compete Together
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 mb-8 sm:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowJoinModal(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Join the Club</span>
                <ArrowRight size={16} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(aboutRef)}
                className={`px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border text-sm sm:text-base ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' 
                    : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'
                }`}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Section Stickers - Hidden on mobile and tablet to prevent overlap */}
          <div className="hidden xl:block absolute top-20 right-20 text-6xl opacity-20">🎯</div>
          <div className="hidden xl:block absolute bottom-20 left-20 text-5xl opacity-20">🏆</div>
          <div className="hidden xl:block absolute top-40 left-32 text-4xl opacity-20">💼</div>

          {/* Scroll Indicator - Better positioned for mobile */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              isDarkMode ? 'border-gray-600' : 'border-gray-400'
            }`}>
              <div className={`w-1 h-3 rounded-full mt-2 ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
              }`}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={`py-16 sm:py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="text-blue-600">PM Club</span>
            </h2>
            <div className="max-w-3xl mx-auto px-4">
              <p className={`text-base sm:text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We are a vibrant community of aspiring product managers and data enthusiasts at NSUT. 
                Our club is dedicated to fostering innovation, developing product thinking, and building 
                the next generation of product leaders through workshops, competitions, and collaborative projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Mission</h3>
              <p className={`text-center text-sm sm:text-base ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                To empower students with product management skills and create a platform for innovation and learning.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Vision</h3>
              <p className={`text-center text-sm sm:text-base ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                To become the leading product management community that bridges academia and industry.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Our Community</h3>
              <p className={`text-center text-sm sm:text-base ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                A diverse group of passionate learners, innovators, and future product leaders.
              </p>
            </motion.div>
          </motion.div>

          {/* About Section Stickers - Hidden on mobile and tablet */}
          <div className="hidden xl:block absolute top-32 right-32 text-4xl opacity-10">🌟</div>
          <div className="hidden xl:block absolute bottom-32 left-24 text-5xl opacity-10">🎓</div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatWeDoRef} className={`py-16 sm:py-20 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What We <span className="text-blue-600">Do</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-3xl mx-auto px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              From hands-on workshops to competitive events, we offer diverse opportunities to grow and excel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Calendar, title: 'Workshops', description: 'Interactive sessions on product management, design thinking, and analytics', emoji: '📚' },
              { icon: Trophy, title: 'Competitions', description: 'Case studies, hackathons, and product challenges to test your skills', emoji: '🏆' },
              { icon: TrendingUp, title: 'Projects', description: 'Real-world projects to apply product management principles', emoji: '🚀' },
              { icon: Award, title: 'Networking', description: 'Connect with industry professionals and alumni', emoji: '🤝' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center relative"
              >
                <div className="absolute -top-2 -right-2 text-xl sm:text-2xl opacity-20 hidden lg:block">{item.emoji}</div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{item.title}</h3>
                <p className={`text-sm sm:text-base ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What We Do Section Stickers - Hidden on mobile and tablet */}
          <div className="hidden xl:block absolute top-20 right-20 text-6xl opacity-10">💼</div>
          <div className="hidden xl:block absolute bottom-20 left-20 text-5xl opacity-10">📊</div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section ref={whyJoinRef} className={`py-16 sm:py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={whyJoinInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why <span className="text-blue-600">Join Us</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-3xl mx-auto px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Become part of a community that nurtures talent and drives innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={whyJoinInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center relative overflow-hidden"
          >
            <div className="hidden lg:block absolute top-10 right-10 text-6xl opacity-10">🌟</div>
            <div className="hidden lg:block absolute bottom-10 left-10 text-5xl opacity-10">⭐</div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 relative z-10">Ready to Start Your Journey?</h3>
            <p className="text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto relative z-10 px-4">
              Join PM Club NSUT and unlock your potential in product management and analytics.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowJoinModal(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 text-sm sm:text-base"
            >
              Apply Now
            </motion.button>
          </motion.div>

          {/* Why Join Section Stickers - Hidden on mobile and tablet */}
          <div className="hidden xl:block absolute top-32 right-40 text-4xl opacity-20">🎯</div>
          <div className="hidden xl:block absolute bottom-40 left-32 text-5xl opacity-20">💡</div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className={`${isDarkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-8 sm:py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://i.ibb.co/N0HLfgW/Logo-pmclub.png"
                  alt="PM Club NSUT"
                  className="h-8 sm:h-10 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">PM Club NSUT</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Product Management & Analytics</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Building the next generation of product leaders at NSUT.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h4>
              <div className="flex space-x-3 sm:space-x-4 mb-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/company/pmclubnsut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.instagram.com/pmclubnsut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram size={16} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:pmclub@nsut.ac.in"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Mail size={16} />
                </motion.a>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Email: pmclub@nsut.ac.in
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={footerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="border-t border-gray-800 pt-4 sm:pt-8 text-center"
          >
            <p className="text-xs sm:text-sm text-gray-400 mb-2">© 2024 PM Club NSUT. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-gray-500">Made by Mohammad Masham</p>
          </motion.div>
        </div>
      </footer>

      {/* Join Us Modal */}
      <AnimatePresence>
        {showJoinModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowJoinModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-md rounded-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Stickers - Hidden on mobile */}
              <div className="hidden sm:block absolute top-4 right-4 text-2xl opacity-20">🎉</div>
              <div className="hidden sm:block absolute bottom-4 left-4 text-xl opacity-20">🚀</div>
              
              <button
                onClick={() => setShowJoinModal(false)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Join PM Club</h3>
                    <p className={`text-sm sm:text-base ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Start your journey with us today!
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                        placeholder="your.email@nsut.ac.in"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Year *
                        </label>
                        <select
                          required
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                        >
                          <option value="">Select Year</option>
                          <option value="1st">1st Year</option>
                          <option value="2nd">2nd Year</option>
                          <option value="3rd">3rd Year</option>
                          <option value="4th">4th Year</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Branch *
                        </label>
                        <select
                          required
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                        >
                          <option value="">Select Branch</option>
                          {branchOptions.map((branch) => (
                            <option key={branch} value={branch}>{branch}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Interests
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {interestOptions.map((interest) => (
                          <label
                            key={interest}
                            className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-colors text-sm ${
                              formData.interests.includes(interest)
                                ? 'bg-blue-600 text-white border-blue-600'
                                : isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                                : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestToggle(interest)}
                              className="sr-only"
                            />
                            <span>{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <span>Submit Application</span>
                      <Send size={16} />
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-6 sm:py-8"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Application Submitted!</h3>
                  <p className={`text-sm sm:text-base ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Thank you for joining PM Club NSUT. We'll contact you soon!
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}