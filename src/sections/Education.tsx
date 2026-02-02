import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  grade: string;
  highlight?: boolean;
}

const education: EducationItem[] = [
  {
    degree: 'BS Information Technology',
    institution: 'NCBA&E Sub Campus Multan',
    period: '2023 - 2025',
    details: 'Focus on software development, networking, and cloud computing technologies.',
    grade: 'CGPA: 3.4/4.0',
    highlight: true,
  },
  {
    degree: 'ADP (IT)',
    institution: 'NCBA&E Sub Campus Multan',
    period: '2021 - 2023',
    details: 'Associate Degree Program in Information Technology with foundational computing and programming coursework.',
    grade: 'CGPA: 3.1/4.0',
  },
  {
    degree: 'FCS (Pre-Medical)',
    institution: 'Emerson University Multan',
    period: '2019 - 2021',
    details: 'Foundation in sciences and analytical thinking.',
    grade: 'Grade: C',
  },
  {
    degree: 'Matriculation',
    institution: 'Government Muslim High School Multan',
    period: '2017 - 2018',
    details: 'Secondary school certificate with distinction.',
    grade: 'Grade: A',
    highlight: true,
  },
];

export function Education() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-850"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A strong academic foundation in Information Technology, with consistent performance 
            and focus on practical skills development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className={`group relative transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`p-6 sm:p-8 rounded-2xl bg-slate-800 border transition-all duration-300 hover:-translate-y-1 h-full ${
                item.highlight 
                  ? 'border-cyan-500/30 hover:border-cyan-500/50' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {/* Highlight Badge */}
                {item.highlight && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                      <Award size={12} />
                      Highlight
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  item.highlight ? 'bg-cyan-500/10' : 'bg-slate-700/50'
                }`}>
                  <GraduationCap className={item.highlight ? 'text-cyan-400' : 'text-slate-400'} size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <MapPin size={14} />
                    {item.institution}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.details}
                </p>

                {/* Grade */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                  item.highlight 
                    ? 'bg-cyan-500/10 text-cyan-400' 
                    : 'bg-slate-700/50 text-slate-300'
                }`}>
                  <Award size={16} />
                  <span className="font-medium">{item.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
