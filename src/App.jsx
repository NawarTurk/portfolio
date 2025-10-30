import React, { useState } from "react";
import MiniGame from "./MiniGame";


// Pokémon overworld-inspired portfolio with authentic Pokkén-style grass background
// Uses a soft retro palette with green tones and pixel textures similar to Pokémon routes.

const data = {
  experience: [
    {
      role: "Research and Teaching Assistant",
      org: "Concordia University, Montreal, QC",
      year: "Sep 2024 – Present",
      image: "/images/concordia.png",
      details: [
        "Collaborated on NLP projects and presented at Canadian AI 2025 and SemEval 2025.",
        "Supported 80+ students in programming and AI courses.",
        "Mentored an undergraduate student toward their first publication.",
      ],
    },
    {
      role: "Software Developer Intern",
      org: "Ross Video, Ottawa, ON",
      year: "Jan 2023 – Dec 2023",
      image: "/images/ross.png",
      details: [
        "Developed backend features for Quorum using Java/Struts2.",
        "Achieved 95%+ unit test coverage with JUnit and Mockito.",
        "Created onboarding docs reducing ramp-up time by 50%.",
      ],
    },
    {
      role: "Engineering Assistant Intern",
      org: "Genesee & Wyoming Inc, Montreal, QC",
      year: "Sep 2021 – Dec 2021",
      image: "/images/gw.png",
      details: [
        "Audited engineering standards and supported a $10M rail expansion project.",
      ],
    },
  ],

  volunteering: [
    {
      org: "Fondation Arbour",
      role: "Ambassador",
      year: "2025 – Present",
      image: "/images/arbour.png",
      details: [
        "Promoted scholarships and co-hosted events with 100+ attendees.",
      ],
    },
    {
      org: "Santropol Roulant",
      role: "Meals-on-Wheels Volunteer",
      year: "2024 – Present",
      image: "/images/santropol.png",
      details: [
        "Delivered meals to elderly residents and improved food security.",
      ],
    },
    {
      org: "Concordia University",
      role: "Shuffle Volunteer",
      year: "2024 – 2025",
      image: "/images/shuffle.png",
      details: [
        "Supported $350k+ annual charity walk and managed registration/donations.",
      ],
    },
    {
      org: "Ross Video",
      role: "Chess Club Founder",
      year: "2023",
      image: "/images/chess.png",
      details: [
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
        "Founded company chess club and connected 20+ employees.",
      ],
    },
    {
      org: "Concordia University",
      role: "Co-op Mentor",
      year: "2022",
      image: "/images/mentor.png",
      details: ["Guided students in finding and succeeding in their first internships."],
    },
  ],

  publications: [
    {
      title: "HiDAC: Hierarchical Adapters for Cross-Framework Multilingual Discourse Relation Classification",
      venue: "CODI–DISRPT @ EMNLP 2025",
      image: "/images/hidac.png",
      details: [
        "Introduced hierarchical adapters for discourse relation classification.",
      ],
    },
    {
      title: "CLaC at SemEval-2025 Task 6",
      venue: "SemEval 2025 Proceedings",
      image: "/images/semeval.png",
      details: [
        "Developed ensemble transformer models for corporate promise verification.",
      ],
    },
    {
      title: "On the Influence of Discourse Relations in Persuasive Texts",
      venue: "Canadian AI 2025",
      image: "/images/canai.png",
      details: [
        "Analyzed how discourse relations affect persuasion in online texts.",
      ],
    },
  ],

  awards: [
    {
      name: "FRQNT Scholarship",
      year: "2025",
      image: "/images/frq.png",
      details: ["Provincial merit-based research grant ($20,000)."],
    },
    {
      name: "Arbour Scholarship",
      year: "2024–2025",
      image: "/images/arbour.png",
      details: ["Leadership and research scholarship ($40,000)."],
    },
    {
      name: "NSERC CGS-M",
      year: "2024",
      image: "/images/nserc.png",
      details: ["Federal merit-based research award ($27,000)."],
    },
    {
      name: "Co-op Mentorship Award",
      year: "2024",
      image: "/images/coop.png",
      details: ["Recognized for exceptional mentorship at Concordia."],
    },
    {
      name: "Dean’s List",
      year: "2022–2024",
      image: "/images/deans.png",
      details: ["High academic distinction for multiple years."],
    },
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState("experience");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex bg-[url('images/grass-sky.png')] bg-repeat bg-[length:64px_64px] text-gray-800 font-mono">
      <aside className="w-72 bg-green-200/90 border-r-4 border-green-600 p-5 flex flex-col items-center shadow-inner">
      <img
        src="images/profile.png"
        alt="Personal profile"
        className="w-28 h-28 rounded-full mb-3 border-4 border-green-700 shadow-md object-cover object-center"
      />
        <h1 className="text-lg font-bold mb-2 text-green-900 tracking-tight">Nawar Turk</h1>
        <p className="text-xs text-green-800 text-center mb-5">MSc Computer Science | NLP Researcher</p>

        <nav className="w-full space-y-2">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setExpandedIndex(null);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors duration-150 border-2 border-green-700 shadow-sm ${
                activeSection === key
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-500 hover:text-white text-green-900 bg-green-100"
              }`}
            >
              ▶ {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-10 bg-[url('/images/grass-sky.jpg')] bg-no-repeat bg-cover bg-center bg-[length:80px_80px]">
        {activeSection === "experience" && (
          <Section title="Work Experience">
            <CardList items={data.experience} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
          </Section>
        )}

        {activeSection === "volunteering" && (
          <Section title="Volunteering">
            <CardList items={data.volunteering} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
          </Section>
        )}

        {activeSection === "publications" && (
          <Section title="Publications">
            <CardList items={data.publications} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
          </Section>
        )}

        {activeSection === "awards" && (
          <Section title="Awards">
            <CardList items={data.awards} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
          </Section>
        )}
          <div className="mt-10">
            <MiniGame />
          </div>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="bg-green-50/80 rounded-2xl border-4 border-green-700 p-6 shadow-[4px_4px_0_#2f855a] backdrop-blur-sm">
      <h2 className="text-lg font-bold mb-3 text-green-800 tracking-tight border-b-2 border-green-700">{title}</h2>
      {children}
    </section>
  );
}

function CardList({ items, expandedIndex, toggleExpand }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => toggleExpand(i)}
          className="bg-green-100/90 border-2 border-green-700 rounded-xl p-4 hover:bg-green-200 transition-all cursor-pointer flex items-start gap-3 shadow-[2px_2px_0_#2f855a] backdrop-blur-sm"
        >
          {item.image && (
            <img src={item.image} alt={item.role || item.title || item.name} className="w-16 h-16 object-cover rounded-md border-2 border-green-700" />
          )}
          <div className="flex-1">
            <p className="font-semibold text-green-900 text-sm mb-1">{item.role || item.title || item.name}</p>
            {item.org && <p className="text-xs text-green-800">{item.org}</p>}
            {item.year && <p className="text-[10px] text-green-700">{item.year}</p>}
            {expandedIndex === i && item.details && (
              <ul className="mt-2 text-[11px] text-green-900 list-disc list-inside">
                {item.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            <div className="text-right text-[10px] text-green-700 mt-2">
              {expandedIndex === i ? "▲ Close" : "▼ Expand"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}