import { useState } from "react";
import "../styles/Marquee.css";

const Marquee = () => {
  const [selectedYear, setSelectedYear] = useState("2024-25");

  const boardMembersData = {
    "2022-23": [
      {
        name: "Amit Priyadharshi",
        designation: "Chairperson",
        image: "/images/board/22-23/chair.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "#https://www.instagram.com/myth.tiff/",
        },
      },
      {
        name: "Ishaan Rejra",
        designation: "Vice Chairperson",
        image: "/images/board/22-23/vc.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/ishaanrejra/",
        },
      },
      {
        name: "Animesh Verma",
        designation: "General Secretary",
        image: "/images/board/22-23/gensec.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/ianimeshverma/",
        },
      },
      {
        name: "Yash Sinha",
        designation: "Co-Secretary",
        image: "/images/board/22-23/cosec.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/yashsinha_02/",
        },
      },
      {
        name: "Vanshika Nehra",
        designation: "Technical Chair",
        image: "/images/board/22-23/tech.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/nehra.vanshika/",
        },
      },
      {
        name: "Reovwin John",
        designation: "Creative Chair",
        image: "/images/board/22-23/creative.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/_.reoo._/",
        },
      },
      {
        name: "Sayak Mukherjee",
        designation: "Editorial Chair",
        image: "/images/board/22-23/editorial.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/saint_sayak/",
        },
      },
      {
        name: "Aryavardhan Modi",
        designation: "Projects Chair",
        image: "/images/board/22-23/projects.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/__anonymous_aayu__/",
        },
      },
      {
        name: "Yash Raj Mani",
        designation: "Research and Development Chair",
        image: "/images/board/22-23/r&d.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/yashrajmani_/",
        },
      },
      {
        name: "Ann Mary John",
        designation: "Outreach Chair",
        image: "/images/board/22-23/outreach.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/ann_marry_john/",
        },
      },
      {
        name: "Priyanka Kumari",
        designation: "ML Mentor",
        image: "/images/board/22-23/ml.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/it_is_priyankakumari/",
        },
      },
      {
        name: "Kartikey Srivastava",
        designation: "Media Mentor",
        image: "/images/board/22-23/media.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/kartikey25._/",
        },
      },
      {
        name: "Manya Garg",
        designation: "UI UX Mentor",
        image: "/images/board/22-23/ui-ux.webp",
        socialLinks: {
          linkedin: "#",
          github: "#",
          instagram: "https://www.instagram.com/manyaa.12/",
        },
      },
    ],
    "2023-24": [
      {
        name: "Prateek Balaji",
        designation: "Chairperson",
        image: "/images/board/24-25/chair.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/prateek-balaji/",
          github: "#",
          instagram: "https://www.instagram.com/prateek_balaji/",
        },
      },
      {
        name: "Kartikey Bhatnagar",
        designation: "Vice Chairperson",
        image: "/images/board/24-25/vc.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/kartikey-bhatnagar",
          github: "#",
          instagram: "https://www.instagram.com/kartickeyy/",
        },
      },
      {
        name: "Naisa Gupta",
        designation: "General Secretary",
        image: "/images/board/24-25/gensec.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/naisa-gupta-1b020a1b9",
          github: "#",
          instagram: "https://www.instagram.com/nxisagupta/",
        },
      },
      {
        name: "Trisha Paul",
        designation: "Co-Secretary",
        image: "/images/board/24-25/cosec.webp",
        socialLinks: {
          linkedin:
            "https://in.linkedin.com/in/trisha-paul-929964235?trk=people-guest_people_search-card",
          github: "#",
          instagram: "https://www.instagram.com/trishapaul._/",
        },
      },
      {
        name: "Vedik Agarwal",
        designation: "Technical Chair",
        image: "/images/board/24-25/tech.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/vedik-agarwal",
          github: "#",
          instagram: "https://www.instagram.com/vedik_agarwal/",
        },
      },
      {
        name: "Aditya Aren",
        designation: "Project Head",
        image: "/images/board/24-25/project.webp",
        socialLinks: {
          linkedin:
            "https://in.linkedin.com/in/aditya-aren-913893235?trk=public_post_feed-actor-name",
          github: "#",
          instagram: "https://www.instagram.com/aditya_aren/",
        },
      },
      {
        name: "Siddhesh Fuladi",
        designation: "Management Head",
        image: "/images/board/24-25/management.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/siddhesh-fuladi",
          github: "#",
          instagram: "https://www.instagram.com/siddheshfuladi/",
        },
      },
      {
        name: "Ayush Patil",
        designation: "Design Head",
        image: "/images/board/24-25/design.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/ayushp2948/",
          github: "#",
          instagram: "https://www.instagram.com/ayush.patil_17/",
        },
      },
      {
        name: "Vaishali Singh",
        designation: "Events Head",
        image: "/images/board/24-25/events.webp",
        socialLinks: {
          linkedin:
            "https://in.linkedin.com/in/vaishali-singh25?trk=public_profile_browsemap",
          github: "#",
          instagram: "https://www.instagram.com/vaishaaaaliiiii/",
        },
      },
      {
        name: "Stuti Chaudhury",
        designation: "Editorial Head",
        image: "/images/board/24-25/editorial.webp",
        socialLinks: {
          linkedin:
            "https://in.linkedin.com/in/stuti-chaudhury-8419a3235?trk=public_profile_browsemap",
          github: "#",
          instagram: "https://www.instagram.com/radiantstuti/",
        },
      },
      {
        name: "Utkarsh Tyagi",
        designation: "Research and Development Head",
        image: "/images/board/24-25/r&d.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/utkarsh-tyagi-/",
          github: "https://github.com/utkarsh-creator",
          instagram: "https://www.instagram.com/utkarshtyagi07/",
        },
      },
      {
        name: "Nirbhay Tiwari",
        designation: "Publicity Head",
        image: "/images/board/24-25/publicity.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/nirbhay-tiwari-b09817219",
          github: "#",
          instagram: "https://www.instagram.com/_nirbhayt/",
        },
      },
      {
        name: "Hemant Modi",
        designation: "Finance Head",
        image: "/images/board/24-25/finance.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/modih",
          github: "#",
          instagram: "https://www.instagram.com/notthegujratimodi/",
        },
      },
      {
        name: "Soumyadeep Roy Chowdhury",
        designation: "Outreach Head",
        image: "/images/board/24-25/outreach.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/sdroyc",
          github: "#",
          instagram: "https://www.instagram.com/soumyadeep_rc/",
        },
      },
      {
        name: "Aditya Prasad",
        designation: "Creative Head",
        image: "/images/board/24-25/creative.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/adityaprasad1143",
          github: "#",
          instagram: "https://www.instagram.com/adiitya_74/",
        },
      },
      {
        name: "Tanisha Ambastha",
        designation: "HR Head",
        image: "/images/board/24-25/hr.webp",
        socialLinks: {
          linkedin:
            "https://in.linkedin.com/in/tanisha-ambastha-545318237?trk=public_profile_browsemap",
          github: "#",
          instagram: "https://www.instagram.com/tanisha_ambastha/",
        },
      },
      {
        name: "Namah Singhal",
        designation: "UI UX Mentor",
        image: "/images/board/24-25/ui-ux.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/namah-singhal-983446217/",
          github: "https://github.com/NAMAH942",
          instagram: "https://www.instagram.com/nam.ahhh28_/",
        },
      },
      {
        name: "Himakshi Chaturvedi",
        designation: "Media Mentor",
        image: "/images/board/24-25/media.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/himakshi-chaturvedi",
          github: "#",
          instagram: "https://www.instagram.com/himakshiiii_/",
        },
      },
      {
        name: "Ashutosh Prabhudesai",
        designation: "AI ML Mentor",
        image: "/images/board/24-25/ml.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/prabhudesaiashutosh02",
          github: "#",
          instagram: "https://www.instagram.com/ashutosh02_/",
        },
      },
      {
        name: "Sushant Saurav",
        designation: "Web Development Mentor",
        image: "/images/board/24-25/web.webp",
        socialLinks: {
          linkedin: "https://in.linkedin.com/in/sushant-saurav-baa17b220",
          github: "#",
          instagram: "https://www.instagram.com/sushant_g04/",
        },
      },
    ],
    "2024-25": [
      {
        name: "Utkarsh Tyagi",
        designation: "Chairperson",
        image: "/images/board/24-25/chair.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/utkarsh-tyagi-/",
          github: "https://github.com/utkarsh-creator",
          instagram: "https://www.instagram.com/utkarshtyagi07/",
        },
      },
      {
        name: "Namah Singhal",
        designation: "General Secretary",
        image: "/images/board/24-25/gensec.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/namah-singhal-983446217/",
          github: "https://github.com/NAMAH942",
          instagram: "https://www.instagram.com/nam.ahhh28_/",
        },
      },
      {
        name: "Chaitanay Kapoor",
        designation: "Vice Chairperson",
        image: "/images/board/24-25/vc.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/chaitanay-kapoor-717bb8299/",
          github: "https://github.com/chaitanay2004",
          instagram: "https://www.instagram.com/chaitanaykapoor/",
        },
      },
      {
        name: "Vinayak Raina",
        designation: "Co-Secretary",
        image: "/images/board/24-25/cosec.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/vinayak-raina-08a71a253",
          github: "https://github.com/RAINAVINAYAK16",
          instagram: "https://www.instagram.com/raina.vinayak/",
        },
      },
      {
        name: "Keshav Aneja",
        designation: "Technical Head",
        image: "/images/board/24-25/tech.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/keshav-aneja",
          github: "https://github.com/Keshav-Aneja",
          instagram: "https://www.instagram.com/k.aneja09/",
        },
      },
      {
        name: "Harshit PG",
        designation: "Projects Head",
        image: "/images/board/24-25/project.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/harshit-p-g-a87623272/",
          github: "https://github.com/HarshitPG",
          instagram: "https://www.instagram.com/harshitpg/",
        },
      },
      {
        name: "Sameer Mahindru",
        designation: "Events Head",
        image: "/images/board/24-25/events.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/sameer-mahindru-39ba91248/",
          github: "https://github.com/CodesBySammy",
          instagram: "https://www.instagram.com/spammyyy._._/",
        },
      },
      {
        name: "Kandarp Chandra",
        designation: "Research and Development Head",
        image: "/images/board/24-25/r&d.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/kandarp-chandra-b32ba4251/",
          github: "https://github.com/kandarpchandra",
          instagram: "https://www.instagram.com/kandarp._._/",
        },
      },
      {
        name: "Kanishka Viswanathan",
        designation: "Publicity Head",
        image: "/images/board/24-25/publicity.webp",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/kanishka-viswanathan",
          github: "https://github.com/KanishkaViswanathan",
          instagram: "https://www.instagram.com/_kxnishhh/",
        },
      },
      {
        name: "Divyansh Gautam",
        designation: "Design Head",
        image: "/images/board/24-25/design.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/divyansh-gautam-323b47266",
          github: "https://github.com/i-divyansh",
          instagram: "https://www.instagram.com/i._divyansh/",
        },
      },
      {
        name: "Himika Bansal",
        designation: "HR Head",
        image: "/images/board/24-25/hr.webp",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/himika-bansal",
          github: "https://github.com/himika-bansal",
          instagram: "https://www.instagram.com/himika.bansal/",
        },
      },
      {
        name: "Anshul Kedia",
        designation: "Finance Head",
        image: "/images/board/24-25/finance.webp",
        socialLinks: {
          linkedin: "http://www.linkedin.com/in/anshul-kedia-78965b245",
          github: "https://github.com/anshulkedia",
          instagram: "https://www.instagram.com/anshul.kediaaa/",
        },
      },
      {
        name: "Harshvardhan Singh",
        designation: "Management Head",
        image: "/images/board/24-25/management.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/harshvardhan-singh-b66728250/",
          github: "https://github.com/harshvar36",
          instagram: "https://www.instagram.com/harshvar_0036/",
        },
      },
      {
        name: "Akshat Kumar Jha",
        designation: "Editorial Head",
        image: "/images/board/24-25/editorial.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/akshat-jha-bbb861254",
          github: "https://github.com/axe-hat",
          instagram: "https://www.instagram.com/axe.hat/",
        },
      },
      {
        name: "Kanha Khantaal",
        designation: "Outreach Head",
        image: "/images/board/24-25/outreach.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/kanha-khantaal-829302258",
          github: "https://github.com/Kanha02052002",
          instagram: "https://www.instagram.com/k2g_02/",
        },
      },
      {
        name: "Samaksh Arjani",
        designation: "Creative Head",
        image: "/images/board/24-25/creative.webp",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/samaksh-arjani-262a12253/",
          github: "https://github.com/samaksharjani2004",
          instagram: "https://www.instagram.com/chiiinuu._6/",
        },
      },
    ],
  };

  const boardMembers = boardMembersData[selectedYear] || [];

  return (
    <div>
      <div className="dropdown-container">
        <label htmlFor="year-select" className="dropdown-label">
          Select Year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="dropdown dropdown-toggle"
        >
          <option value="2020-21">2020-21</option>
          <option value="2021-22">2021-22</option>
          <option value="2022-23">2022-23</option>
        </select>
      </div>

      <div className="marquee-container">
        {boardMembers.map((member, index) => (
          <div key={index} className="marquee-item">
            <img
              src={member.image}
              alt={`${member.name} Image`}
              className="member-image object-fit"
            />
            <h2 className="name">{member.name}</h2>
            <p className="designation">{member.designation}</p>
            <div className="social-links">
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/Vector-6.svg" alt="LinkedIn" />
              </a>
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/Vector-5.svg" alt="GitHub" />
              </a>
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/Vector-3.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
