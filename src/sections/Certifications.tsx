import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, CheckCircle2, Clock, Cloud, Video, Briefcase } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificateNo?: string;
  status: 'completed' | 'ongoing';
  description: string;
  icon: React.ElementType;
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    title: 'Huawei Cloud Developer Certification',
    issuer: 'Corvit System Multan',
    date: 'Nov 2025 - Nov 2028',
    certificateNo: 'HWENDCTEDA145391',
    status: 'completed',
    description: 'Professional certification in Huawei Cloud development, covering enterprise cloud solutions, deployment strategies, and infrastructure management.',
    icon: Cloud,
    featured: true,
  },
  {
    title: 'Freelancing',
    issuer: 'DigiSkills.pk (DSTP 2.0 Batch 03)',
    date: 'Nov 2022 - Jan 2023',
    certificateNo: 'Y7KVCDVMK',
    status: 'completed',
    description: 'Comprehensive training in freelancing skills, client management, and building a successful freelance career.',
    icon: Briefcase,
  },
  {
    title: 'Video Editing, Animation & Vlogging',
    issuer: 'DigiSkills.pk',
    date: 'Ongoing (Expected Mar 2026)',
    status: 'ongoing',
    description: 'Training in video production, animation techniques, and content creation for digital platforms.',
    icon: Video,
  },
];

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="certifications"
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
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to 
            continuous learning in the IT field.
          </p>
        </div>

        {/* Featured Certification */}
        {certifications.filter(c => c.featured).map((cert) => (
          <div
            key={cert.title}
            className={`mb-8 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow-lg">
                  <cert.icon className="text-slate-900" size={40} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                      <CheckCircle2 size={12} />
                      Verified
                    </span>
                    <span className="text-slate-400 text-sm">{cert.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-slate-400 max-w-2xl">{cert.description}</p>
                  {cert.certificateNo && (
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700">
                      <Award size={16} className="text-cyan-400" />
                      <span className="text-sm text-slate-300">Certificate No: </span>
                      <span className="text-sm font-mono text-cyan-400">{cert.certificateNo}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.filter(c => !c.featured).map((cert, index) => (
            <div
              key={cert.title}
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                    <cert.icon className="text-cyan-400" size={24} />
                  </div>
                  {cert.status === 'ongoing' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium">
                      <Clock size={12} />
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
                <p className="text-slate-500 text-sm mb-4">{cert.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-xs text-slate-500">{cert.date}</span>
                  {cert.certificateNo && (
                    <span className="text-xs font-mono text-slate-400">
                      ID: {cert.certificateNo}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
