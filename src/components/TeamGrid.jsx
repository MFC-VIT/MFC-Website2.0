import React, { useState } from "react";
import "../styles/teamGrid.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const TeamGrid = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");

  const boardMembers = boardMembersData[selectedYear] || [];

  return (
    <div id="team">
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
          <option value="2022-23">2022-23</option>
          <option value="2023-24">2023-24</option>
          <option value="2024-25">2024-25</option>
          <option value="2025-26">2025-26</option>
        </select>
      </div>

      <div className="marquee-container">
        {boardMembers.map((member, index) => (
          <div key={index} className="marquee-item">
            <img
              src={member.image}
              alt={`${member.name} Image`}
              className="object-fit border-orange-500 border-2"
            />
            <h2 className="name">{member.name}</h2>
            <p className="designation">{member.designation}</p>
            <div className="social-links">
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-orange-500"></i>
              </a>
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-orange-500"></i>
              </a>
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-orange-500"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;

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
      image: "/images/board/23-24/chair.webp",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/prateek-balaji/",
        github: "#",
        instagram: "https://www.instagram.com/prateek_balaji/",
      },
    },
    {
      name: "Kartikey Bhatnagar",
      designation: "Vice Chairperson",
      image: "/images/board/23-24/vc.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/kartikey-bhatnagar",
        github: "#",
        instagram: "https://www.instagram.com/kartickeyy/",
      },
    },
    {
      name: "Naisa Gupta",
      designation: "General Secretary",
      image: "/images/board/23-24/gensec.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/naisa-gupta-1b020a1b9",
        github: "#",
        instagram: "https://www.instagram.com/nxisagupta/",
      },
    },
    {
      name: "Trisha Paul",
      designation: "Co-Secretary",
      image: "/images/board/23-24/cosec.webp",
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
      image: "/images/board/23-24/tech.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/vedik-agarwal",
        github: "#",
        instagram: "https://www.instagram.com/vedik_agarwal/",
      },
    },
    {
      name: "Aditya Aren",
      designation: "Project Head",
      image: "/images/board/23-24/project.webp",
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
      image: "/images/board/23-24/management.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/siddhesh-fuladi",
        github: "#",
        instagram: "https://www.instagram.com/siddheshfuladi/",
      },
    },
    {
      name: "Ayush Patil",
      designation: "Design Head",
      image: "/images/board/23-24/design.webp",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ayushp2948/",
        github: "#",
        instagram: "https://www.instagram.com/ayush.patil_17/",
      },
    },
    {
      name: "Vaishali Singh",
      designation: "Events Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748419016/Screenshot_2025-05-28_132646_ajirsu.png",
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
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748419121/Screenshot_2025-05-28_132829_kkbno9.png",
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
      image: "/images/board/23-24/r&d.webp",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/utkarsh-tyagi-/",
        github: "https://github.com/utkarsh-creator",
        instagram: "https://www.instagram.com/utkarshtyagi07/",
      },
    },
    {
      name: "Nirbhay Tiwari",
      designation: "Publicity Head",
      image: "/images/board/23-24/publicity.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/nirbhay-tiwari-b09817219",
        github: "#",
        instagram: "https://www.instagram.com/_nirbhayt/",
      },
    },
    {
      name: "Hemant Modi",
      designation: "Finance Head",
      image: "/images/board/23-24/finance.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/modih",
        github: "#",
        instagram: "https://www.instagram.com/notthegujratimodi/",
      },
    },
    {
      name: "Soumyadeep Roy Chowdhury",
      designation: "Outreach Head",
      image: "/images/board/23-24/outreach.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/sdroyc",
        github: "#",
        instagram: "https://www.instagram.com/soumyadeep_rc/",
      },
    },
    {
      name: "Aditya Prasad",
      designation: "Creative Head",
      image: "/images/board/23-24/creative.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/adityaprasad1143",
        github: "#",
        instagram: "https://www.instagram.com/adiitya_74/",
      },
    },
    {
      name: "Tanisha Ambastha",
      designation: "HR Head",
      image: "/images/board/23-24/hr.webp",
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
      image: "/images/board/23-24/ui-ux.webp",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/namah-singhal-983446217/",
        github: "https://github.com/NAMAH942",
        instagram: "https://www.instagram.com/nam.ahhh28_/",
      },
    },
    {
      name: "Himakshi Chaturvedi",
      designation: "Media Mentor",
      image: "/images/board/23-24/media.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/himakshi-chaturvedi",
        github: "#",
        instagram: "https://www.instagram.com/himakshiiii_/",
      },
    },
    {
      name: "Ashutosh Prabhudesai",
      designation: "AI ML Mentor",
      image: "/images/board/23-24/ml.webp",
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/prabhudesaiashutosh02",
        github: "#",
        instagram: "https://www.instagram.com/ashutosh02_/",
      },
    },
    {
      name: "Sushant Saurav",
      designation: "Web Development Mentor",
      image: "/images/board/23-24/web.webp",
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
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748418338/Screenshot_2025-05-28_130920_n3sa8c.png",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/namah-singhal-983446217/",
        github: "https://github.com/NAMAH942",
        instagram: "https://www.instagram.com/nam.ahhh28_/",
      },
    },
    {
      name: "Chaitanay Kapoor",
      designation: "Vice Chairperson",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748419246/Screenshot_2025-05-28_133036_pe9gdn.png",
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
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744698914/IMG_8908_ribuyq.jpg",
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
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748419347/Screenshot_2025-05-28_133214_ixwpxl.png",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/himika-bansal",
        github: "https://github.com/himika-bansal",
        instagram: "https://www.instagram.com/himika.bansal/",
      },
    },
    {
      name: "Harshvardhan Singh",
      designation: "Management Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744698895/IMG_8940_ssejcl.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/harshvardhan-singh-b66728250/",
        github: "https://github.com/harshvar36",
        instagram: "https://www.instagram.com/harshvar_0036/",
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
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699415/IMG_8886_axougi.jpg",
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
  "2025-26":[
    {
      name: "Harshvardhan Singh",
      designation: "ChairPerson",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744698895/IMG_8940_ssejcl.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/harshvardhan-singh-b66728250/",
        github: "https://github.com/harshvar36",
        instagram: "https://www.instagram.com/harshvar_0036/",
      },
    },
    {
      name: "Kanha Khantaal",
      designation: "General Secretary",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699415/IMG_8886_axougi.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/kanha-khantaal-829302258",
        github: "https://github.com/Kanha02052002",
        instagram: "https://www.instagram.com/k2g_02/",
      },
    },
    {
      name: "Samriddhi Sharma",
      designation: "Vice Chairperson",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748318434/Screenshot_2025-05-27_093020_lsa2ng.png",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/samriddhi-s-",
        github: "https://github.com/ck-ss",
        instagram: "https://www.instagram.com/samriddhi__sharma__/",
      },
    },
    {
      name: "Keshav Gujrathi",
      designation: "Co-Secretary",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699365/IMG_8851_celrwo.jpg",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/keshavgujrathi",
        github: "https://github.com/keshavgujrathi",
        instagram: "https://www.instagram.com/keshavgujrathi/",
      },
    },
    {
      name: "Abhinav Garg",
      designation: "Technical Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699403/IMG_8869_togwb7.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/abhinav-garg05",
        github: "https://github.com/ABHINAVGARG05",
        instagram: "#",
      },
    },
    {
      name: "Suvidh Jain",
      designation: "Projects Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699404/IMG_8876_xybmsc.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/suvidh-jain-72a88728a/",
        github: "https://github.com/SuvidhJ",
        instagram: "https://www.instagram.com/harshitpg/",
      },
    },
    {
      name: "Bihan Banerjee",
      designation: "Events Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744721350/WhatsApp_Image_2025-04-15_at_13.02.03_8b7a9ba6_rdn63h.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/bihan-banerjee-70905228b",
        github: "https://github.com/Bihan-Banerjee",
        instagram: "https://www.instagram.com/banerjee.bihan",
      },
    },
    {
      name: "Prateek Batra",
      designation: "Research and Development Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699401/IMG_8868_lpiy3w.jpg",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/prateekbatradel",
        github: "https://github.com/PrateekBatra23",
        instagram: "https://www.instagram.com/prateekbatra23/",
      },
    },
    {
      name: "Mahima Gupta",
      designation: "Publicity Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699352/IMG_8843_qxoka4.jpg",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/mahima-gupta-a51b1728a",
        github: "https://github.com/mahimag07",
        instagram: "https://www.instagram.com/mahimaaagupta/",
      },
    },
    {
      name: "Linga Nikhil Arya",
      designation: "Design Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744698916/IMG_8905_rhfoee.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nikhil-arya-linga-941a3028a/",
        github: "https://github.com/nikhillinga",
        instagram: "https://www.instagram.com/nikhil_linga?igsh=NDh3ZzNzaG1wcnJn&utm_source=qr",
      },
    },
    {
      name: "Rishi Chalana",
      designation: "Management Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748281021/Screenshot_2025-05-26_230644_uhrava.png",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rishi-chalana-08654520a",
        github: "https://github.com/RishiChalana",
        instagram: "https://www.instagram.com/rishi__chalana",
      },
    },
    {
      name: "Somil Gupta",
      designation: "Outreach Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744698903/IMG_8929_ofhgw7.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/somil-gupta-040479285/",
        github: "https://github.com/Somil1109",
        instagram: "https://www.instagram.com/somil_1542/",
      },
    },
    {
      name: "Nandini Khantaal",
      designation: "HR Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699329/IMG_8828_jaxvtl.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nandini-khantaal-69719628b",
        github: "https://github.com/NandiniKhantaal",
        instagram: "https://www.instagram.com/_nkhantaal_",
      },
    },
    {
      name: "Ansh Jerath",
      designation: "Finance Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744699413/IMG_8881_etpdsr.jpg",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/ansh-jerath-a25412214",
        github: "https://github.com/darkhorse0204",
        instagram: "https://www.instagram.com/ansh.jerath/",
      },
    },
    {
      name: "Kokil Agarwal",
      designation: "Creative Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1748282976/IMG_6305_ygxulj.png",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/kokil-agarwal",
        github: "https://github.com/KokilAgarwal",
        instagram: "https://www.instagram.com/kokil__agarwal",
      },
    },
    {
      name: "Saanvi Sharma",
      designation: "Public Relations Head",
      image: "https://res.cloudinary.com/abhi-server/image/upload/v1744698906/IMG_8924_k2h4ko.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/saanvi-sharma-254b782a5/",
        github: "https://github.com/saanvi3605",
        instagram: "https://www.instagram.com/_saanvi_0306",
      },
    },
  ]
};

