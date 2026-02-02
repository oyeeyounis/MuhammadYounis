import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail, ChevronDown, Cloud, Code, Server } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div
              className={`transition-all duration-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Cloud size={16} />
                Huawei Cloud Certified
              </span>
            </div>

            {/* Name */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-600 delay-150 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Hello, I'm{' '}
              <span className="text-gradient">Muhammad Younis</span>
            </h1>

            {/* Title */}
            <p
              className={`text-xl sm:text-2xl text-slate-300 mb-6 transition-all duration-600 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              IT Professional & Cloud Developer
            </p>

            {/* Description */}
            <p
              className={`text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-600 delay-450 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Dedicated IT professional with hands-on experience in cloud infrastructure, 
              network administration, and software development. Passionate about leveraging 
              technology to solve complex business problems.
            </p>

            {/* Tech Stack Tags */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-8 transition-all duration-600 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm">
                <Cloud size={14} className="text-cyan-400" />
                Huawei Cloud
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm">
                <Code size={14} className="text-teal-400" />
                Full Stack
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm">
                <Server size={14} className="text-blue-400" />
                Networking
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-8 transition-all duration-600 delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={handleScrollToAbout}
                className="px-8 py-3 rounded-xl bg-gradient-accent text-slate-900 font-semibold hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-glow"
              >
                View My Work
              </button>
              <button
                onClick={handleScrollToContact}
                className="px-8 py-3 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex justify-center lg:justify-start gap-4 transition-all duration-600 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="https://linkedin.com/in/younis-amin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/oyeeyounis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:younisameen1@gmail.com"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center order-1 lg:order-2 transition-all duration-800 delay-200 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-accent blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-accent animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img
                    src="/profile-photo.jpg"
                    alt="Muhammad Younis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-2 -right-2 px-4 py-2 rounded-xl bg-slate-800 border border-cyan-500/30 shadow-lg">
                <span className="text-cyan-400 font-semibold text-sm">3.4 GPA</span>
              </div>
              <div className="absolute -bottom-2 -left-2 px-4 py-2 rounded-xl bg-slate-800 border border-teal-500/30 shadow-lg">
                <span className="text-teal-400 font-semibold text-sm">Cloud Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollToAbout}
          className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
