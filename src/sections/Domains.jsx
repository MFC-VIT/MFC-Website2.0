import React from 'react';
import '../styles/Domains.css';
import technicalIcon from '../assets/images/tech_1.png';
import designIcon from '../assets/images/Group.png';
import managementIcon from '../assets/images/mang.png';

const DOMAIN_DATA = [
  {
    key: 'technical',
    title: 'Technical',
    icon: technicalIcon,
    subs: ['AI/ML', 'Backend', 'Frontend', 'Fullstack', 'Competitive Programming'],
  },
  {
    key: 'design',
    title: 'Design',
    icon: designIcon,
    subs: ['UI/UX', 'Graphic Design', 'Video Editing'],
  },
  {
    key: 'management',
    title: 'Management',
    icon: managementIcon,
    subs: ['Editorial', 'Publicity', 'Outreach', 'PR', 'Finance'],
  },
];

export default function Domains() {
  return (
    <div id="domains">
      <section className="domains-section">
        <p className="font-apex text-4xl sm:text-5xl md:text-6xl tracking-wider text-main uppercase">
            Our Domains
        </p>
        <div className="w-[25vw] aspect-square bg-primary blur-[300px] opacity-30 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10] animate-pulse"></div>
        <div className="h-1 w-24 bg-primary mt-3 mx-auto rounded-full"></div>
        <div className="domains-container">
          <div className="domains-grid pt-10"> 
            {DOMAIN_DATA.map((domain, index) => (
              <div className="domain-card font-apex" key={domain.key}>
                <div className="domain-icon w-[320px] h-[192px] flex items-center justify-center">
                  <img src={domain.icon} alt="" className="object-contain max-w-full max-h-full" />
                </div>
                <div className="domain-label font-apex text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase">{domain.title}</div>
                <div className="list-container">
                  <ul className="subdomain-list">
                    {domain.subs.map((sub, subIndex) => (
                      <li key={sub}>
                        <span className="bullet">›</span>
                        <span className="subtext">{sub}</span>
                        {subIndex < domain.subs.length - 1 && (
                          <div className="sub-divider"></div>
                        )}
                      </li>
                    ))}
                  </ul>
                  {index < DOMAIN_DATA.length - 1 && (
                    <div className="vertical-divider"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}