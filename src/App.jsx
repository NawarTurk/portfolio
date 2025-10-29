// ---------------------------- HOW TO RUN LOCALLY ----------------------------
// 1. Make sure you have Node.js (v16 or later) installed: https://nodejs.org
//
// 2. In your terminal, create a new React app using Vite (recommended):
//      npm create vite@latest my-portfolio -- --template react
//      cd my-portfolio
//
// 3. Install Tailwind CSS for styling:
//      npm install -D tailwindcss@3 postcss autoprefixer
//      npx tailwindcss init -p
//
// 4. In tailwind.config.js, ensure you have:
//      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
//
// 5. In src/index.css, include these lines:
//      @tailwind base;
//      @tailwind components;
//      @tailwind utilities;
//
// 6. Replace src/App.jsx with this file's contents.
//
// 7. Start the development server:
//      npm run dev
//
// 8. Open http://localhost:5173 in your browser to view the app.
//
// You’ll see your personal portfolio with expandable cards, a sidebar,
// and Tailwind-powered styling.


// This React app creates a personal portfolio-style interface that displays
// sections like Work Experience, Volunteering, Courses, and Publications.
// Each section is shown as clickable cards that expand to reveal bullet-point details.
// Tailwind CSS is used for styling (the className attributes are Tailwind utility classes).

import React, { useState } from "react";

// ---------------------------- DATA SECTION ----------------------------
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

// ---------------------------- APP COMPONENT ----------------------------
export default function App() {
  const [activeSection, setActiveSection] = useState("experience");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* ------------------ SIDEBAR ------------------ */}
      <aside className="w-72 bg-white border-r border-gray-200 p-6 shadow-sm flex flex-col items-center">
        <img
          src="images/profile.png"
          alt="Nawar Turk"
          className="w-32 h-32 rounded-full mb-4 object-cover border"
        />
        <h1 className="text-2xl font-bold mb-2">Nawar Turk</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          MSc Computer Science | NLP Researcher
        </p>

        <nav className="w-full space-y-3">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setExpandedIndex(null);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                activeSection === key
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* ------------------ MAIN CONTENT ------------------ */}
      <main className="flex-1 p-10">
        {Object.entries(data).map(([key, value]) => (
          activeSection === key && (
            <Section
              key={key}
              title={
                key === "experience"
                  ? "Work Experience"
                  : key === "volunteering"
                  ? "Volunteer Work"
                  : key === "publications"
                  ? "Collaborative Research & Publications"
                  : key === "awards"
                  ? "Awards & Distinctions"
                  : "Courses"
              }
            >
              <CardList
                items={value.map((item) => ({
                  role: item.role || item.title || item.name,
                  org: item.org || item.venue,
                  image: item.image,
                  year: item.year,
                  details: item.details,
                }))}
                expandedIndex={expandedIndex}
                toggleExpand={toggleExpand}
              />
            </Section>
          )
        ))}
      </main>
    </div>
  );
}

// ---------------------------- COMPONENTS ----------------------------
function Section({ title, children }) {
  return (
    <section className="bg-white shadow-sm rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{title}</h2>
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
          className="bg-white border rounded-xl shadow p-4 hover:shadow-md transition-shadow cursor-pointer flex items-start gap-4"
          onClick={() => toggleExpand(i)}
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.role || item.org}
              className="w-24 h-24 object-cover rounded-md"
            />
          )}
          <div className="flex-1">
            <p className="font-semibold text-lg mb-1">
              {item.role || "Untitled"}
            </p>
            {item.org && <p className="text-sm text-gray-600">{item.org}</p>}
            {item.year && <p className="text-xs text-gray-500">{item.year}</p>}
            {expandedIndex === i && item.details && (
              <ul className="mt-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-md list-disc list-inside">
                {item.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            <div className="text-right text-gray-400 text-xs mt-2">
              {expandedIndex === i ? "▲ Collapse" : "▼ Expand"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
