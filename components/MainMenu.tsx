import React, { useState } from 'react';
import { MenuItem, Project } from '../types';
import { RetroButton } from './RetroButton';
import { playSound } from '../utils/audio';
import { Terminal, Database, Code, Globe, User, Shield, Briefcase, GraduationCap, Award } from 'lucide-react';

const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'PERSIB APP', 
    description: 'Redesign to elevate fan engagement. Improved navigation & interaction through user research. (Jun - Jul 2024)', 
    tech: ['UX RESEARCH', 'INTERFACE'] 
  },
  { 
    id: 2, 
    title: 'RUNMATE', 
    description: 'Smarter running experience with adaptive route recommendations. Boosted retention. (Aug 2024)', 
    tech: ['HUMAN-CENTERED', 'MOBILE'] 
  },
  { 
    id: 3, 
    title: 'PT. ASA CAHAYA DHIKARA', 
    description: 'Corporate website building digital presence. Built with PHP, Laravel, Tailwind. (Dec 2024 - Jan 2025)', 
    tech: ['LARAVEL', 'TAILWIND'] 
  },
  { 
    id: 4, 
    title: 'UNPAS ADMISSION', 
    description: 'Simplifying student admission journey. Contributed to >15,000 enrollments. (Feb 2025)', 
    tech: ['UX REDESIGN', 'FLOW'] 
  },
  { 
    id: 5, 
    title: 'UNPAS DIGITAL ECOSYSTEM', 
    description: 'Scalable design system & UI library across 7 faculties for unified identity. (Feb - Apr 2025)', 
    tech: ['DESIGN SYSTEM', 'SCALABLE'] 
  },
  { 
    id: 6, 
    title: 'JATIDIRI LANDING PAGE', 
    description: 'CRO approach for higher conversion. Attracted >1,000 daily visitors. (May - Jun 2025)', 
    tech: ['CRO', 'ANALYTICS'] 
  },
  { 
    id: 7, 
    title: 'MGBKI PLATFORM', 
    description: 'Professional platform for counselors. Focus on accessibility and clarity. (May 2025)', 
    tech: ['ACCESSIBILITY', 'WEB'] 
  },
  { 
    id: 8, 
    title: 'JATIDIRI APP', 
    description: 'Mental health platform. Empathic onboarding & supportive interface. 6,000+ users. (Jul - Oct 2025)', 
    tech: ['END-TO-END', 'MENTAL HEALTH'] 
  },
  { 
    id: 9, 
    title: 'UBTH ADMISSION', 
    description: 'Seamless admission flow using Design Thinking. Modern & efficient. (Sep 2025)', 
    tech: ['DESIGN THINKING', 'PROTOTYPE'] 
  },
  { 
    id: 10, 
    title: 'UBTH INFO ARCHITECTURE', 
    description: 'Rebuilding IA for better navigation via UX audits & card sorting. (Sep - Oct 2025)', 
    tech: ['IA', 'CARD SORTING'] 
  },
];

