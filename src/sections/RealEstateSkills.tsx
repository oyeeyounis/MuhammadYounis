import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Handshake,
  Users,
  Building2,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: 'cyan' | 'teal' | 'blue';
  points: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Dubai Real Estate Sales & Negotiation',
    icon: Handshake,
    color: 'cyan',
    points: [
      'Property matching',
      'Deal closing',
      'Landlord & tenant liaison',
      "Understanding of the Dubai property market",
    ],
  },
  {
    title: 'Client Relationship Management',
    icon: Users,
    color: 'teal',
    points: [
      'Relationship building',
      'Client retention',
      'Professional communication',
      'Exceptional service delivery',
      'Matching client requirements with suitable properties',
    ],
  },
  {
    title: 'Property Portals & Listing Management',
    icon: Building2,
    color: 'blue',
    points: [
      'Listing sourcing',
      'Listing verification',
      'Listing management',
      'Property availability & inventory coordination',
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; hoverBorder: string }> = {
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', hoverBorder: 'hover:border-cyan-500/30' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', hoverBorder: 'hover:border-teal-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', hoverBorder: 'hover:border-blue-500/30' },
};

const portals = [
  { name: 'Bayut', status: 'Advanced' },
  { name: 'Property Finder', status: 'Advanced' },
];

const dubaiAreas = ['JVC', 'JLT', 'Business Bay'];

export function RealEstateSkills() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="real-estate-skills"
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
            Dubai Real Estate | Sales | Client Relations | Property Portals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Core capabilities built through hands-on work in Dubai's real estate market,
            covering sales, client relations, and property portal management.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            const isPortalsCard = category.title === 'Property Portals & Listing Management';

            return (
              <div
                key={category.title}
                className={`p-6 sm:p-8 rounded-2xl bg-slate-800 border border-slate-700 ${colors.hoverBorder} hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <category.icon className={colors.text} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category.title}
                </h3>

                {isPortalsCard && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portals.map((portal) => (
                      <span
                        key={portal.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border text-green-400 bg-green-500/10 border-green-500/30"
                      >
                        {portal.name}
                        <span className="text-slate-400">· {portal.status}</span>
                      </span>
                    ))}
                  </div>
                )}

                <ul className="space-y-2.5">
                  {category.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <CheckCircle2 className={`${colors.text} mt-0.5 shrink-0`} size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Dubai Market Experience */}
        <div
          className={`p-5 sm:p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 transition-all duration-600 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                <MapPin className="text-cyan-400" size={20} />
              </div>
              <p className="text-sm sm:text-[15px] text-slate-300">
                Practical experience across Dubai's real estate market, with a strong focus on{' '}
                <span className="text-cyan-400 font-medium">JVC</span>,{' '}
                <span className="text-cyan-400 font-medium">JLT</span> and{' '}
                <span className="text-cyan-400 font-medium">Business Bay</span>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 sm:ml-[52px]">
            {dubaiAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full text-xs font-medium border text-slate-300 bg-slate-800 border-slate-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
