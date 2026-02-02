import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Cloud, 
  Server, 
  Network, 
  Calculator, 
  Users, 
  HeartHandshake,
  Calendar
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  date?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Enterprise Web Compute Service',
    subtitle: 'Infrastructure Project',
    description: 'Developed and deployed scalable web compute service for enterprise-level scenarios, ensuring high availability and performance optimization.',
    icon: Cloud,
    color: 'cyan',
  },
  {
    title: 'Huawei Ecosystem Setup',
    subtitle: 'System Deployment',
    description: 'Deployed Linux-based systems within Huawei infrastructure, configuring enterprise-grade solutions and maintaining system integrity.',
    icon: Server,
    color: 'teal',
  },
  {
    title: 'University Network Architecture',
    subtitle: 'Cisco Packet Tracer Project | 6th Semester',
    description: 'Designed and implemented complete university network infrastructure including WAN and WLAN connections, demonstrating advanced networking concepts and security protocols.',
    icon: Network,
    color: 'blue',
    date: '6th Semester',
  },
  {
    title: 'Calculator Application',
    subtitle: 'Software Development Project | 1st Semester 2021',
    description: 'Built functional calculator application using Visual Studio Code, implementing core programming logic and user interface design principles.',
    icon: Calculator,
    color: 'green',
    date: '1st Semester 2021',
  },
  {
    title: 'Receptionist & Admin Coordinator',
    subtitle: 'Laser Pain Clinic | 2022 - 2024',
    description: 'Managed patient relations, scheduling, and financial record maintenance. Developed strong customer service skills while handling administrative duties and payment processing systems.',
    icon: Users,
    color: 'purple',
    date: '2022 - 2024',
  },
  {
    title: 'Volunteer Financial Coordinator',
    subtitle: 'Free Street Children School (Nonprofit)',
    description: 'Managed financial operations and donation tracking for educational nonprofit initiative, ensuring transparency in fund allocation.',
    icon: HeartHandshake,
    color: 'orange',
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
};

export function Experience() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="experience"
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
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of my professional experience, academic projects, and volunteer work 
            that showcase my diverse skill set.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-teal-500/50 to-transparent hidden sm:block" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.title}
                  className={`relative transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`grid md:grid-cols-2 gap-4 md:gap-8 items-center ${
                    isLeft ? '' : 'md:direction-rtl'
                  }`}>
                    {/* Content */}
                    <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <div className={`p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 ${colors.border}`}>
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                            <exp.icon className={colors.text} size={20} />
                          </div>
                          <span className={`text-sm font-medium ${colors.text}`}>
                            {exp.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                        {exp.date && (
                          <div className={`mt-4 flex items-center gap-2 text-xs text-slate-500 ${isLeft ? 'md:justify-end' : ''}`}>
                            <Calendar size={14} />
                            {exp.date}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className={`hidden md:flex items-center justify-center ${isLeft ? 'md:order-2' : ''}`}>
                      <div className={`w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} relative z-10`}>
                        <div className={`absolute inset-0 rounded-full ${colors.bg} animate-ping opacity-50`} />
                      </div>
                    </div>

                    {/* Empty Space for Alternating Layout */}
                    <div className={`hidden md:block ${isLeft ? 'md:order-2' : 'md:order-1'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
