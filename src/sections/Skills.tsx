import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import { 
  Code2, 
  Cloud, 
  Network, 
  Wrench, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  status: 'Advanced' | 'Proficient' | 'Intermediate' | 'Certified';
}

const skills: Skill[] = [
  { name: 'Python', level: 70, category: 'Programming', status: 'Intermediate' },
  { name: 'HTML/CSS/PHP', level: 85, category: 'Web Development', status: 'Proficient' },
  { name: 'Huawei Cloud', level: 90, category: 'Cloud', status: 'Certified' },
  { name: 'Cisco Networking', level: 75, category: 'Networking', status: 'Intermediate' },
  { name: 'VS Code & Dev Tools', level: 70, category: 'Tools', status: 'Intermediate' },
  { name: 'MS Office Suite', level: 90, category: 'Productivity', status: 'Advanced' },
];

const statusColors = {
  Advanced: 'text-green-400 bg-green-500/10 border-green-500/30',
  Proficient: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Intermediate: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  Certified: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
};

const categoryIcons: Record<string, React.ElementType> = {
  Programming: Code2,
  'Web Development': Code2,
  Cloud: Cloud,
  Networking: Network,
  Tools: Wrench,
  Productivity: FileText,
};

function SkillBar({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  const Icon = categoryIcons[skill.category] || Code2;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
            <Icon className="text-slate-400" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-white">{skill.name}</h4>
            <span className="text-xs text-slate-500">{skill.category}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[skill.status]}`}>
          {skill.status}
        </span>
      </div>
      <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-accent transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500">
        <span>Beginner</span>
        <span className="text-cyan-400 font-medium">{skill.level}%</span>
        <span>Expert</span>
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="skills"
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
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities, from cloud infrastructure 
            to software development and networking.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div
            className={`space-y-8 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Code2 className="text-cyan-400" size={24} />
                Development & Programming
              </h3>
              <div className="space-y-8">
                {skills.slice(0, 2).map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={200 + index * 150}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Wrench className="text-teal-400" size={24} />
                Tools & Productivity
              </h3>
              <div className="space-y-8">
                {skills.slice(4, 6).map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={500 + index * 150}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`space-y-8 transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Cloud className="text-cyan-400" size={24} />
                Cloud & Infrastructure
              </h3>
              <div className="space-y-8">
                <SkillBar
                  skill={skills[2]}
                  isVisible={isVisible}
                  delay={350}
                />
              </div>
              <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-cyan-400">Huawei Cloud Developer Certified</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Certificate No: HWENDCTEDA145391
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Network className="text-teal-400" size={24} />
                Networking
              </h3>
              <div className="space-y-8">
                <SkillBar
                  skill={skills[3]}
                  isVisible={isVisible}
                  delay={650}
                />
              </div>
              <div className="mt-6 p-4 rounded-xl bg-teal-500/5 border border-teal-500/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-400 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-teal-400">Cisco Packet Tracer</span> - 
                      University network architecture project completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
