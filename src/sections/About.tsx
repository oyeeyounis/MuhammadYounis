import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Cloud, Network, Code, Users } from 'lucide-react';

const highlights = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Huawei Cloud certified with enterprise deployment experience',
    color: 'cyan' as const,
  },
  {
    icon: Network,
    title: 'Network Administration',
    description: 'Cisco networking with hands-on project experience',
    color: 'teal' as const,
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Full-stack development with modern technologies',
    color: 'blue' as const,
  },
  {
    icon: Users,
    title: 'Customer Relations',
    description: 'Strong communication and administrative skills',
    color: 'green' as const,
  },
];

const colorClasses = {
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'hover:border-cyan-500/30',
  },
  teal: {
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    border: 'hover:border-teal-500/30',
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'hover:border-blue-500/30',
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'hover:border-green-500/30',
  },
};

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="text-gradient">Summary</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Text Content */}
          <div
            className={`transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Dedicated IT professional with hands-on experience in cloud infrastructure, 
                network administration, and software development. Certified Huawei Cloud 
                Developer with practical expertise in deploying enterprise-level solutions 
                and Linux-based systems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I bring a strong foundation in both technical implementation and customer-facing 
                roles, combining technical proficiency with excellent communication skills. My 
                passion lies in leveraging technology to solve complex business problems and 
                continuously expanding my knowledge in emerging cloud technologies.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With experience ranging from enterprise cloud deployments to network architecture 
                design, I am committed to delivering high-quality solutions that drive business value 
                and operational efficiency.
              </p>
            </div>
          </div>

          {/* Right - Key Stats */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition-colors">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-teal-500/30 transition-colors">
              <div className="text-3xl font-bold text-teal-400 mb-2">6+</div>
              <div className="text-slate-400 text-sm">Projects Completed</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-slate-400 text-sm">Certifications</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-green-500/30 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">3.4</div>
              <div className="text-slate-400 text-sm">CGPA</div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const colors = colorClasses[item.color];
            return (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-slate-800 border border-slate-700 ${colors.border} hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <item.icon className={colors.text} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
