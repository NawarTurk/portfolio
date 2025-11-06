import React, { useState } from "react";
import MiniGame from "./MiniGame";

const data = {
  experience: [
    {
      role: "Research and Teaching Assistant",
      org: "Concordia University, Montreal, QC",
      year: "Sep 2024 - Present",
      image: "/images/concordia.png",
      details:[
        "Collaborated with the research team on NLP projects, designing and evaluating model architectures, presented findings at 2 international conferences (Canadian AI 2025, SemEval 2025), engaging with 100+ researchers",
        "Supporting 80+ students in Object-Oriented Programming and AI courses by leading labs and tutorials, explaining complex concepts, designing additional quizzes and practice sets on GitHub, and assisting via Slack",
        "Mentoring an undergraduate student toward their first publication, guiding model and research development"
      ],
    },
    {
      role: "Software Developer Intern",
      org: "Ross Video, Ottawa, ON",
      year: "Jan 2023 - Dec 2023",
      image: "/images/ross.png",
      details: [
        "Worked in an Agile environment with CI/CD pipelines and version control (Git)",
        "Delivered new features for Quorum broadcasting software by implementing Shotbox system backend using Java/Struts2, achieving 95%+ test coverage with comprehensive JUnit/Mockito testing",
        "Represented the Quorum development team at 4 company-wide Agile sprint demos, presenting new features to 40+ cross-functional stakeholders and addressing technical questions",
        "Collaborated with development team members to streamline Quorum onboarding by creating structured documentation and training materials, reducing ramp-up time from 4 to 2 days for four new developers"
      ],
    },
    {
      role: "Engineering Assistant Intern",
      org: "Genesee & Wyoming Inc, Montreal, QC",
      year: "Sep 2021 - Dec 2021",
      image: "/images/gw.png",
      details: [
        "Improved engineering standards consistency by auditing multiple engineering standards documents, resolving conflicts, and unifying multiple sources into a single updated standard proposal for management",
        "Supported a $10M rail expansion from the main line to a factory by evaluating 4 safety-compliant routes, preparing cost estimates, and delivering presentation materials for municipal stakeholders"
      ],
    },
  ],

  volunteering: [
    {
      org: "Fondation Arbour",
      role: "Ambassador & Volunteer",
      year: "2025 - Present",
      image: "/images/arbour.png",
      details: [
        "Ambassador: Served as an Ambassador for the Arbour Foundation, leading outreach and support for scholarship applicants.",
        "Organizer: Helped organize the “AI & Energy Transition” event with IVADO, and supported the 2025–2026 selection process by coordinating candidate reception and interview flow.",
        "Community Builder: Founded and managed a LinkedIn group for Arbour Scholars to connect, share opportunities, and build a sense of community."
       ],
    
    },
    {
      org: "Santropol Roulant",
      role: "Meals-on-Wheels Volunteer",
      year: "2024 - Present",
      image: "/images/santropool.png",
      details: [
        "Volunteer with Santropol Roulant, preparing and delivering nutritious meals and human connection to homebound seniors in Montreal. Supporting seniors with limited autonomy, combating both food insecurity and social isolation",
      ],
    },
    {
      org: "Concordia University",
      role: "Shuffle Volunteer",
      year: "2024 – 2025",
      image: "/images/concordia.png",
      details: [
        "Volunteer for Concordia Shuffle, supporting annual charity walks that raised $300k+ for student scholarships. Assisted in logistics, including registration, merchandise, donations, and online promotion.",
        "Returned as a volunteer for the second year, contributing to event logistics and student fundraising efforts."
      ],
    },
    {
      org: "Ross Video",
      role: "Chess Club Founder & Coordinator",
      year: "2023",
      image: "/images/ross.png",
      details: ["Founded and managed Ross Video Chess Club with 10 bi-weekly competitions connecting 20+ employees across departments, fostering cross-team professional connections and networking",
        "Contributed to organizing RossCon3 by managing 5 Zoom and in-person sessions, handling recordings, introducing speakers, coordinating signage, taking attendance, and troubleshooting technical issues"
      ]
    },
    {
      org: "Concordia University",
      role: "Co-op Mentor",
      year: "2022-2023",
      image: "/images/concordia.png",
      details: [
        "Mentored junior co-op students through internship search and career preparation, providing interview coaching, résumé feedback, and time management guidance",
        "Supported mentees in securing competitive internship placements while maintaining high GPAs, developing technical skills beyond the school curriculum, and balancing full-time coursework",
        "Received the Co-op Mentorship Award in 2024 for exceptional guidance and student support"
      ],
    },
    {
      org: "Concordia University",
      role: "Games Club executive",
      year: "2020 - 2021",
      image: "/images/concordia.png",
      details: [
        "Collaborated with a 4-person leadership team to support first-year student engagement during COVID-19. Grew club social media to 1,000+ followers and organized 7 online gaming events, building community connections for remote students unable to attend campus"
      ],
    },
  ],

  publications: [
    {
      title: "Hierarchical Adapters for Cross-Framework Multi-lingual Discourse Relation Classification",
      venue: "Computational Approaches to Discourse (CODI) Workshop @ EMNLP 2025 · Sep 22, 2025",
      link: "https://arxiv.org/abs/2509.16903", 
      // image: "/images/hidac.png",
      details: [
        "Our paper focuses on Discourse Relation Classification, where the DISRPT organizers did a wonderful job assembling 39 corpora across 16 languages and 6 discourse frameworks, and proposed a unified set of 17 relation labels",
        "We built multilingual baselines using mBERT, XLM-RoBERTa-Base, and XLM-RoBERTa-Large for the newly proposed labels across all corpora. We then explored progressive unfreezing strategies and also evaluated prompt-based models (zero- and few-shot) using Claude Opus 4.0. Lastly, we proposed a hierarchical adapter and contrastive learning model that is efficient and aimed to outperform the baselines",
        "Our findings show that while larger transformer models yield slightly better results, the gains are modest. Unfreezing the top 75% of encoder layers offers nearly the same accuracy as full fine-tuning, but with far fewer trainable parameters. Our proposed model surpassed the baselines while requiring far fewer parameters to train. The winning team achieved an accuracy of 71%, showing that there is still room for improvement"
      ],
    },
    {
      title: "A Multi-Architecture Approach for Corporate Environmental Promise Verification",
      venue: "The 19th International Workshop on Semantic Evaluation (SemEval-2025) · Jul 1, 2025",
      link: "https://aclanthology.org/2025.semeval-1.232/", 
      // image: "/images/semeval.png",
      details: [
        "We proposed three transformer-based models for verifying ESG promises in corporate reports at SemEval-2025 Task 6. Models 1 and 2 (using ESG-BERT) handled all four subtasks, with Model 2 adding tailored features like sentiment, vague terms, and time indicators to guide the model. Model 3 (based on DeBERTa-v3) focused on Tasks 1 and 2 using attention pooling, document metadata, and multitask learning. Our final submission combined Model 3 for Tasks 1 and 2 with Model 2 for Tasks 3 and 4, outperforming the baseline on the private leaderboard",
      ],
    },
    {
      title: "On the Influence of Discourse Relations in Persuasive Texts",
      venue: "The 38th Canadian Conference on Artificial Intelligence (Canadian AI 2025) · May 19, 2025",
      link: "https://caiac.pubpub.org/pub/p99aab5q/release/2", 
      // image: "/images/canai.png",
      details: [
        "We explored how discourse relations relate to persuasion techniques in online texts. We used LLMs and prompt engineering to label a persuasion-annotated dataset with discourse relations from PDTB 3.0, evaluating four LLMs across ten prompts (40 classifiers total). We released five silver-standard datasets created through ensemble strategies. Our analysis revealed that relations like Cause, Purpose, and Concession are closely tied to persuasive techniques such as Loaded Language and Doubt, offering insights for misinformation detection and persuasive communication",
      ],
    },
  ],

  awards: [
    {
      name: "Fonds de recherche du Québec (FRQ) Scholarship, $20,000",
      year: "2025",
      image: "/images/frq.png",
      details: ["provincial, merit-based; assessed on academic excellence, research potential, and overall presentation"],
    },
    {
      name: "Fondation Arbour Scholarship, $40,000",
      year: "2024–2025",
      image: "/images/arbour.png",
      details: ["2024, sole Concordia recipient; renewed 2025", 
        "provincial, merit-based; assessed on leadership skills, contributing to the community, research record and potential"],
    },
    {
      name: "Natural Sciences and Engineering Research Council of Canada (NSERCCGS-M), $27,000",
      year: "2024",
      image: "/images/nserc.png",
      details: ["national, merit-based; assessed on academic excellence, research potential, and personal/interpersonal skills"],
    },
    {
      name: "Co-op Mentorship Award",
      year: "2024",
      image: "/images/concordia.png",
      details: ["Recognized for exceptional mentorship at Concordia."],
    },
    {
      name: "Dean’s List",
      year: "2022–2024",
      image: "/images/concordia.png",
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
        <p className="text-xs text-green-800 text-center mb-2">
        MSc Computer Science Candidate <br/> Software Developer & NLP Researcher
        </p>


        <div className="flex justify-center gap-3 mt-4 mb-3">
          <a
            href="https://www.linkedin.com/in/nawart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8 rounded-md bg-white p-1 border border-green-700 hover:scale-110 transition-transform duration-150"
            />
          </a>

          <a
            href="https://github.com/nawarturk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/github.png"
              alt="GitHub"
              className="w-8 h-8 rounded-md bg-white p-1 border border-green-700 hover:scale-110 transition-transform duration-150"
            />
          </a>

          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/googlescholar.png"
              alt="Google Scholar"
              className="w-8 h-8 rounded-md bg-white p-1 border border-green-700 hover:scale-110 transition-transform duration-150"
            />
          </a>
        </div>



      <nav className="w-full space-y-2 mt-6">
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
{/*             
            <p className="font-semibold text-green-900 text-sm mb-1">
              {item.role || item.title || item.name}
            </p> */}

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-900 text-sm mb-1 underline hover:text-green-700"
              >
                {item.title || item.role || item.name}
              </a>
            ) : (
              <p className="font-semibold text-green-900 text-sm mb-1">
                {item.title || item.role || item.name}
              </p>
            )}


          {item.org && <p className="text-xs text-green-800">{item.org}</p>}
          {item.venue && <p className="text-xs text-green-800 italic">{item.venue}</p>}
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