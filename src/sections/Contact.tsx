import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'younisameen1@gmail.com',
    href: 'mailto:younisameen1@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 318 6493019',
    href: 'tel:+923186493019',
    secondary: '+92 307 8116816',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/younis-amin',
    href: 'https://linkedin.com/in/younis-amin',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/oyeeyounis',
    href: 'https://github.com/oyeeyounis',
    external: true,
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having 
            a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-slate-400 mb-8">
              Feel free to reach out through any of these channels. I'll get back to you 
              as soon as possible.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="text-cyan-400" size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                    {item.secondary && (
                      <p className="text-sm text-slate-400">{item.secondary}</p>
                    )}
                  </div>
                  {item.external && (
                    <ExternalLink className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={18} />
                  )}
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <MapPin size={18} className="text-cyan-400" />
              <span>Multan, Punjab, Pakistan</span>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-accent text-slate-900 font-semibold hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitted ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
