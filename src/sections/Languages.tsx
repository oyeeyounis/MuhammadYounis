import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, CheckCircle2 } from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const languages: Language[] = [
  { name: 'English', level: 'Professional', proficiency: 90 },
  { name: 'Urdu', level: 'Native', proficiency: 100 },
  { name: 'Saraiki', level: 'Native', proficiency: 100 },
  { name: 'Punjabi', level: 'Fluent', proficiency: 85 },
  { name: 'Arabic', level: 'Reading', proficiency: 60 },
];

export function Languages() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 bg-slate-850"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Globe className="text-cyan-400" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Languages</h3>
          </div>

          {/* Language Pills */}
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="text-cyan-400" size={18} />
                <div>
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-slate-500 text-sm ml-2">({lang.level})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
