import SponsorLogo from "../components/SponsorLogo.jsx";
//import sponsor1 from "../assets/images/sponsor1.png";
//import sponsor2 from "../assets/images/sponsor2.png";
//import sponsor3 from "../assets/images/sponsor3.png"; 
//import sponsor4 from "../assets/images/sponsor4.png";
//import sponsor5 from "../assets/images/sponsor5.png";
function Sponsor() {

  const sponsors = [
    {
      name: "Sponsor 1",
      description: "This is a description for Sponsor 1.",
      image: null,
    },
    {
      name: "Sponsor 2",
      description: "This is a description for Sponsor 2.",
      image: null,
    },
    {
      name: "Sponsor 3",
      description: "This is a description for Sponsor 3.",
      image: null,
    },
    {
      name: "Sponsor 4",
      description: "This is a description for Sponsor 4.",
      image: null,
    },
    {
      name: "Sponsor 5",
      description: "This is a description for Sponsor 5.",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-backgroundBlack text-white font-sans">
      <header className="text-5xl text-align-center font-bold my-12">OUR SPONSORS</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
      {sponsors.map((sponsor, index) => (
          <SponsorLogo
            key={index}
            name={sponsor.name}
            description={sponsor.description}
            image={sponsor.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Sponsor;
