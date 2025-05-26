import React from 'react';
import '../styles/Domains.css';
import technicalIcon from '../assets/images/tech.png';
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
        <h2 className="domains-heading">OUR DOMAINS</h2>
        <div className="domains-container">
          <div className="domains-grid">
            {DOMAIN_DATA.map((domain, index) => (
              <div className="domain-card" key={domain.key}>
                <img src={domain.icon} alt="" className="domain-icon" />
                <div className="domain-label">{domain.title}</div>
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