export const MainMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuItem>(MenuItem.ABOUT);

  const handleMenuSelect = (item: MenuItem) => {
    playSound('select');
    setActiveTab(item);
  };

  const renderContent = () => {
    switch(activeTab) {
        case MenuItem.ABOUT:
            return (
                <div className="h-full p-4 md:p-8 flex flex-col gap-6 animate-[fadeIn_0.3s_steps(5)] overflow-y-auto custom-scroll">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#00ff41] pb-6">
                        <div className="w-24 h-24 border-2 border-[#00ff41] bg-[#001100] flex items-center justify-center shrink-0 shadow-[4px_4px_0_#003300]">
                            <User size={40} />
                        </div>
                        <div className="space-y-2 font-mono">
                            <h2 className="text-xl md:text-2xl font-bold text-shadow"> ALIF NOOR RACHMAN</h2>
                            <p className="text-sm opacity-80">UI/UX DESIGNER</p>
                            <p className="text-xs opacity-60">BANDUNG, INDONESIA</p>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-[#001100] p-4 border-l-2 border-[#00ff41]">
                        <p className="text-xs md:text-sm leading-relaxed font-mono opacity-90">
                            "Specializing in creating digital solutions for education and mental health. Proven track record of increasing user engagement by 200% and supporting over 15,000 new student enrollments through user-centered design optimization."
                        </p>
                    </div>

                    {/* Experience */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-[#00ff41]">
                            <Briefcase size={16} />
                            <h3 className="font-bold border-b border-[#00ff41] w-full">EXPERIENCE</h3>
                        </div>
                        <div className="space-y-6 text-xs md:text-sm font-mono pl-2">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold">PT HEXAGON KARYATAMA INDONESIA</span>
                                    <span className="opacity-60">FEB 2025 - CURRENT</span>
                                </div>
                                <p className="opacity-80 mb-2"> UI/UX Designer</p>
                                <div className="opacity-60 text-[10px] space-y-2 leading-relaxed">
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Led and executed end-to-end design projects for multiple clients — from initial brief and user research to high fidelity prototyping and developer handoff — ensuring seamless alignment between business goals and user needs.</li>
                                        <li>Designed user flows, wireframes, and interactive high-fidelity prototypes for both web and mobile platforms, focusing on usability, accessibility, and measurable business outcomes.</li>
                                        <li>Spearheaded redesign initiatives for educational (Universitas Pasundan, Universitas Bakti Tunas Husada) and mental health platforms (Jatidiri App), driving significant growth in user acquisition and engagement rates.</li>
                                        <li>Collaborated closely with developers and key stakeholders to translate complex requirements into intuitive user experiences, ensuring visual consistency and technical feasibility throughout implementation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                         <div className="flex items-center gap-2 mb-4 text-[#00ff41]">
                            <GraduationCap size={16} />
                            <h3 className="font-bold border-b border-[#00ff41] w-full">EDUCATION</h3>
                        </div>
                        <div className="space-y-4 text-xs md:text-sm font-mono pl-2">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold">UNIVERSITAS PERJUANGAN TASIKMALAYA</span>
                                    <span className="opacity-60">2020 - 2024</span>
                                </div>
                                <p className="opacity-80">Informatics Engineering | GPA: 3.72/4.0</p>
                                </div>
                        </div>
                    </div>

                     {/* Certs */}
                     <div>
                         <div className="flex items-center gap-2 mb-4 text-[#00ff41]">
                            <Award size={16} />
                            <h3 className="font-bold border-b border-[#00ff41] w-full">CERTIFICATIONS</h3>
                        </div>
                        <ul className="space-y-2 text-[10px] md:text-xs font-mono pl-2 opacity-80 list-disc list-inside">
                            <li>DP-900 Azure Data Fundamentals (Microsoft)</li>
                            <li>AI-900 Azure AI Fundamentals (Microsoft)</li>
                            <li>Certified Internship & Independent Study (Kemendikbud)</li>
                            <li>Power BI Data Analyst (Digital Talent Scholarship)</li>
                            <li>UI/UX Research & Design (Myskill)</li>
                        </ul>
                    </div>

                </div>
            );
        case MenuItem.SKILLS:
            const skillSet = [
                "UI/UX DESIGN", "FIGMA", "PROTOTYPING", "MIRO", "FRAMER", 
                "USER RESEARCH", "DESIGN SYSTEM", "HTML / CSS", "TAILWIND CSS", 
                "POWER BI", "WORDPRESS", "PHOTOSHOP"
            ];
            return (
                <div className="h-full p-4 md:p-10 animate-[fadeIn_0.3s_steps(5)] overflow-y-auto custom-scroll">
                     <div className="border-b border-[#00ff41] pb-2 mb-6">
                        <h2 className="text-xl md:text-2xl font-bold"> SKILL_MATRIX</h2>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skillSet.map((s, i) => (
                             <div key={i} className="border border-[#00ff41] p-4 text-center hover:bg-[#00ff41] hover:text-black transition-colors cursor-default group relative overflow-hidden flex items-center justify-center min-h-[80px]">
                                <span className="text-xs md:text-sm font-bold relative z-10">{s}</span>
                             </div>
                        ))}
                    </div>
                </div>
            );
        case MenuItem.PROJECTS:
            return (
                 <div className="h-full p-4 md:p-8 flex flex-col animate-[fadeIn_0.3s_steps(5)]">
                    <div className="border-b border-[#00ff41] pb-2 mb-4">
                        <h2 className="text-xl md:text-2xl font-bold"> PROJECT_ARCHIVE ({PROJECTS.length})</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-2 custom-scroll pb-4">
                        {PROJECTS.map(p => (
                            <div key={p.id} className="border border-[#00ff41] p-4 hover:bg-[#00ff41] hover:text-black group cursor-pointer transition-colors relative">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-sm md:text-base group-hover:text-black">{p.title}</h3>
                                    <Globe size={14} />
                                </div>
                                <p className="text-xs mt-2 opacity-80 group-hover:text-black group-hover:opacity-100 font-mono leading-relaxed">
                                    {p.description}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-[9px] border border-current px-2 py-0.5 group-hover:border-black uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-1 h-1 bg-[#00ff41] opacity-50"></div>
                                <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#00ff41] opacity-50"></div>
                            </div>
                        ))}
                    </div>
                 </div>
            );
        case MenuItem.CONTACT:
            return (
                <div className="h-full flex items-center justify-center p-4 animate-[fadeIn_0.3s_steps(5)]">
                    <div className="w-full max-w-lg border-2 border-[#00ff41] p-6 md:p-8 bg-[#001100] text-center shadow-[8px_8px_0_#003300]">
                        <h2 className="text-xl mb-8 font-bold"> ESTABLISH_COMM</h2>
                        
                        <div className="space-y-4 font-mono text-sm">
                             <a href="mailto:alifnoorrachman@gmail.com" className="block w-full py-4 border border-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors font-bold flex items-center justify-center gap-2 group">
                                alifnoorrachman@gmail.com
                            </a>
                            
                            <a href="https://wa.me/6285716348398" className="block w-full py-4 border border-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors font-bold flex items-center justify-center gap-2">
                                +62 857 1634 8398
                            </a>

                            <a href="https://www.behance.net/alifnrchmn" target="_blank" rel="noreferrer" className="block w-full py-4 border border-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors font-bold flex items-center justify-center gap-2">
                                BEHANCE PROFILE
                            </a>
                        </div>
                        
                        <div className="mt-8 text-xs opacity-50">
                            LOC: BANDUNG, INDONESIA
                        </div>
                    </div>
                </div>
            );
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      
      {/* Content Area (Top) */}
      <div className="flex-1 overflow-hidden relative bg-[radial-gradient(#001100_1px,transparent_1px)] bg-[length:16px_16px]">
        {renderContent()}
      </div>

      {/* Navigation Dock (Bottom) */}
      <div className="h-20 md:h-24 border-t-2 border-[#00ff41] bg-black flex items-stretch shrink-0">
          <RetroButton 
            className="flex-1 border-r border-[#003300]" 
            onClick={() => handleMenuSelect(MenuItem.ABOUT)} 
            active={activeTab === MenuItem.ABOUT}
            label="PROFILE"
          />
          <RetroButton 
            className="flex-1 border-r border-[#003300]" 
            onClick={() => handleMenuSelect(MenuItem.SKILLS)} 
            active={activeTab === MenuItem.SKILLS}
            label="SKILLS"
          />
          <RetroButton 
            className="flex-1 border-r border-[#003300]" 
            onClick={() => handleMenuSelect(MenuItem.PROJECTS)} 
            active={activeTab === MenuItem.PROJECTS}
            label="PROJECTS"
          />
          <RetroButton 
            className="flex-1" 
            onClick={() => handleMenuSelect(MenuItem.CONTACT)} 
            active={activeTab === MenuItem.CONTACT}
            label="CONTACT"
          />
      </div>

    </div>
  );
};