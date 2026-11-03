
import { useState, useEffect } from "react";

const countries = [
  { name: "Indonesia", flag: "🇮🇩", capital: "Jakarta", region: "Southeast Asia", description: "An active member of ASEAN and the United Nations, Indonesia promotes regional cooperation, peaceful diplomacy, and sustainable development." },
  { name: "United States", flag: "🇺🇸", capital: "Washington, D.C.", region: "North America", description: "The United States is a permanent member of the UN Security Council and plays a major role in international diplomacy." },
  { name: "United Kingdom", flag: "🇬🇧", capital: "London", region: "Europe", description: "The United Kingdom is a permanent member of the UN Security Council and supports multilateral cooperation." },
  { name: "Japan", flag: "🇯🇵", capital: "Tokyo", region: "East Asia", description: "Japan is active in international development, technology cooperation, and peacebuilding." },
  { name: "France", flag: "🇫🇷", capital: "Paris", region: "Europe", description: "France is a permanent member of the UN Security Council and supports multilateral diplomacy." },
  { name: "Türkiye", flag: "🇹🇷", capital: "Ankara", region: "West Asia", description: "Türkiye connects Europe and Asia and participates actively in regional and international diplomacy." },
  { name: "Germany", flag: "🇩🇪", capital: "Berlin", region: "Europe", description: "Germany supports European cooperation, climate action, and international development." },
  { name: "South Korea", flag: "🇰🇷", capital: "Seoul", region: "East Asia", description: "South Korea is active in technology, international development, and global cooperation." },
  { name: "Australia", flag: "🇦🇺", capital: "Canberra", region: "Oceania", description: "Australia participates in regional diplomacy and cooperation across the Indo-Pacific." },
];

const countryProfiles = {
  Indonesia: { languages: "Indonesian", currency: "Indonesian rupiah (IDR)", memberships: ["United Nations", "ASEAN", "G20"], focus: "Regional cooperation, peaceful diplomacy, maritime affairs, and sustainable development." },
  "United States": { languages: "English (widely used)", currency: "United States dollar (USD)", memberships: ["United Nations", "NATO", "G20"], focus: "International security, alliances, innovation, and global economic cooperation." },
  "United Kingdom": { languages: "English", currency: "Pound sterling (GBP)", memberships: ["United Nations", "NATO", "G7"], focus: "Multilateral cooperation, international security, development, and trade." },
  Japan: { languages: "Japanese", currency: "Japanese yen (JPY)", memberships: ["United Nations", "G7", "G20"], focus: "Regional stability, development cooperation, technology, and maritime security." },
  France: { languages: "French", currency: "Euro (EUR)", memberships: ["United Nations", "European Union", "G7"], focus: "European cooperation, multilateral diplomacy, climate action, and international security." },
  Türkiye: { languages: "Turkish", currency: "Turkish lira (TRY)", memberships: ["United Nations", "NATO", "G20"], focus: "Regional diplomacy, mediation, connectivity, and humanitarian engagement." },
  Germany: { languages: "German", currency: "Euro (EUR)", memberships: ["United Nations", "European Union", "G7"], focus: "European integration, climate policy, international development, and multilateralism." },
  "South Korea": { languages: "Korean", currency: "South Korean won (KRW)", memberships: ["United Nations", "OECD", "G20"], focus: "Regional security, technology, trade, and international development." },
  Australia: { languages: "English", currency: "Australian dollar (AUD)", memberships: ["United Nations", "G20", "Commonwealth"], focus: "Indo-Pacific cooperation, regional security, development, and climate resilience." }
};

const topics = {
  climate: {
    title: "Climate Change and Global Cooperation",
    committee: "United Nations Environment Programme (UNEP)",
    description: "How can countries strengthen international cooperation to address climate change?",
    issue: "Climate change affects countries differently. Delegates must consider emissions, climate finance, renewable energy, and support for vulnerable communities.",
    positions: {
      Indonesia: "Emphasise climate finance, forest protection, a just energy transition, and the principle of common but differentiated responsibilities.",
      "United States": "Emphasise clean-energy innovation, international partnerships, investment, and practical emissions-reduction targets.",
      "United Kingdom": "Support stronger climate commitments, clean-energy investment, and international climate finance.",
      Japan: "Promote energy innovation, technological cooperation, and practical decarbonisation strategies.",
      France: "Support ambitious climate agreements, renewable energy, and stronger international environmental cooperation.",
      Türkiye: "Emphasise climate adaptation, sustainable development, and support for countries facing environmental challenges.",
      Germany: "Promote renewable energy, energy efficiency, and international climate cooperation.",
      "South Korea": "Emphasise green technology, industrial innovation, and sustainable economic development.",
      Australia: "Focus on climate resilience, regional cooperation, and support for vulnerable Pacific communities."
    }
  },
  cyber: {
    title: "Cybersecurity and Digital Governance",
    committee: "United Nations General Assembly (UNGA)",
    description: "How can the international community promote a safe, open, and responsible digital environment?",
    issue: "Countries must balance cybersecurity, privacy, digital access, technological innovation, and international cooperation.",
    positions: {
      Indonesia: "Promote digital inclusion, national capacity-building, international cooperation, and respect for national sovereignty.",
      "United States": "Emphasise secure digital infrastructure, innovation, international partnerships, and responsible technology development.",
      "United Kingdom": "Support international cyber norms, digital resilience, and cooperation against cyber threats.",
      Japan: "Promote secure digital systems, technological innovation, and international standards.",
      France: "Emphasise digital rights, responsible technology, and multilateral governance.",
      Türkiye: "Focus on digital sovereignty, cybersecurity capacity, and international cooperation.",
      Germany: "Promote privacy, data protection, and a rules-based digital environment.",
      "South Korea": "Emphasise advanced digital infrastructure, innovation, and cybersecurity education.",
      Australia: "Support regional cybersecurity cooperation, resilience, and digital capacity-building."
    }
  },
  rights: {
    title: "Human Rights and Equal Access to Education",
    committee: "United Nations Human Rights Council (UNHRC)",
    description: "How can countries improve equal access to quality education while protecting human rights?",
    issue: "Access to education can be affected by poverty, discrimination, conflict, disability, and unequal digital access.",
    positions: {
      Indonesia: "Promote inclusive education, equal opportunities, cultural respect, and international cooperation in education.",
      "United States": "Emphasise equal opportunity, educational access, innovation, and protection of individual rights.",
      "United Kingdom": "Support inclusive education, international development, and protection against discrimination.",
      Japan: "Promote educational quality, technology access, and international educational partnerships.",
      France: "Emphasise equal access, secular public education, and the protection of fundamental rights.",
      Türkiye: "Focus on inclusive education, access for displaced communities, and international support.",
      Germany: "Promote equal opportunities, vocational education, and inclusive learning environments.",
      "South Korea": "Emphasise educational quality, digital literacy, and access to modern learning resources.",
      Australia: "Promote inclusive education, opportunities for remote communities, and regional partnerships."
    }
  },
  security: {
    title: "International Peace and Security",
    committee: "United Nations Security Council (UNSC)",
    description: "How can the international community strengthen conflict prevention and peaceful cooperation?",
    issue: "Delegates should consider diplomacy, mediation, international law, humanitarian cooperation, and conflict prevention.",
    positions: {
      Indonesia: "Emphasise peaceful dispute settlement, dialogue, respect for sovereignty, and the role of multilateral institutions.",
      "United States": "Promote international partnerships, diplomacy, and cooperation through multilateral institutions.",
      "United Kingdom": "Support conflict prevention, international law, diplomacy, and coordinated international action.",
      Japan: "Emphasise peaceful dialogue, international law, and cooperation for regional stability.",
      France: "Promote multilateral diplomacy, conflict prevention, and respect for international law.",
      Türkiye: "Emphasise mediation, dialogue, regional stability, and diplomatic engagement.",
      Germany: "Support multilateral institutions, peaceful conflict resolution, and international cooperation.",
      "South Korea": "Promote dialogue, regional stability, and international cooperation.",
      Australia: "Emphasise regional partnerships, diplomacy, and international peacebuilding."
    }
  }
};

const quizQuestions = [
  {
    question: "In which year was the United Nations established?",
    options: ["1919", "1945", "1955", "1965"],
    answer: 1,
    explanation: "The United Nations was officially established on 24 October 1945, following the Second World War."
  },
  {
    question: "Where is the headquarters of the United Nations located?",
    options: ["Geneva", "Paris", "New York City", "London"],
    answer: 2,
    explanation: "The UN headquarters is located in New York City, United States."
  },
  {
    question: "What does ASEAN stand for?",
    options: [
      "Association of Southeast Asian Nations",
      "Asian Security and Economic Alliance Network",
      "Association of Southern European Nations",
      "Asian Social and Environmental Network"
    ],
    answer: 0,
    explanation: "ASEAN stands for the Association of Southeast Asian Nations. It was established in 1967."
  },
  {
    question: "Which of these countries is a founding member of ASEAN?",
    options: ["Japan", "Indonesia", "Australia", "South Korea"],
    answer: 1,
    explanation: "Indonesia was one of ASEAN's five founding members in 1967."
  },
  {
    question: "What is diplomacy primarily concerned with?",
    options: [
      "Organising international sports",
      "Managing relations between countries",
      "Controlling global businesses",
      "Creating national constitutions"
    ],
    answer: 1,
    explanation: "Diplomacy involves managing relations between countries through dialogue, negotiation, and cooperation."
  },
  {
    question: "What does MUN stand for?",
    options: [
      "Modern United Nations",
      "Model United Nations",
      "Member Union Network",
      "Multilateral Universal Negotiation"
    ],
    answer: 1,
    explanation: "MUN stands for Model United Nations, an educational simulation of UN meetings and discussions."
  },
  {
    question: "How many permanent members are there in the UN Security Council?",
    options: ["3", "5", "10", "15"],
    answer: 1,
    explanation: "The Security Council has five permanent members: China, France, Russia, the United Kingdom, and the United States."
  },
  {
    question: "Which agreement is a major international agreement on climate change?",
    options: [
      "Paris Agreement",
      "Treaty of Versailles",
      "Geneva Convention",
      "Rome Statute"
    ],
    answer: 0,
    explanation: "The Paris Agreement, adopted in 2015, aims to strengthen the global response to climate change."
  },
  {
    question: "What is the main purpose of negotiation in diplomacy?",
    options: [
      "To avoid communication",
      "To impose one country's opinion",
      "To find mutually acceptable solutions",
      "To end international organisations"
    ],
    answer: 2,
    explanation: "Negotiation allows parties to discuss differences and work towards mutually acceptable solutions."
  },
  {
    question: "What does the abbreviation SDGs refer to?",
    options: [
      "Social Development Groups",
      "Sustainable Development Goals",
      "Strategic Diplomatic Guidelines",
      "State Development Guarantees"
    ],
    answer: 1,
    explanation: "The Sustainable Development Goals are 17 global goals adopted by UN member states in 2015."
  }
];

const skillsModules = [
  {
    id: "negotiation", title: "Negotiation", category: "Diplomatic practice", duration: "5–7 minutes",
    description: "Find common ground while representing different interests.",
    lesson: "Negotiation is a structured conversation in which parties try to reach an agreement. A good negotiator prepares priorities, understands the other side's concerns, asks questions, and looks for realistic areas of compromise.",
    steps: ["Identify your delegation's main interests and priorities.", "Listen carefully before proposing solutions.", "Separate essential needs from points where you can compromise.", "Suggest options that provide value to more than one party.", "Summarise any agreement clearly and check that everyone understands it."],
    example: "Two countries disagree about a shared river. Instead of arguing only about water allocation, they could discuss seasonal data-sharing, conservation projects, and a joint monitoring committee.",
    question: "During a negotiation, another delegate rejects your proposal. What is the most constructive next step?",
    options: ["Ask which parts concern them and explore an alternative that addresses those concerns.", "Repeat the same proposal more loudly.", "End all communication immediately."], answer: 0,
    explanation: "Asking about the other party's concerns helps identify interests and possible areas of compromise."
  },
  {
    id: "public-speaking", title: "Diplomatic Public Speaking", category: "Communication", duration: "5–7 minutes",
    description: "Deliver clear, respectful, and persuasive statements.",
    lesson: "Diplomatic speaking communicates a position confidently without dismissing other perspectives. Strong statements are organised, evidence-aware, concise, and respectful.",
    steps: ["Open by addressing the committee or audience appropriately.", "State your country's position in one clear sentence.", "Give one or two reasons supported by relevant information.", "Offer a practical recommendation or call for cooperation.", "Close politely and stay within the allotted speaking time."],
    example: "The delegation of Indonesia believes regional cooperation is essential. We encourage member states to exchange reliable information and strengthen practical partnerships.",
    question: "What makes an MUN opening speech effective?",
    options: ["Using as many complicated words as possible.", "Clearly presenting the country's position, reasons, and proposed action.", "Criticising every country with a different position."], answer: 1,
    explanation: "A strong opening speech is structured, relevant to the agenda, and clear about the delegation's position."
  },
  {
    id: "active-listening", title: "Active Listening", category: "Communication", duration: "4–6 minutes",
    description: "Understand what others mean before responding.",
    lesson: "Active listening means giving attention to a speaker, checking your understanding, and responding to the point they actually made. It can reduce misunderstandings and help build trust.",
    steps: ["Give the speaker your attention without interrupting.", "Notice the main concern behind their statement.", "Ask a neutral question if something is unclear.", "Paraphrase their point to check your understanding.", "Respond to the concern rather than making assumptions."],
    example: "You might say: 'If I understand correctly, your delegation is concerned about the cost of implementation. Is that right?'",
    question: "A delegate explains a concern you had not considered. What should you do?",
    options: ["Ignore it and continue reading your prepared statement.", "Assume you already know what they mean.", "Acknowledge the concern and ask a clarifying question."], answer: 2,
    explanation: "Acknowledging and clarifying a concern shows that you are listening and helps prevent misinterpretation."
  },
  {
    id: "intercultural", title: "Intercultural Communication", category: "Global citizenship", duration: "5–7 minutes",
    description: "Communicate respectfully across cultural differences.",
    lesson: "Intercultural communication involves recognising that people may have different communication styles, customs, and perspectives. Avoid stereotypes: individuals are not defined entirely by their nationality or culture.",
    steps: ["Use respectful and inclusive language.", "Avoid generalisations about nationalities or communities.", "Ask politely when you are unsure about a custom or meaning.", "Be mindful of different communication styles and language levels.", "Focus on the individual and the issue being discussed."],
    example: "If a participant is quiet during a meeting, do not assume they have nothing to contribute. Invite their views respectfully and allow time to respond.",
    question: "You are unsure whether a phrase may be culturally inappropriate. What is best?",
    options: ["Avoid assumptions and politely ask for clarification or use more neutral wording.", "Make a joke about the culture.", "Assume every person from that country has the same view."], answer: 0,
    explanation: "Respectful clarification and neutral language help create an inclusive discussion without relying on stereotypes."
  },
  {
    id: "fact-checking", title: "Fact-checking and Information Literacy", category: "Research skills", duration: "5–7 minutes",
    description: "Evaluate information before using it in diplomacy or MUN.",
    lesson: "Diplomatic arguments should be based on reliable information. Check who published a claim, when it was published, what evidence supports it, and whether independent reputable sources report similar facts.",
    steps: ["Identify the original publisher and author where available.", "Check the publication date and whether the information is current.", "Look for primary sources such as official reports or statements.", "Compare the claim with other reputable independent sources.", "Separate confirmed facts, analysis, and opinion."],
    example: "Before citing a statistic in an MUN speech, locate the original report, check its date and methodology, and make sure the statistic measures the issue you are discussing.",
    question: "You find a dramatic statistic in an anonymous social media post. What should you do before citing it?",
    options: ["Use it immediately because it supports your argument.", "Find the original source and verify it against reliable sources.", "Share it without mentioning where it came from."], answer: 1,
    explanation: "A claim should be traced to its source and checked before it is used as evidence."
  }
];

const navItems = ["Home", "Learning Dashboard", "Global Explorer", "Country Comparison", "International News", "Diplomacy Assistant", "MUN Simulator", "Crisis Room", "Diplomatic Skills Lab", "Position Paper", "Diplomacy Quiz", "Global Diplomacy Database", "IR Timeline", "Advanced MUN Conference", "Diplomatic Portfolio", "Final Quality & Deployment"];

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [newsItems, setNewsItems] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState("");
  const [newsCategory, setNewsCategory] = useState("All topics");
  const [newsLastUpdated, setNewsLastUpdated] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [compareA, setCompareA] = useState("Indonesia");
  const [compareB, setCompareB] = useState("Türkiye");
  const [chatInput, setChatInput] = useState("");
  const [chatSessions, setChatSessions] = useState([
    {
      id: 1,
      title: "Getting started",
      messages: [{ from: "bot", text: "Hello, delegate! I'm your Diplomacy Assistant. Ask me about diplomacy, the UN, ASEAN, MUN, international law, or global issues. You can also choose a suggested question below." }]
    }
  ]);
  const [activeChatId, setActiveChatId] = useState(1);
  const messages = chatSessions.find((chat) => chat.id === activeChatId)?.messages || [];

  const [munCountry, setMunCountry] = useState("Indonesia");
  const [munTopic, setMunTopic] = useState("climate");
  const [speech, setSpeech] = useState("");
  const [response, setResponse] = useState("");
  const [evaluation, setEvaluation] = useState(null);
  const [paperCountry, setPaperCountry] = useState("Indonesia");
  const [paperTopic, setPaperTopic] = useState("climate");
  const [paperText, setPaperText] = useState("");

  // Phase 9: Diplomatic Crisis Room scenarios and progress.
  const crisisScenarios = [
    {
      id: "humanitarian",
      title: "Cross-border humanitarian emergency",
      context: "Severe flooding has affected communities in two neighbouring countries. Roads are damaged, families need temporary shelter, and both governments are requesting international support.",
      question: "What should the countries prioritise first?",
      choices: [
        { label: "Create a joint humanitarian coordination team and share verified needs assessments.", score: 100, feedback: "Strong diplomatic approach. Joint coordination helps reduce duplicated efforts and directs support towards urgent needs." },
        { label: "Each government should act alone and avoid sharing information.", score: 35, feedback: "Independent action can sometimes be necessary, but avoiding coordination may slow assistance and leave needs unmet." },
        { label: "Wait until every detail is known before offering any assistance.", score: 20, feedback: "Reliable information matters, but urgent needs can be addressed while assessments continue." }
      ],
      lesson: "Humanitarian coordination, information-sharing, and regional cooperation."
    },
    {
      id: "trade",
      title: "Regional trade disruption",
      context: "A disruption at a major regional transport route is delaying essential goods. Businesses and communities across several countries are affected.",
      question: "Which first diplomatic step is most constructive?",
      choices: [
        { label: "Convene affected governments and logistics representatives to discuss temporary arrangements.", score: 100, feedback: "A dialogue involving affected parties can identify practical options and reduce uncertainty." },
        { label: "Publicly blame one country before the facts are established.", score: 15, feedback: "Premature blame can increase tension. Establishing facts and opening communication are more constructive first steps." },
        { label: "Ignore the issue because trade is only a domestic concern.", score: 25, feedback: "Cross-border supply routes affect multiple countries, so regional consultation can be valuable." }
      ],
      lesson: "Economic diplomacy, consultation, and confidence-building."
    },
    {
      id: "misinformation",
      title: "Misinformation and public trust",
      context: "False claims about a neighbouring country are spreading online and creating public concern. Officials from both countries want to prevent misunderstanding.",
      question: "How can the governments respond responsibly?",
      choices: [
        { label: "Set up a trusted communication channel and publish timely, evidence-based updates.", score: 100, feedback: "A strong choice. Transparent communication and verified information can reduce confusion while keeping dialogue open." },
        { label: "Repeat unverified claims to show how serious the situation is.", score: 10, feedback: "Repeating unverified claims may amplify misinformation. Verify information before sharing it." },
        { label: "Stop all communication between the two governments.", score: 20, feedback: "Suspending communication removes an important way to clarify misunderstandings. Dialogue is usually more useful." }
      ],
      lesson: "Public diplomacy, responsible communication, and trust-building."
    }
  ];
  const [crisisScenarioId, setCrisisScenarioId] = useState("humanitarian");
  const [crisisChoice, setCrisisChoice] = useState("");
  const [crisisResult, setCrisisResult] = useState(null);
  const [crisisHistory, setCrisisHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("diplomate_crisis_history") || "[]"); }
    catch { return []; }
  });
  // Phase 10: Diplomatic Skills Lab progress.
  const [skillProgress, setSkillProgress] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("diplomate_skill_progress") || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch { return []; }
  });
  const [activeSkillId, setActiveSkillId] = useState("negotiation");
  const [skillAnswer, setSkillAnswer] = useState("");
  const [skillFeedback, setSkillFeedback] = useState(null);

  useEffect(() => {
    localStorage.setItem("diplomate_skill_progress", JSON.stringify(skillProgress));
  }, [skillProgress]);

  const activeSkill = skillsModules.find((module) => module.id === activeSkillId) || skillsModules[0];

  function openSkillModule(moduleId) {
    setActiveSkillId(moduleId);
    setSkillAnswer("");
    setSkillFeedback(null);
  }

  function submitSkillChallenge() {
    if (skillAnswer === "") return;
    const correct = Number(skillAnswer) === activeSkill.answer;
    setSkillFeedback({ correct, explanation: activeSkill.explanation });
    if (correct && !skillProgress.includes(activeSkill.id)) {
      setSkillProgress((previous) => [...previous, activeSkill.id]);
      recordActivity(`Completed Diplomatic Skills Lab: ${activeSkill.title}`);
    }
  }

  // PHASES 11–15: persistent learning tools and conference practice.
  const [dbSearch, setDbSearch] = useState("");
  const [dbRegion, setDbRegion] = useState("All regions");
  const [timelineFilter, setTimelineFilter] = useState("All");
  const [researchNotes, setResearchNotes] = useState(() => { try { return JSON.parse(localStorage.getItem("diplomate_research_notes") || "[]"); } catch { return []; } });
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [noteCategory, setNoteCategory] = useState("Country research");
  const [conferenceTopic, setConferenceTopic] = useState("Climate Change and Global Cooperation");
  const [speakerName, setSpeakerName] = useState("");
  const [speakerQueue, setSpeakerQueue] = useState([]);
  const [conferenceSeconds, setConferenceSeconds] = useState(60);
  const [conferenceRunning, setConferenceRunning] = useState(false);
  const [conferenceMotion, setConferenceMotion] = useState("Moderated caucus");
  const [conferenceLog, setConferenceLog] = useState([]);
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioGoal, setPortfolioGoal] = useState("Complete my first MUN conference");
  const [qualityChecks, setQualityChecks] = useState(() => { try { return JSON.parse(localStorage.getItem("diplomate_quality_checks") || "{}"); } catch { return {}; } });
  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabShow, setVocabShow] = useState(false);
  const [vocabAnswers, setVocabAnswers] = useState({});

  useEffect(() => { localStorage.setItem("diplomate_research_notes", JSON.stringify(researchNotes)); }, [researchNotes]);
  useEffect(() => { localStorage.setItem("diplomate_quality_checks", JSON.stringify(qualityChecks)); }, [qualityChecks]);
  useEffect(() => {
    if (!conferenceRunning) return;
    const id = setInterval(() => setConferenceSeconds(v => { if (v <= 1) { setConferenceRunning(false); return 0; } return v - 1; }), 1000);
    return () => clearInterval(id);
  }, [conferenceRunning]);

  const diplomacyRecords = [
    ...countries.map(c => ({ name:c.name, type:"Country", region:c.region, capital:c.capital, detail:c.description, focus:countryProfiles[c.name]?.focus || "International cooperation" })),
    {name:"United Nations",type:"Organisation",region:"Global",capital:"New York City",detail:"An intergovernmental organisation established in 1945 to promote peace, security, human rights, and cooperation.",focus:"Peace and security; development; human rights"},
    {name:"ASEAN",type:"Organisation",region:"Southeast Asia",capital:"Jakarta Secretariat",detail:"Regional organisation founded in 1967 to promote cooperation and stability in Southeast Asia.",focus:"Regional integration and cooperation"},
    {name:"African Union",type:"Organisation",region:"Africa",capital:"Addis Ababa",detail:"Continental organisation promoting unity, peace, and development among African states.",focus:"Continental cooperation and development"},
    {name:"European Union",type:"Organisation",region:"Europe",capital:"Brussels and other EU cities",detail:"Political and economic union of European member states.",focus:"European integration, common policies, and cooperation"},
    {name:"World Trade Organization",type:"Organisation",region:"Global",capital:"Geneva",detail:"Organisation dealing with global rules of trade between nations.",focus:"Trade negotiations and dispute settlement"}
  ];
  const irEvents = [
    {year:"1648",title:"Peace of Westphalia",category:"Diplomacy",detail:"A series of treaties commonly associated with the development of the modern state system and principles of sovereignty."},
    {year:"1815",title:"Congress of Vienna",category:"Diplomacy",detail:"European powers negotiated a settlement after the Napoleonic Wars and sought a balance of power."},
    {year:"1919",title:"Treaty of Versailles",category:"Treaty",detail:"The treaty formally ended the state of war between Germany and the Allied Powers after World War I."},
    {year:"1945",title:"United Nations founded",category:"Organisation",detail:"The UN Charter entered into force on 24 October 1945."},
    {year:"1948",title:"Universal Declaration of Human Rights",category:"Human rights",detail:"The UN General Assembly adopted a landmark declaration setting out fundamental human rights."},
    {year:"1967",title:"ASEAN established",category:"Organisation",detail:"Five Southeast Asian states signed the Bangkok Declaration establishing ASEAN."},
    {year:"1995",title:"World Trade Organization established",category:"Organisation",detail:"The WTO began operating, providing a framework for multilateral trade rules."},
    {year:"2015",title:"Paris Agreement adopted",category:"Treaty",detail:"Countries adopted a global agreement to address climate change."},
    {year:"2015",title:"Sustainable Development Goals adopted",category:"Development",detail:"UN member states adopted the 2030 Agenda with 17 Sustainable Development Goals."}
  ];
  const vocabulary = [
    ["Bilateral", "Involving two countries or parties."], ["Multilateral", "Involving three or more countries or parties."],
    ["Sovereignty", "The authority of a state to govern itself."], ["Consensus", "A general agreement reached by a group."],
    ["Resolution", "A formal decision or expression of opinion adopted by an organisation."], ["Amendment", "A proposed or adopted change to a draft text."],
    ["Mediation", "A process in which a neutral third party helps parties communicate and seek agreement."], ["Caucus", "A meeting or discussion among delegates during a conference."],
    ["Ratification", "Formal confirmation by a state that it agrees to be bound by a treaty."], ["Diplomatic immunity", "Legal protections granted to diplomats to help them perform official duties independently."]
  ];
  const qualityItems = ["All navigation links open the correct page", "All forms accept and validate user input", "Mobile and desktop layouts have been checked", "Buttons and interactive controls work", "Content has been proofread for clarity", "External facts and sources have been verified", "Privacy and local-storage notices are visible", "Print layout and certificate have been tested", "Project dependencies and build have been checked", "Production hosting and domain have been configured"];
  const filteredRecords = diplomacyRecords.filter(r => (dbRegion === "All regions" || r.region === dbRegion) && `${r.name} ${r.region} ${r.type} ${r.detail}`.toLowerCase().includes(dbSearch.toLowerCase()));
  function saveResearchNote() { if (!noteTitle.trim() || !noteBody.trim()) return; setResearchNotes(old => [{id:Date.now(),title:noteTitle.trim(),body:noteBody.trim(),category:noteCategory,date:new Date().toLocaleString()},...old]); setNoteTitle(""); setNoteBody(""); recordActivity("Saved a research notebook entry"); }
  function addSpeaker() { if (!speakerName.trim()) return; setSpeakerQueue(old => [...old,{id:Date.now(),name:speakerName.trim()}]); setSpeakerName(""); }
  function addConferenceLog() { setConferenceLog(old => [{id:Date.now(),motion:conferenceMotion,topic:conferenceTopic,date:new Date().toLocaleTimeString()},...old]); }

  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);

  // Phase 8: learning progress saved in this browser using localStorage.
  const [quizHistory, setQuizHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("diplomate_quiz_history") || "[]"); }
    catch { return []; }
  });
  const [munHistory, setMunHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("diplomate_mun_history") || "[]"); }
    catch { return []; }
  });
  const [learningGoals, setLearningGoals] = useState(() => {
    const defaults = [
      { id: 1, title: "Learn the basics of the United Nations", done: false },
      { id: 2, title: "Understand ASEAN and regional cooperation", done: false },
      { id: 3, title: "Complete a Diplomacy Quiz", done: false },
      { id: 4, title: "Practise an MUN opening speech", done: false },
      { id: 5, title: "Write a position paper", done: false },
      { id: 6, title: "Analyse an international news story", done: false }
    ];
    try {
      const saved = JSON.parse(localStorage.getItem("diplomate_learning_goals"));
      return Array.isArray(saved) ? saved : defaults;
    } catch { return defaults; }
  });
  const [recentActivity, setRecentActivity] = useState(() => {
    try { return JSON.parse(localStorage.getItem("diplomate_recent_activity") || "[]"); }
    catch { return []; }
  });

  useEffect(() => { localStorage.setItem("diplomate_quiz_history", JSON.stringify(quizHistory)); }, [quizHistory]);
  useEffect(() => { localStorage.setItem("diplomate_mun_history", JSON.stringify(munHistory)); }, [munHistory]);
  useEffect(() => { localStorage.setItem("diplomate_learning_goals", JSON.stringify(learningGoals)); }, [learningGoals]);
  useEffect(() => { localStorage.setItem("diplomate_recent_activity", JSON.stringify(recentActivity)); }, [recentActivity]);

  function recordActivity(message) {
    setRecentActivity((previous) => [
      { id: Date.now(), message, date: new Date().toLocaleString() },
      ...previous
    ].slice(0, 12));
  }

  // Save Crisis Room results in this browser.
  useEffect(() => {
    localStorage.setItem("diplomate_crisis_history", JSON.stringify(crisisHistory));
  }, [crisisHistory]);

  const activeCrisis = crisisScenarios.find((scenario) => scenario.id === crisisScenarioId) || crisisScenarios[0];

  function submitCrisisDecision() {
    const selected = activeCrisis.choices[Number(crisisChoice)];
    if (!selected) return;
    const result = {
      id: Date.now(),
      scenario: activeCrisis.title,
      score: selected.score,
      feedback: selected.feedback,
      lesson: activeCrisis.lesson,
      date: new Date().toLocaleString()
    };
    setCrisisResult(result);
    setCrisisHistory((previous) => [result, ...previous].slice(0, 30));
    recordActivity(`Completed Crisis Room simulation: ${activeCrisis.title} (${selected.score}/100)`);
  }

  function resetCrisisScenario(nextId = crisisScenarioId) {
    setCrisisScenarioId(nextId);
    setCrisisChoice("");
    setCrisisResult(null);
  }

  // Quiz countdown timer
  useEffect(() => {
    if (!quizStarted || quizFinished || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished, timeLeft]);

  useEffect(() => {
    if (quizStarted && timeLeft === 0 && !quizFinished) {
      finishQuiz();
    }
  }, [timeLeft, quizStarted, quizFinished]);

  const newsQueries = {
    "All topics": "international diplomacy OR United Nations OR global affairs",
    "Conflict & security": "international conflict OR peace negotiations OR security council",
    "Climate": "climate change OR climate diplomacy OR environment",
    "Economy": "global economy OR international trade OR inflation",
    "Human rights": "human rights OR refugees OR humanitarian",
    "Asia-Pacific": "ASEAN OR Indo-Pacific OR Southeast Asia diplomacy"
  };

  async function loadInternationalNews(category = newsCategory) {
    setNewsLoading(true);
    setNewsError("");
    try {
      const query = encodeURIComponent(newsQueries[category] || newsQueries["All topics"]);
      const endpoint = `https://api.gdeltproject.org/api/v2/doc/doc?query=${query}&mode=ArtList&format=json&maxrecords=24&sort=DateDesc`;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`News service returned ${response.status}`);
      const data = await response.json();
      const articles = (data.articles || []).filter((item) => item.title && item.url);
      setNewsItems(articles);
      setNewsLastUpdated(new Date().toLocaleString());
      if (articles.length === 0) setNewsError("No articles were returned for this topic. Try another category or refresh.");
    } catch (error) {
      setNewsItems([]);
      setNewsError("Couldn't load live news. Check your internet connection and try again. If this continues, the news provider may be temporarily unavailable.");
      console.error("DIPLOMATE news error:", error);
    } finally {
      setNewsLoading(false);
    }
  }

  useEffect(() => {
    if (activePage === "International News" && newsItems.length === 0 && !newsLoading && !newsError) {
      loadInternationalNews(newsCategory);
    }
  }, [activePage]);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()) ||
    country.region.toLowerCase().includes(search.toLowerCase())
  );

  function getAssistantReply(question) {
    const q = question.toLowerCase();
    if (q.includes("asean")) return "ASEAN, the Association of Southeast Asian Nations, is a regional organisation that promotes cooperation, stability, and economic development among its member states.";
    if (q.includes("mun") || q.includes("model united nations")) return "Model United Nations is an educational simulation of the United Nations. Students represent countries, discuss global issues, negotiate, and develop draft resolutions.";
    if (q.includes("human rights")) return "Human rights are basic rights and freedoms that belong to every person. The Universal Declaration of Human Rights, adopted in 1948, is a key international document.";
    if (q.includes("climate")) return "Climate diplomacy involves international negotiations and cooperation on climate change. The Paris Agreement is an important example of a global climate agreement.";
    if (q.includes("security") || q.includes("peace")) return "International peace and security are central goals of the United Nations. Diplomacy, mediation, international law, and cooperation can help prevent conflicts.";
    if (q.includes("un") || q.includes("united nations")) return "The United Nations was established in 1945. Its main purposes include maintaining international peace and security, promoting human rights, and supporting international cooperation.";
    if (q.includes("indonesia")) return "Indonesia is a founding member of ASEAN and is known for its free and active foreign policy. It also participates in the United Nations and other international organisations.";
    if (q.includes("diplomacy") || q.includes("international relations")) return "Diplomacy is the practice of managing relationships between countries through dialogue, negotiation, cooperation, and peaceful problem-solving.";
    return "That's an interesting question! Try asking me about diplomacy, ASEAN, the United Nations, MUN, human rights, climate change, or international peace and security.";
  }

  function sendMessage(text = chatInput) {
    if (!text.trim()) return;
    const question = text.trim();
    setChatSessions((previous) => previous.map((chat) =>
      chat.id === activeChatId
        ? {
            ...chat,
            title: chat.messages.length <= 1 ? question.slice(0, 34) : chat.title,
            messages: [...chat.messages, { from: "user", text: question }, { from: "bot", text: getAssistantReply(question) }]
          }
        : chat
    ));
    setChatInput("");
  }

  function startNewChat() {
    const nextId = Date.now();
    setChatSessions((previous) => [
      ...previous,
      { id: nextId, title: "New conversation", messages: [{ from: "bot", text: "A new conversation has started. What would you like to learn about today?" }] }
    ]);
    setActiveChatId(nextId);
    setChatInput("");
  }

  function clearCurrentChat() {
    setChatSessions((previous) => previous.map((chat) =>
      chat.id === activeChatId
        ? { ...chat, title: "New conversation", messages: [{ from: "bot", text: "This conversation has been cleared. Ask me a new question whenever you're ready." }] }
        : chat
    ));
    setChatInput("");
  }

  function createSpeech() {
    const topic = topics[munTopic];
    const position = topic.positions[munCountry];
    const text = `Honourable Chair, distinguished delegates,

The delegation of ${munCountry} is honoured to participate in this discussion on ${topic.title.toLowerCase()}.

${munCountry} recognises that this issue requires meaningful international cooperation. ${position}

We encourage all member states to strengthen dialogue, share knowledge, and develop practical solutions that respect the needs and circumstances of every country.

Our delegation looks forward to working constructively with fellow delegates to achieve a fair, inclusive, and sustainable outcome.

Thank you, Honourable Chair.`;
    setSpeech(text);
    setEvaluation(null);
  }

  function evaluateResponse() {
    if (!response.trim()) {
      setEvaluation({ score: 0, feedback: "Please write your response before requesting feedback." });
      return;
    }

    const words = response.trim().split(/\s+/).length;
    const hasDiplomacy = /cooperation|collaboration|dialogue|negotiation|resolution|together|international|delegation|propose|support/i.test(response);
    const hasSolution = /should|propose|recommend|establish|support|develop|implement|create|strengthen/i.test(response);
    const hasEvidence = /because|therefore|for example|such as|evidence|data|according/i.test(response);
    const score = Math.min(100,
      25 +
      (words >= 35 ? 20 : words >= 15 ? 10 : 0) +
      (hasDiplomacy ? 20 : 0) +
      (hasSolution ? 20 : 0) +
      (hasEvidence ? 15 : 0)
    );

    const tips = [];
    if (words < 35) tips.push("Develop your argument with more explanation and detail.");
    if (!hasDiplomacy) tips.push("Use diplomatic language and show willingness to cooperate.");
    if (!hasSolution) tips.push("Suggest a practical action or policy solution.");
    if (!hasEvidence) tips.push("Add a reason, example, or supporting evidence.");
    if (tips.length === 0) tips.push("Good work! Your response includes diplomatic language, a proposed solution, and supporting reasoning.");

    setEvaluation({ score, feedback: tips.join(" ") });
    const record = { id: Date.now(), country: munCountry, topic: topics[munTopic].title, score, date: new Date().toLocaleString() };
    setMunHistory((previous) => [record, ...previous].slice(0, 30));
    recordActivity(`Completed an MUN practice response (${score}/100)`);
  }

  function startQuiz() {
    setAnswers({});
    setCurrentQuestion(0);
    setTimeLeft(600);
    setQuizFinished(false);
    setQuizStarted(true);
  }

  function chooseAnswer(optionIndex) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion]: optionIndex
    }));
  }

  function finishQuiz() {
    if (quizFinished || !quizStarted) return;
    setQuizFinished(true);
    const result = { id: Date.now(), score: quizScore, total: quizQuestions.length, date: new Date().toLocaleString() };
    setQuizHistory((previous) => [result, ...previous].slice(0, 30));
    recordActivity(`Completed the Diplomacy Quiz (${quizScore * 10}/100)`);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  const quizScore = quizQuestions.reduce(
    (total, question, index) => total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const currentTopic = topics[munTopic];
  const currentPosition = currentTopic.positions[munCountry];
  const question = quizQuestions[currentQuestion];

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');
        :root { font-family:'DM Sans',sans-serif; color:#18253c; background:#f7f5ef; }
        * { box-sizing:border-box; }
        body { margin:0; }
        button,input,select,textarea { font:inherit; }
        button { cursor:pointer; }
        .app { min-height:100vh; }
        .navbar { display:flex; justify-content:space-between; align-items:center; gap:20px; padding:18px 7%; background:#101d35; color:white; position:sticky; top:0; z-index:10; }
        .brand { font-family:'Playfair Display',serif; font-size:25px; font-weight:800; letter-spacing:1px; color:#e9c77b; }
        .brand span { color:white; }
        .navlinks { display:flex; flex-wrap:wrap; gap:8px; }
        .navlinks button { color:#e8edf5; background:transparent; border:0; padding:9px 12px; border-radius:7px; font-size:13px; }
        .navlinks button:hover,.navlinks button.active { background:#293954; color:#f0d18c; }
        .hero { padding:90px 8%; background:linear-gradient(115deg,#101d35 0%,#20395a 70%,#344e69 100%); color:white; }
        .eyebrow { color:#b28b42; letter-spacing:3px; text-transform:uppercase; font-size:12px; font-weight:700; }
        .hero .eyebrow { color:#e9c77b; }
        h1,h2,h3 { font-family:'Playfair Display',serif; }
        .hero h1 { font-size:clamp(42px,7vw,76px); line-height:1.05; max-width:760px; margin:18px 0; }
        .hero p { max-width:650px; line-height:1.8; color:#d6dfeb; }
        .gold-button { background:#e9c77b; color:#15233a; border:0; border-radius:6px; padding:13px 20px; font-weight:700; margin-top:15px; }
        .gold-button:hover { background:#f4d99b; }
        .section { padding:65px 8%; }
        .section-heading { font-size:36px; margin:8px 0 12px; color:#172641; }
        .muted { color:#687487; line-height:1.7; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; margin-top:28px; }
        .card { background:white; border:1px solid #e8e5dc; border-radius:12px; padding:23px; box-shadow:0 5px 18px #1726410a; }
        .card h3 { margin:10px 0; font-size:21px; }
        .icon { font-size:30px; }
        .tag { display:inline-block; color:#856323; background:#f7efd9; border-radius:20px; padding:6px 10px; font-size:11px; font-weight:700; }
        .explorer-layout { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:25px; }
        .country-list { display:grid; gap:9px; max-height:440px; overflow:auto; }
        .country-option { border:1px solid #e5e3dc; background:white; border-radius:8px; padding:13px; text-align:left; color:#18253c; }
        .country-option.selected { border:2px solid #c39a47; background:#fffaf0; }
        .search { width:100%; padding:13px; border:1px solid #d8dce2; border-radius:7px; margin-bottom:12px; }
        .country-flag { font-size:44px; }
        .chatbox { background:white; border:1px solid #e6e3dc; border-radius:12px; padding:18px; }
        .messages { height:300px; overflow:auto; display:flex; flex-direction:column; gap:12px; margin-bottom:15px; }
        .message { max-width:85%; padding:12px 14px; border-radius:12px; line-height:1.6; font-size:14px; white-space:pre-wrap; }
        .message.bot { background:#f0f2f5; align-self:flex-start; }
        .message.user { background:#20395a; color:white; align-self:flex-end; }
        .chat-form { display:flex; gap:8px; }
        .chat-form input { flex:1; min-width:0; padding:12px; border:1px solid #d8dce2; border-radius:7px; }
        .chat-form button { background:#20395a; color:white; border:0; border-radius:7px; padding:0 18px; }
        .assistant-layout { display:grid; grid-template-columns:235px minmax(0,1fr); gap:18px; max-width:1100px; margin:25px auto 0; align-items:start; }
        .assistant-sidebar { background:#101d35; color:white; border-radius:12px; padding:16px; }
        .assistant-sidebar h3 { color:#f0d18c; margin:5px 0 12px; }
        .assistant-side-button { display:block; width:100%; text-align:left; border:0; border-radius:7px; padding:10px; margin:5px 0; color:#e8edf5; background:transparent; font-size:12px; overflow-wrap:anywhere; }
        .assistant-side-button.active,.assistant-side-button:hover { background:#293954; color:#f0d18c; }
        .assistant-actions { display:flex; flex-wrap:wrap; gap:8px; margin:12px 0; }
        .assistant-small-button { border:1px solid #d9dce2; background:white; color:#263750; border-radius:7px; padding:8px 11px; font-size:12px; }
        .assistant-small-button:hover { border-color:#c39a47; background:#fffaf0; }
        .assistant-topic { display:inline-block; border:1px solid #e7dfcc; background:#fffaf0; color:#76551c; border-radius:20px; padding:8px 12px; font-size:12px; margin:4px; }
        .assistant-topic:hover { background:#f7efd9; }
        .assistant-note { background:#f7f1e4; border-left:4px solid #c39a47; padding:12px 14px; border-radius:5px; font-size:12px; line-height:1.6; margin-top:14px; }
        .mun-panel { max-width:950px; margin:25px auto 0; }
        .field { margin:18px 0; }
        .field label { display:block; font-weight:700; font-size:13px; margin-bottom:8px; }
        .field select,.field textarea { width:100%; padding:13px; border:1px solid #d8dce2; border-radius:7px; background:white; color:#18253c; }
        .field textarea { min-height:155px; resize:vertical; line-height:1.6; }
        .position-box { background:#f7f1e4; border-left:4px solid #c39a47; padding:17px; border-radius:5px; line-height:1.7; margin:15px 0; }
        .speech-box { white-space:pre-wrap; line-height:1.8; background:#f6f7f9; border-radius:8px; padding:20px; font-size:14px; }
        .score { font-family:'Playfair Display',serif; font-size:42px; color:#98712b; }
        .footer { background:#101d35; color:#cbd4e1; text-align:center; padding:30px 8%; font-size:13px; line-height:1.8; }
        .quiz-panel { max-width:800px; margin:25px auto 0; }
        .quiz-top { display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; align-items:center; }
        .timer { font-weight:700; color:#856323; background:#f7efd9; border-radius:8px; padding:10px 14px; }
        .progress-track { height:8px; background:#e9e7e1; border-radius:10px; overflow:hidden; margin:18px 0; }
        .progress-fill { height:100%; background:#c39a47; transition:width .2s; }
        .quiz-option { width:100%; display:block; text-align:left; padding:15px; border:1px solid #e1e2e5; background:white; border-radius:8px; margin:10px 0; color:#18253c; }
        .quiz-option:hover { border-color:#c39a47; }
        .quiz-option.chosen { border:2px solid #c39a47; background:#fff9eb; }
        .quiz-option:disabled { cursor:default; opacity:1; }
        .result-item { padding:16px 0; border-bottom:1px solid #e7e5df; line-height:1.7; }
        .correct { color:#24734b; font-weight:700; }
        .incorrect { color:#a33c3c; font-weight:700; }
        .compare-controls { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:24px 0; }
        .compare-select { width:100%; padding:13px; border:1px solid #d8dce2; border-radius:7px; background:white; color:#18253c; }
        .comparison-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:20px; }
        .comparison-card { background:white; border:1px solid #e8e5dc; border-radius:12px; padding:22px; min-width:0; }
        .comparison-card h3 { margin:8px 0 16px; }
        .comparison-row { padding:13px 0; border-bottom:1px solid #eceae3; line-height:1.65; font-size:13px; }
        .comparison-row:last-child { border-bottom:0; }
        .comparison-label { color:#856323; text-transform:uppercase; letter-spacing:1px; font-size:10px; font-weight:700; margin-bottom:5px; }
        .membership-list { display:flex; flex-wrap:wrap; gap:6px; }
        .membership-chip { display:inline-block; padding:5px 8px; border-radius:15px; background:#f7efd9; color:#76551c; font-size:11px; }
        .phase-intro { max-width:850px; line-height:1.8; }
        .phase-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px; margin:22px 0; }
        .phase-stat { background:#f7f1e4; border-radius:9px; padding:14px; }
        .phase-input { width:100%; padding:12px; border:1px solid #d8dce2; border-radius:7px; background:white; color:#18253c; }
        .phase-list { display:grid; gap:10px; }
        .phase-row { border:1px solid #e8e5dc; border-radius:9px; padding:14px; background:white; }
        .timeline { border-left:3px solid #c39a47; margin:25px 0 25px 10px; padding-left:22px; display:grid; gap:18px; }
        .timeline-item { position:relative; background:white; border:1px solid #e8e5dc; border-radius:9px; padding:16px; }
        .timeline-item:before { content:""; position:absolute; width:11px; height:11px; border-radius:50%; background:#c39a47; left:-30px; top:21px; }
        .flashcard { min-height:190px; display:grid; place-items:center; text-align:center; background:linear-gradient(135deg,#101d35,#29415f); color:white; border-radius:14px; padding:28px; cursor:pointer; }
        .flashcard h3 { font-size:32px; color:#f0d18c; }
        @media(max-width:720px) {
          .navbar { align-items:flex-start; flex-direction:column; padding:15px 5%; }
          .navlinks { gap:3px; }
          .navlinks button { padding:8px; font-size:12px; }
          .hero { padding:65px 6%; }
          .section { padding:48px 6%; }
          .explorer-layout { grid-template-columns:1fr; }
          .assistant-layout { grid-template-columns:1fr; }
          .compare-controls,.comparison-grid { grid-template-columns:1fr; }
          .section-heading { font-size:30px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="brand">DIPLO<span>MATE.</span></div>
        <div className="navlinks">
          {navItems.map((item) => (
            <button
  key={item}
  className={activePage === item ? "active" : ""}
  onClick={() => setActivePage(item)}
>
  {item}
</button>
          ))}
        </div>
      </nav>

      {activePage === "Learning Dashboard" && (
        <section className="section">
          <div className="eyebrow">Your journey · Your progress</div>
          <h2 className="section-heading">Learning Dashboard</h2>
          <p className="muted">Track your diplomacy learning journey. Your progress is saved in this browser on this device.</p>
          <div className="dashboard-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 16, margin: "28px 0" }}>
            <div className="card"><div className="tag">QUIZ ATTEMPTS</div><div className="score">{quizHistory.length}</div><p className="muted">Completed quizzes</p></div>
            <div className="card"><div className="tag">BEST QUIZ SCORE</div><div className="score">{quizHistory.length ? Math.max(...quizHistory.map((item) => item.score)) * 10 : 0}<span style={{ fontSize: 16 }}>/100</span></div><p className="muted">Your highest result</p></div>
            <div className="card"><div className="tag">MUN PRACTICE</div><div className="score">{munHistory.length}</div><p className="muted">Responses evaluated</p></div>
            <div className="card"><div className="tag">LEARNING GOALS</div><div className="score">{learningGoals.filter((goal) => goal.done).length}<span style={{ fontSize: 16 }}>/{learningGoals.length}</span></div><p className="muted">Goals completed</p></div>
          </div>

          <div className="dashboard-columns" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, alignItems: "start" }}>
            <div className="card">
              <span className="tag">YOUR CHECKLIST</span><h3>Learning Goals</h3>
              <p className="muted">Tick each goal when you have completed it.</p>
              <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
                {learningGoals.map((goal) => (
                  <label key={goal.id} style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", lineHeight: 1.5 }}>
                    <input type="checkbox" checked={goal.done} onChange={(event) => setLearningGoals((previous) => previous.map((item) => item.id === goal.id ? { ...item, done: event.target.checked } : item))} style={{ marginTop: 4, accentColor: "#c49a45" }} />
                    <span style={{ textDecoration: goal.done ? "line-through" : "none", opacity: goal.done ? 0.6 : 1 }}>{goal.title}</span>
                  </label>
                ))}
              </div>
              <button className="gold-button" style={{ marginTop: 22 }} onClick={() => setLearningGoals((previous) => previous.map((goal) => ({ ...goal, done: false })))}>Reset checklist</button>
            </div>

            <div style={{ display: "grid", gap: 20 }}>
              <div className="card"><span className="tag">QUIZ HISTORY</span><h3>Recent Quiz Results</h3>
                {quizHistory.length === 0 ? <p className="muted">No quiz attempts yet. Complete the Diplomacy Quiz to see your results here.</p> : quizHistory.slice(0, 5).map((item) => <div key={item.id} className="result-item"><strong>{item.score * 10}/100</strong><p className="muted" style={{ margin: "4px 0" }}>{item.score} of {item.total} correct · {item.date}</p></div>)}
              </div>
              <div className="card"><span className="tag">MUN PRACTICE</span><h3>Recent Practice Scores</h3>
                {munHistory.length === 0 ? <p className="muted">No MUN practice recorded yet. Submit a response in MUN Simulator to begin tracking.</p> : munHistory.slice(0, 5).map((item) => <div key={item.id} className="result-item"><strong>{item.score}/100</strong><p className="muted" style={{ margin: "4px 0" }}>{item.country} · {item.topic}</p><p className="muted" style={{ margin: "4px 0" }}>{item.date}</p></div>)}
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 20 }}><span className="tag">ACTIVITY LOG</span><h3>Recent Activity</h3>
            {recentActivity.length === 0 ? <p className="muted">Your learning activities will appear here as you use DIPLOMATE.</p> : <div style={{ display: "grid", gap: 12 }}>{recentActivity.slice(0, 8).map((item) => <div key={item.id} style={{ borderBottom: "1px solid #e9e4d9", paddingBottom: 10 }}><strong>{item.message}</strong><p className="muted" style={{ margin: "4px 0 0", fontSize: 12 }}>{item.date}</p></div>)}</div>}
          </div>
          <p className="muted" style={{ fontSize: 12, marginTop: 18 }}>Note: Progress is stored locally in your browser. It may not appear on another device or browser, and clearing browser data can remove it.</p>
        </section>
      )}

      {activePage === "Global Diplomacy Database" && (
        <section className="section">
          <div className="eyebrow">PHASE 11 · EXPLORE · RESEARCH · CONNECT</div><h2 className="section-heading">Global Diplomacy Database</h2>
          <p className="muted phase-intro">A quick-reference directory of selected countries and international organisations. Use it as a starting point for research, then verify current membership and policy information through official sources.</p>
          <div className="card">
            <div className="field"><label>Search countries or organisations</label><input className="phase-input" value={dbSearch} onChange={e=>setDbSearch(e.target.value)} placeholder="Try Indonesia, ASEAN, human rights..." /></div>
            <div className="field"><label>Filter by region</label><select className="phase-input" value={dbRegion} onChange={e=>setDbRegion(e.target.value)}>{["All regions",...new Set(diplomacyRecords.map(r=>r.region))].map(v=><option key={v}>{v}</option>)}</select></div>
            <span className="tag">{filteredRecords.length} DATABASE ENTRIES</span>
          </div>
          <div className="phase-grid">{filteredRecords.map(r=><article className="card" key={r.name}><span className="tag">{r.type} · {r.region}</span><h3>{r.name}</h3><p className="muted"><strong>Capital / Headquarters:</strong> {r.capital}</p><p className="muted">{r.detail}</p><div className="position-box"><strong>Diplomatic focus</strong><p style={{marginBottom:0}}>{r.focus}</p></div></article>)}</div>
          <p className="muted" style={{fontSize:12}}>Database note: this is a curated educational directory, not a live official registry. Some organisational details and memberships may change.</p>
        </section>
      )}

      {activePage === "IR Timeline" && (
        <section className="section"><div className="eyebrow">PHASE 12 · HISTORY · CONTEXT · DIPLOMACY</div><h2 className="section-heading">International Relations Timeline</h2><p className="muted phase-intro">Explore selected milestones that shaped diplomacy, international institutions, human rights, trade, and global cooperation.</p>
          <div className="assistant-actions">{["All","Diplomacy","Treaty","Organisation","Human rights","Development"].map(c=><button key={c} className="assistant-small-button" onClick={()=>setTimelineFilter(c)} style={timelineFilter===c?{background:"#20395a",color:"white"}:{}}>{c}</button>)}</div>
          <div className="timeline">{irEvents.filter(e=>timelineFilter==="All"||e.category===timelineFilter).map((e,i)=><article className="timeline-item" key={`${e.year}-${e.title}`}><span className="tag">{e.category}</span><div style={{fontSize:24,fontWeight:700,color:"#9a742f",marginTop:8}}>{e.year}</div><h3>{e.title}</h3><p className="muted" style={{marginBottom:0}}>{e.detail}</p></article>)}</div>
          <div className="assistant-note">Historical overview: dates and descriptions are concise learning summaries. Consult primary documents and academic sources for detailed historical analysis.</div>
        </section>
      )}

      {activePage === "Advanced MUN Conference" && (
        <section className="section"><div className="eyebrow">PHASE 13 · DEBATE · MODERATE · COLLABORATE</div><h2 className="section-heading">Advanced MUN Conference Simulator</h2><p className="muted phase-intro">Run a simplified committee session with a speakers' list, caucus motions, and a speaking timer.</p>
          <div className="mun-panel"><div className="card"><span className="tag">COMMITTEE SETTINGS</span><div className="field"><label>Agenda</label><select className="phase-input" value={conferenceTopic} onChange={e=>setConferenceTopic(e.target.value)}>{["Climate Change and Global Cooperation","Cybersecurity and Digital Governance","Human Rights and Equal Access to Education","International Peace and Security"].map(t=><option key={t}>{t}</option>)}</select></div>
            <div className="field"><label>Motion type</label><select className="phase-input" value={conferenceMotion} onChange={e=>setConferenceMotion(e.target.value)}><option>Moderated caucus</option><option>Unmoderated caucus</option><option>Motion to introduce a draft resolution</option><option>Motion to extend debate</option><option>Motion to close debate</option></select></div><button className="gold-button" onClick={addConferenceLog}>Record motion</button>
          </div>
          <div className="card" style={{marginTop:18}}><span className="tag">SPEAKERS' LIST</span><h3>Delegate queue</h3><div className="chat-form"><input className="phase-input" value={speakerName} onChange={e=>setSpeakerName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addSpeaker()} placeholder="Delegate / country name"/><button onClick={addSpeaker}>Add</button></div>
            <div className="phase-list" style={{marginTop:15}}>{speakerQueue.length===0?<p className="muted">No speakers yet. Add delegates to create the queue.</p>:speakerQueue.map((sp,i)=><div className="phase-row" key={sp.id} style={{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center"}}><strong>{i+1}. {sp.name}</strong><button className="assistant-small-button" onClick={()=>setSpeakerQueue(q=>q.filter(x=>x.id!==sp.id))}>Remove</button></div>)}</div>
          </div>
          <div className="card" style={{marginTop:18}}><span className="tag">SPEAKING TIMER</span><div className="score">{String(Math.floor(conferenceSeconds/60)).padStart(2,"0")}:{String(conferenceSeconds%60).padStart(2,"0")}</div><div className="assistant-actions"><button className="assistant-small-button" onClick={()=>{setConferenceSeconds(30);setConferenceRunning(false)}}>30 sec</button><button className="assistant-small-button" onClick={()=>{setConferenceSeconds(60);setConferenceRunning(false)}}>1 min</button><button className="assistant-small-button" onClick={()=>{setConferenceSeconds(90);setConferenceRunning(false)}}>90 sec</button><button className="assistant-small-button" onClick={()=>{setConferenceSeconds(120);setConferenceRunning(false)}}>2 min</button></div><button className="gold-button" onClick={()=>setConferenceRunning(v=>!v)} disabled={conferenceSeconds===0}>{conferenceRunning?"Pause timer":"Start timer"}</button> <button className="assistant-small-button" onClick={()=>{setConferenceRunning(false);setConferenceSeconds(60)}}>Reset</button></div>
          <div className="card" style={{marginTop:18}}><h3>Session record</h3>{conferenceLog.length===0?<p className="muted">Recorded motions will appear here.</p>:conferenceLog.map(item=><div className="result-item" key={item.id}><strong>{item.motion}</strong><p className="muted">{item.topic} · {item.date}</p></div>)}</div></div>
        </section>
      )}

      {activePage === "Diplomatic Portfolio" && (
        <section className="section"><div className="eyebrow">PHASE 14 · REFLECT · CELEBRATE · GROW</div><h2 className="section-heading">Diplomatic Portfolio & Certificates</h2><p className="muted phase-intro">Create a personal learning summary from the progress recorded in this browser. The certificate is a self-generated participation record, not an accredited qualification.</p>
          <div className="card"><div className="field"><label>Your display name</label><input className="phase-input" value={portfolioName} onChange={e=>setPortfolioName(e.target.value)} placeholder="Enter your name"/></div><div className="field"><label>Learning goal</label><input className="phase-input" value={portfolioGoal} onChange={e=>setPortfolioGoal(e.target.value)}/></div>
            <div className="phase-grid"><div className="phase-stat"><span className="tag">SKILLS MODULES</span><div className="score">{skillProgress.length}/{skillsModules.length}</div></div><div className="phase-stat"><span className="tag">QUIZ ATTEMPTS</span><div className="score">{quizHistory.length}</div></div><div className="phase-stat"><span className="tag">MUN PRACTICE</span><div className="score">{munHistory.length}</div></div><div className="phase-stat"><span className="tag">RESEARCH NOTES</span><div className="score">{researchNotes.length}</div></div></div>
            <h3>Completed skills</h3>{skillProgress.length?skillsModules.filter(m=>skillProgress.includes(m.id)).map(m=><div className="result-item" key={m.id}>✓ {m.title}</div>):<p className="muted">Complete modules in Diplomatic Skills Lab to build your portfolio.</p>}
            <button className="gold-button" onClick={()=>window.print()}>Print / Save portfolio as PDF</button>
          </div>
          <div className="card" style={{marginTop:20,textAlign:"center",padding:36,border:"3px double #c39a47"}}><div className="brand" style={{color:"#98712b"}}>DIPLO<span style={{color:"#172641"}}>MATE.</span></div><p className="eyebrow" style={{marginTop:22}}>CERTIFICATE OF LEARNING</p><h2 style={{fontSize:32}}>Certificate of Participation</h2><p className="muted">This recognises that</p><h2 style={{fontSize:30,color:"#98712b"}}>{portfolioName.trim()||"Your Name"}</h2><p className="muted">has participated in DIPLOMATE's educational diplomacy learning activities.</p><p><strong>Learning goal:</strong> {portfolioGoal}</p><p className="muted">Skills modules completed: {skillProgress.length} · Quiz attempts: {quizHistory.length} · MUN practice sessions: {munHistory.length}</p><p className="muted" style={{fontSize:12}}>Generated locally · {new Date().toLocaleDateString()}</p><button className="gold-button" onClick={()=>window.print()}>Print certificate</button></div>
        </section>
      )}

      {activePage === "Final Quality & Deployment" && (
        <section className="section"><div className="eyebrow">PHASE 15 · POLISH · TEST · PUBLISH</div><h2 className="section-heading">Final UI/UX, Quality Check & Deployment</h2><p className="muted phase-intro">Use this release checklist before publishing DIPLOMATE. Tick items only after testing them in your actual development and hosting environment.</p>
          <div className="card"><div className="quiz-top"><div><span className="tag">RELEASE READINESS</span><h3>{qualityItems.filter((_,i)=>qualityChecks[i]).length} of {qualityItems.length} checks completed</h3></div><div className="score">{Math.round(qualityItems.filter((_,i)=>qualityChecks[i]).length/qualityItems.length*100)}%</div></div><div className="progress-track"><div className="progress-fill" style={{width:`${qualityItems.filter((_,i)=>qualityChecks[i]).length/qualityItems.length*100}%`}}/></div><div className="phase-list">{qualityItems.map((item,i)=><label className="phase-row" key={item} style={{display:"flex",gap:12,alignItems:"flex-start",cursor:"pointer"}}><input type="checkbox" checked={!!qualityChecks[i]} onChange={e=>setQualityChecks(old=>({...old,[i]:e.target.checked}))} style={{marginTop:5,accentColor:"#c39a47"}}/><span style={{textDecoration:qualityChecks[i]?"line-through":"none",opacity:qualityChecks[i]?.65:1}}>{item}</span></label>)}</div><button className="assistant-small-button" style={{marginTop:16}} onClick={()=>setQualityChecks({})}>Reset checklist</button></div>
          <div className="phase-grid"><div className="card"><span className="tag">STEP 01</span><h3>Run locally</h3><p className="muted">Install dependencies, start the development server, and inspect the browser console for errors.</p><code>npm install</code><br/><code>npm run dev</code></div><div className="card"><span className="tag">STEP 02</span><h3>Build for production</h3><p className="muted">Run the production build and resolve warnings or errors before publishing.</p><code>npm run build</code></div><div className="card"><span className="tag">STEP 03</span><h3>Deploy</h3><p className="muted">Publish the build folder using a hosting provider such as Vercel, Netlify, or GitHub Pages. Configure the correct build command and output directory for your setup.</p></div></div>
          <div className="assistant-note"><strong>Deployment status:</strong> This checklist guides the release process; it does not deploy the website automatically. Confirm hosting, environment settings, accessibility, privacy, and production behaviour yourself before sharing the public URL.</div>
        </section>
      )}

      {activePage === "Home" && (
        <>
          <header className="hero">
            <div className="eyebrow">Explore · Understand · Lead</div>
            <h1>Discover the World of Diplomacy.</h1>
            <p>DIPLOMATE is a learning platform designed to introduce young people to international relations, global issues, and the art of diplomacy.</p>
            <button className="gold-button" onClick={() => setActivePage("MUN Simulator")}>Try MUN Simulator →</button>
          </header>
          <section className="section">
            <div className="eyebrow">Your diplomatic journey starts here</div>
            <h2 className="section-heading">Learn. Discuss. Make an Impact.</h2>
            <p className="muted">Explore countries, understand global affairs, and practise diplomatic communication in one place.</p>
            <div className="grid">
              <div className="card"><div className="icon">🌍</div><h3>Global Explorer</h3><p className="muted">Discover countries, capitals, regions, and their international perspectives.</p><button className="gold-button" onClick={() => setActivePage("Global Explorer")}>Explore countries</button></div>
              <div className="card"><div className="icon">⚖️</div><h3>Country Comparison</h3><p className="muted">Compare two countries’ diplomatic profiles side by side.</p><button className="gold-button" onClick={() => setActivePage("Country Comparison")}>Compare countries</button></div>
              <div className="card"><div className="icon">💬</div><h3>Diplomacy Assistant</h3><p className="muted">Learn basic concepts about the UN, diplomacy, and international relations.</p><button className="gold-button" onClick={() => setActivePage("Diplomacy Assistant")}>Ask a question</button></div>
              <div className="card"><div className="icon">🎙️</div><h3>MUN Simulator</h3><p className="muted">Represent a country, prepare a speech, and practise diplomatic debate.</p><button className="gold-button" onClick={() => setActivePage("MUN Simulator")}>Start simulation</button></div>
              <div className="card"><div className="icon">📄</div><h3>Position Paper Generator</h3><p className="muted">Build a structured MUN position paper with your country’s perspective and proposed solutions.</p><button className="gold-button" onClick={() => setActivePage("Position Paper")}>Create position paper</button></div>
              <div className="card"><div className="icon">🏆</div><h3>Diplomacy Quiz</h3><p className="muted">Test your knowledge of global affairs with an interactive quiz.</p><button className="gold-button" onClick={() => setActivePage("Diplomacy Quiz")}>Take the quiz</button></div>
            </div>
          </section>
        </>
      )}

      {activePage === "Global Explorer" && (
        <section className="section">
          <div className="eyebrow">Discover the world</div>
          <h2 className="section-heading">Global Explorer</h2>
          <p className="muted">Explore countries and learn about their role in international relations.</p>
          <div className="explorer-layout">
            <div>
              <input className="search" placeholder="Search country or region..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <div className="country-list">
                {filteredCountries.map((country) => (
                  <button key={country.name} className={`country-option ${selectedCountry.name === country.name ? "selected" : ""}`} onClick={() => setSelectedCountry(country)}>
                    {country.flag} &nbsp; {country.name} <span className="muted"> · {country.region}</span>
                  </button>
                ))}
                {filteredCountries.length === 0 && <p className="muted">No countries found.</p>}
              </div>
            </div>
            <div className="card">
              <div className="country-flag">{selectedCountry.flag}</div>
              <h2>{selectedCountry.name}</h2>
              <span className="tag">{selectedCountry.region}</span>
              <p><strong>Capital:</strong> {selectedCountry.capital}</p>
              <p className="muted">{selectedCountry.description}</p>
            </div>
          </div>
        </section>
      )}

      {activePage === "Country Comparison" && (
        <section className="section">
          <div className="eyebrow">Compare · Explore · Understand</div>
          <h2 className="section-heading">Country Comparison</h2>
          <p className="muted">Compare the diplomatic profiles of two countries side by side.</p>

          <div className="compare-controls">
            <div className="field">
              <label>First country</label>
              <select className="compare-select" value={compareA} onChange={(e) => setCompareA(e.target.value)}>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>{country.flag} {country.name}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>Second country</label>
              <select className="compare-select" value={compareB} onChange={(e) => setCompareB(e.target.value)}>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>{country.flag} {country.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="comparison-grid">
            {[compareA, compareB].map((name) => {
              const country = countries.find((item) => item.name === name);
              const profile = countryProfiles[name];
              return (
                <div className="comparison-card" key={name}>
                  <div className="country-flag">{country.flag}</div>
                  <h3>{country.name}</h3>
                  <span className="tag">{country.region}</span>
                  <div className="comparison-row">
                    <div className="comparison-label">Capital</div>
                    {country.capital}
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-label">Main language</div>
                    {profile.languages}
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-label">Currency</div>
                    {profile.currency}
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-label">International memberships</div>
                    <div className="membership-list">
                      {profile.memberships.map((membership) => (
                        <span className="membership-chip" key={membership}>{membership}</span>
                      ))}
                    </div>
                  </div>
                  <div className="comparison-row">
                    <div className="comparison-label">Diplomatic focus</div>
                    {profile.focus}
                  </div>
                  <p className="muted" style={{ fontSize: 12, marginTop: 14 }}>{country.description}</p>
                </div>
              );
            })}
          </div>
          <p className="muted" style={{ fontSize: 12, marginTop: 18 }}>
            Learning note: this is a simplified educational comparison. Memberships and diplomatic priorities can change, so verify details with official sources for academic or MUN use.
          </p>
        </section>
      )}

      {activePage === "Diplomacy Assistant" && (
        <section className="section">
          <div className="eyebrow">Ask · Learn · Understand</div>
          <h2 className="section-heading">Diplomacy Assistant</h2>
          <p className="muted">Your beginner-friendly study companion for diplomacy, international relations, and Model United Nations.</p>

          <div className="assistant-layout">
            <aside className="assistant-sidebar">
              <button className="gold-button" style={{ width: "100%", marginTop: 0 }} onClick={startNewChat}>＋ New conversation</button>
              <h3>Chat history</h3>
              {chatSessions.slice().reverse().map((chat) => (
                <button key={chat.id} className={`assistant-side-button ${activeChatId === chat.id ? "active" : ""}`} onClick={() => setActiveChatId(chat.id)}>
                  {chat.title}
                </button>
              ))}
              <p style={{ color: "#bfc9d8", fontSize: 11, lineHeight: 1.5, marginTop: 14 }}>History is kept in this page while the current website session remains open.</p>
            </aside>

            <div>
              <div className="chatbox">
                <div className="quiz-top">
                  <strong>🌐 Diplomatic Learning Desk</strong>
                  <button className="assistant-small-button" onClick={clearCurrentChat}>Clear chat</button>
                </div>
                <div className="assistant-actions">
                  <span className="tag">LEARNING TOPICS</span>
                </div>
                <div>
                  {[
                    ["United Nations", "What is the United Nations and what does it do?"],
                    ["ASEAN", "What is ASEAN and why is it important?"],
                    ["MUN", "How do I prepare for my first Model United Nations conference?"],
                    ["International law", "What is international law?"],
                    ["Human rights", "What are human rights?"],
                    ["Climate", "How does climate diplomacy work?"]
                  ].map(([label, prompt]) => (
                    <button key={label} className="assistant-topic" onClick={() => sendMessage(prompt)}>{label}</button>
                  ))}
                </div>
                <div className="messages" style={{ height: 350, marginTop: 18 }}>
                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.from}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="chat-form">
                  <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Ask a question about global affairs..." aria-label="Type your question" />
                  <button onClick={() => sendMessage()}>Send</button>
                </div>
                <p className="muted" style={{ fontSize: 11 }}>Press Enter or select Send to submit your question.</p>
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h3 style={{ marginTop: 0 }}>Need an idea to start?</h3>
                <p className="muted" style={{ marginBottom: 8 }}>Try one of these questions:</p>
                <div className="assistant-actions">
                  {[
                    "What is the difference between diplomacy and foreign policy?",
                    "What makes a strong MUN opening speech?",
                    "What are the 17 Sustainable Development Goals?"
                  ].map((prompt) => (
                    <button key={prompt} className="assistant-small-button" onClick={() => sendMessage(prompt)}>{prompt}</button>
                  ))}
                </div>
              </div>
              <div className="assistant-note"><strong>Learning note:</strong> DIPLOMATE currently uses a programmed educational response library, not a live AI model. Treat answers as introductory explanations and verify important facts with official or academic sources.</div>
            </div>
          </div>
        </section>
      )}

      {activePage === "MUN Simulator" && (
        <section className="section">
          <div className="eyebrow">Practise your diplomacy skills</div>
          <h2 className="section-heading">MUN Simulator</h2>
          <p className="muted">Step into the shoes of a UN delegate. Choose your country, explore its perspective, and prepare your diplomatic statement.</p>

          <div className="mun-panel">
            <div className="card">
              <span className="tag">STEP 01 · DELEGATION</span>
              <h3>Choose your country</h3>
              <div className="field">
                <label>Which country will you represent?</label>
                <select value={munCountry} onChange={(e) => { setMunCountry(e.target.value); setSpeech(""); setEvaluation(null); }}>
                  {countries.map((country) => <option key={country.name} value={country.name}>{country.flag} {country.name}</option>)}
                </select>
              </div>

              <span className="tag">STEP 02 · AGENDA</span>
              <h3>Select your debate topic</h3>
              <div className="field">
                <label>Choose a global issue</label>
                <select value={munTopic} onChange={(e) => { setMunTopic(e.target.value); setSpeech(""); setEvaluation(null); }}>
                  <option value="climate">Climate Change and Global Cooperation</option>
                  <option value="cyber">Cybersecurity and Digital Governance</option>
                  <option value="rights">Human Rights and Equal Access to Education</option>
                  <option value="security">International Peace and Security</option>
                </select>
              </div>

              <div className="position-box">
                <strong>Committee:</strong> {currentTopic.committee}<br />
                <strong>Agenda:</strong> {currentTopic.title}<br /><br />
                <strong>Discussion question</strong><br />
                {currentTopic.description}<br /><br />
                <strong>Issue background</strong><br />
                {currentTopic.issue}
              </div>

              <span className="tag">STEP 03 · COUNTRY POSITION</span>
              <h3>Your delegation's perspective</h3>
              <p className="muted">A simplified learning overview to help you begin your research. Verify country policies with reliable sources before a real MUN conference.</p>
              <div className="position-box">{currentPosition}</div>

              <button className="gold-button" onClick={createSpeech}>Generate Opening Speech</button>
            </div>

            {speech && (
              <div className="card" style={{ marginTop: 20 }}>
                <span className="tag">STEP 04 · OPENING SPEECH</span>
                <h3>Your draft speech</h3>
                <p className="muted">Read it, personalise it, and add verified facts or examples before presenting.</p>
                <div className="speech-box">{speech}</div>
                <button className="gold-button" onClick={() => navigator.clipboard?.writeText(speech)}>Copy speech</button>
              </div>
            )}

            <div className="card" style={{ marginTop: 20 }}>
              <span className="tag">STEP 05 · DEBATE PRACTICE</span>
              <h3>Respond as a delegate</h3>
              <p className="muted">Imagine another delegate asks: "What practical action would your country propose to address this issue, and how could other countries cooperate?"</p>
              <div className="field">
                <label>Your diplomatic response</label>
                <textarea value={response} onChange={(e) => { setResponse(e.target.value); setEvaluation(null); }} placeholder="Honourable Chair, distinguished delegates, the delegation of..." />
              </div>
              <button className="gold-button" onClick={evaluateResponse}>Evaluate my response</button>

              {evaluation && (
                <div className="position-box" style={{ marginTop: 20 }}>
                  {evaluation.score > 0 && <>
                    <div className="muted">Practice score</div>
                    <div className="score">{evaluation.score}/100</div>
                  </>}
                  <strong>Feedback</strong>
                  <p>{evaluation.feedback}</p>
                  <p className="muted" style={{ fontSize: 12 }}>This is an automated practice rubric, not an official MUN judging score.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {activePage === "Crisis Room" && (
        <section className="section">
          <div className="eyebrow">PHASE 9 · THINK · NEGOTIATE · COOPERATE</div>
          <h2 className="section-heading">Diplomatic Crisis Room</h2>
          <p className="muted">Practise responding to fictional international challenges. Consider evidence, humanitarian needs, communication, and peaceful cooperation before choosing a response.</p>

          <div className="mun-panel">
            <div className="card">
              <span className="tag">STEP 01 · SELECT A SCENARIO</span>
              <div className="field">
                <label>Choose a diplomatic challenge</label>
                <select value={crisisScenarioId} onChange={(event) => resetCrisisScenario(event.target.value)}>
                  {crisisScenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.title}</option>)}
                </select>
              </div>

              <div className="position-box">
                <strong>Situation briefing</strong>
                <p>{activeCrisis.context}</p>
                <strong>Diplomatic challenge</strong>
                <p>{activeCrisis.question}</p>
              </div>

              <span className="tag">STEP 02 · MAKE A DECISION</span>
              <div className="field">
                <label>Select the response you think is most appropriate</label>
                <div style={{ display: "grid", gap: 12, marginTop: 10 }}>
                  {activeCrisis.choices.map((choice, index) => (
                    <label key={index} className="position-box" style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", border: crisisChoice === String(index) ? "2px solid #c49a45" : undefined }}>
                      <input type="radio" name="crisis-choice" value={index} checked={crisisChoice === String(index)} onChange={(event) => { setCrisisChoice(event.target.value); setCrisisResult(null); }} style={{ marginTop: 4, accentColor: "#c49a45" }} />
                      <span>{choice.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button className="gold-button" onClick={submitCrisisDecision} disabled={crisisChoice === ""}>Submit diplomatic decision</button>

              {crisisResult && (
                <div className="position-box" style={{ marginTop: 20 }}>
                  <span className="tag">YOUR SIMULATION RESULT</span>
                  <div className="score">{crisisResult.score}/100</div>
                  <strong>Feedback</strong>
                  <p>{crisisResult.feedback}</p>
                  <strong>Key learning point</strong>
                  <p>{crisisResult.lesson}</p>
                  <p className="muted" style={{ fontSize: 12 }}>This score reflects the learning choices in this activity. It is not an official diplomatic assessment.</p>
                  <button className="gold-button" onClick={() => resetCrisisScenario()}>Try this scenario again</button>
                </div>
              )}
            </div>

            <div className="card" style={{ marginTop: 20 }}>
              <span className="tag">YOUR PRACTICE HISTORY</span>
              <h3>Recent Crisis Room Results</h3>
              {crisisHistory.length === 0 ? (
                <p className="muted">Your completed simulations will appear here. Choose a scenario and submit a decision to begin.</p>
              ) : (
                <div style={{ display: "grid", gap: 12 }}>
                  {crisisHistory.slice(0, 6).map((item) => (
                    <div key={item.id} className="result-item">
                      <strong>{item.scenario} · {item.score}/100</strong>
                      <p className="muted" style={{ margin: "4px 0" }}>{item.date}</p>
                    </div>
                  ))}
                </div>
              )}
              <p className="muted" style={{ fontSize: 12, marginTop: 14 }}>Results are saved locally in this browser on this device.</p>
            </div>
          </div>
        </section>
      )}

      {activePage === "Diplomatic Skills Lab" && (
        <section className="section">
          <div className="eyebrow">PHASE 10 · LEARN · PRACTISE · IMPROVE</div>
          <h2 className="section-heading">Diplomatic Skills Lab</h2>
          <p className="muted">Build practical skills for diplomacy, Model United Nations, and thoughtful global citizenship.</p>

          <div className="card" style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <div><span className="tag">YOUR LEARNING PROGRESS</span><h3 style={{ margin: "8px 0 4px" }}>{skillProgress.length} of {skillsModules.length} modules completed</h3><p className="muted" style={{ margin: 0, fontSize: 13 }}>Progress is saved in this browser.</p></div>
              <strong style={{ fontSize: 28, color: "#a8792c" }}>{Math.round((skillProgress.length / skillsModules.length) * 100)}%</strong>
            </div>
            <div style={{ height: 10, background: "#eee8dc", borderRadius: 20, overflow: "hidden", marginTop: 16 }}><div style={{ height: "100%", width: `${(skillProgress.length / skillsModules.length) * 100}%`, background: "#b78a43", borderRadius: 20, transition: "width .25s ease" }} /></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, marginBottom: 24 }}>
            {skillsModules.map((module, index) => {
              const completed = skillProgress.includes(module.id);
              const selected = activeSkillId === module.id;
              return <button key={module.id} onClick={() => openSkillModule(module.id)} className="card" style={{ textAlign: "left", cursor: "pointer", border: selected ? "2px solid #b78a43" : "1px solid #e8e1d5", background: selected ? "#fffaf0" : "#fff", color: "inherit" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}><span className="tag">MODULE {index + 1}</span><span style={{ fontSize: 12, color: completed ? "#26734d" : "#8a806f", fontWeight: 700 }}>{completed ? "✓ COMPLETED" : "NOT STARTED"}</span></div>
                <h3 style={{ margin: "12px 0 6px" }}>{module.title}</h3><p className="muted" style={{ fontSize: 13, minHeight: 42 }}>{module.description}</p><small className="muted">{module.duration} · {module.category}</small>
              </button>;
            })}
          </div>

          <div className="card" style={{ marginBottom: 22 }}>
            <span className="tag">{activeSkill.category.toUpperCase()} · {activeSkill.duration}</span>
            <h3 style={{ fontSize: 25, margin: "10px 0" }}>{activeSkill.title}</h3>
            <p className="muted" style={{ lineHeight: 1.75 }}>{activeSkill.lesson}</p>
            <h4>Key steps to remember</h4>
            <ol style={{ paddingLeft: 22, lineHeight: 1.85 }}>{activeSkill.steps.map((step, index) => <li key={index}>{step}</li>)}</ol>
            <div className="position-box" style={{ marginTop: 18 }}><strong>Diplomatic example</strong><p style={{ marginBottom: 0 }}>{activeSkill.example}</p></div>
            <div style={{ marginTop: 24, borderTop: "1px solid #eee7dc", paddingTop: 20 }}>
              <span className="tag">KNOWLEDGE CHECK</span><h4 style={{ fontSize: 17, lineHeight: 1.5 }}>{activeSkill.question}</h4>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {activeSkill.options.map((option, index) => <label key={index} className="position-box" style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", border: skillAnswer === String(index) ? "2px solid #b78a43" : undefined }}><input type="radio" name={`skill-${activeSkill.id}`} value={index} checked={skillAnswer === String(index)} onChange={(event) => { setSkillAnswer(event.target.value); setSkillFeedback(null); }} style={{ marginTop: 4, accentColor: "#b78a43" }} /><span>{option}</span></label>)}
              </div>
              <button className="gold-button" onClick={submitSkillChallenge} disabled={skillAnswer === ""} style={{ marginTop: 14 }}>Check my answer</button>
              {skillFeedback && <div className="position-box" style={{ marginTop: 16, borderColor: skillFeedback.correct ? "#9ac5a5" : "#d9bd8b", background: skillFeedback.correct ? "#edf7f0" : "#fff8ec" }}><strong>{skillFeedback.correct ? "Correct — well done!" : "Not quite. Keep learning!"}</strong><p style={{ marginBottom: 0 }}>{skillFeedback.explanation}</p>{!skillFeedback.correct && <small className="muted">Review the key steps and try again.</small>}</div>}
              {skillProgress.includes(activeSkill.id) && <p style={{ color: "#26734d", fontWeight: 700, marginTop: 14 }}>✓ This module is in your completed learning record.</p>}
            </div>
          </div>
          <div className="card"><h3>Why these skills matter</h3><p className="muted" style={{ lineHeight: 1.75, marginBottom: 0 }}>Diplomacy is not only about knowing international relations. It also requires careful listening, clear communication, respectful engagement, evidence-based thinking, and the ability to work with people who hold different views.</p></div>
        </section>
      )}

      {activePage === "Position Paper" && (
        <section className="section">
          <div className="eyebrow">Prepare your delegation’s policy document</div>
          <h2 className="section-heading">MUN Position Paper Generator</h2>
          <p className="muted">Create a starting draft with a clear structure. Review the facts, check official country policies, and personalise the paper before submitting it.</p>
          <div className="mun-panel">
            <div className="card">
              <span className="tag">STEP 01 · DELEGATION</span>
              <div className="field">
                <label>Representing country</label>
                <select value={paperCountry} onChange={(e) => { setPaperCountry(e.target.value); setPaperText(""); }}>
                  {countries.map((country) => <option key={country.name} value={country.name}>{country.flag} {country.name}</option>)}
                </select>
              </div>
              <span className="tag">STEP 02 · AGENDA</span>
              <div className="field">
                <label>Committee topic</label>
                <select value={paperTopic} onChange={(e) => { setPaperTopic(e.target.value); setPaperText(""); }}>
                  <option value="climate">Climate Change and Global Cooperation</option>
                  <option value="cyber">Cybersecurity and Digital Governance</option>
                  <option value="rights">Human Rights and Equal Access to Education</option>
                  <option value="security">International Peace and Security</option>
                </select>
              </div>
              <button className="gold-button" onClick={() => {
                const topic = topics[paperTopic];
                const country = countries.find((item) => item.name === paperCountry);
                const position = topic.positions[paperCountry] || "Promote international cooperation, practical solutions, and respect for the principles of the United Nations Charter.";
                const draft = `${country.flag} ${paperCountry}\nCommittee: ${topic.committee}\nTopic: ${topic.title}\n\nI. BACKGROUND OF THE ISSUE\n${topic.issue}\n\nII. COUNTRY POSITION\nThe delegation of ${paperCountry} recognises the importance of this agenda. ${position}\n\nIII. PROPOSED SOLUTIONS\nThe delegation proposes the following actions:\n1. Strengthen international and regional cooperation through dialogue and information-sharing.\n2. Support capacity-building and technical assistance, particularly for countries and communities with fewer resources.\n3. Encourage practical, measurable initiatives that respect national circumstances and international commitments.\n4. Establish regular review and cooperation mechanisms to assess progress.\n\nIV. CONCLUSION\nThe delegation of ${paperCountry} remains committed to constructive multilateral dialogue and calls upon Member States to work together towards an inclusive, peaceful, and sustainable solution.\n\nRESEARCH NOTE\nThis is an educational draft based on a simplified country-position overview. Add verified country-specific policies, UN resolutions, statistics, and properly cited sources before using it in a conference.`;
                setPaperText(draft);
              }}>Generate position paper</button>
            </div>
            {paperText && (
              <div className="card" style={{ marginTop: 20 }}>
                <span className="tag">STEP 03 · YOUR DRAFT</span>
                <h3>Position paper draft</h3>
                <p className="muted">You can edit the text directly before copying it.</p>
                <div className="field">
                  <label>Editable position paper</label>
                  <textarea rows={22} value={paperText} onChange={(e) => setPaperText(e.target.value)} />
                </div>
                <button className="gold-button" onClick={() => navigator.clipboard?.writeText(paperText)}>Copy position paper</button>
              </div>
            )}
          </div>
        </section>
      )}

      {activePage === "Diplomacy Quiz" && (
        <section className="section">
          <div className="eyebrow">Test your global knowledge</div>
          <h2 className="section-heading">Diplomacy Quiz</h2>
          <p className="muted">Challenge yourself with 10 questions about the United Nations, ASEAN, diplomacy, and international relations.</p>

          <div className="quiz-panel">
            {!quizStarted ? (
              <div className="card">
                <div className="icon">🏆</div>
                <h3>Are you ready, delegate?</h3>
                <p className="muted">Before you begin, here are the quiz rules:</p>
                <ul className="muted">
                  <li>10 multiple-choice questions.</li>
                  <li>10 minutes to complete the quiz.</li>
                  <li>Each correct answer earns 10 points.</li>
                  <li>You can move between questions and change your answers.</li>
                  <li>Your answers are submitted when you finish or when time runs out.</li>
                </ul>
                <button className="gold-button" onClick={startQuiz}>Start Quiz →</button>
              </div>
            ) : !quizFinished ? (
              <div className="card">
                <div className="quiz-top">
                  <span className="tag">QUESTION {currentQuestion + 1} OF {quizQuestions.length}</span>
                  <span className="timer">⏱ {formatTime(timeLeft)}</span>
                </div>

                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
                </div>

                <h3 style={{ fontSize: 25, lineHeight: 1.4 }}>{question.question}</h3>

                <div style={{ marginTop: 22 }}>
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      className={`quiz-option ${answers[currentQuestion] === index ? "chosen" : ""}`}
                      onClick={() => chooseAnswer(index)}
                    >
                      <strong>{String.fromCharCode(65 + index)}.</strong> &nbsp; {option}
                    </button>
                  ))}
                </div>

                <div className="quiz-top" style={{ marginTop: 25 }}>
                  <button
                    className="gold-button"
                    style={{ marginTop: 0 }}
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion((old) => old - 1)}
                  >
                    ← Previous
                  </button>

                  {currentQuestion < quizQuestions.length - 1 ? (
                    <button
                      className="gold-button"
                      style={{ marginTop: 0 }}
                      onClick={() => setCurrentQuestion((old) => old + 1)}
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      className="gold-button"
                      style={{ marginTop: 0 }}
                      onClick={finishQuiz}
                    >
                      Finish Quiz ✓
                    </button>
                  )}
                </div>

                <p className="muted" style={{ fontSize: 12, marginTop: 18 }}>
                  Answered: {Object.keys(answers).length} / {quizQuestions.length}
                </p>
              </div>
            ) : (
              <div className="card">
                <span className="tag">QUIZ COMPLETED</span>
                <h3>Your results</h3>
                <div className="score">{quizScore * 10}/100</div>
                <p className="muted">
                  You answered {quizScore} out of {quizQuestions.length} questions correctly.
                </p>
                <h3>
                  {quizScore >= 9 ? "Excellent diplomatic knowledge! 🌟" :
                   quizScore >= 7 ? "Great work, delegate! 👏" :
                   quizScore >= 5 ? "Good effort! Keep learning. 📚" :
                   "Keep practising. Every delegate starts somewhere! 🌱"}
                </h3>

                <h3 style={{ marginTop: 30 }}>Answer review</h3>
                {quizQuestions.map((item, index) => {
                  const isCorrect = answers[index] === item.answer;
                  return (
                    <div className="result-item" key={index}>
                      <strong>{index + 1}. {item.question}</strong>
                      <p className={isCorrect ? "correct" : "incorrect"}>
                        {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                      </p>
                      <p className="muted">
                        Your answer: {answers[index] === undefined ? "Not answered" : item.options[answers[index]]}
                      </p>
                      <p><strong>Correct answer:</strong> {item.options[item.answer]}</p>
                      <p className="muted">{item.explanation}</p>
                    </div>
                  );
                })}

                <button className="gold-button" onClick={startQuiz}>Try Again ↻</button>
              </div>
            )}
          </div>
        </section>
      )}

      {activePage === "International News" && (
        <section className="section">
          <div className="eyebrow">Read · Understand · Analyse</div>
          <h2 className="section-heading">International News &amp; Global Issues</h2>
          <p className="muted">
            Explore recent international headlines and think about how global events influence diplomacy,
            international cooperation, and foreign policy.
          </p>

          <div className="card" style={{ marginTop: 22 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <strong>Live international headlines</strong>
                <p className="muted" style={{ fontSize: 12, margin: "5px 0 0" }}>
                  News supplied by the GDELT Project. Headlines and publication details belong to their original publishers.
                </p>
              </div>
              <button className="gold-button" style={{ marginTop: 0 }} onClick={() => loadInternationalNews(newsCategory)} disabled={newsLoading}>
                {newsLoading ? "Loading..." : "↻ Refresh news"}
              </button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
              {Object.keys(newsQueries).map((category) => (
                <button
                  key={category}
                  className="assistant-small-button"
                  style={newsCategory === category ? { background: "#20395a", color: "white", borderColor: "#20395a" } : {}}
                  onClick={() => {
                    setNewsCategory(category);
                    loadInternationalNews(category);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {newsLastUpdated && (
              <p className="muted" style={{ fontSize: 11, marginTop: 14 }}>
                Last refreshed: {newsLastUpdated}
              </p>
            )}
            {newsLoading && <p className="muted" style={{ marginTop: 18 }}>Fetching recent headlines...</p>}
            {newsError && (
              <div className="position-box" style={{ marginTop: 18 }}>
                <strong>News update</strong>
                <p style={{ marginBottom: 0 }}>{newsError}</p>
              </div>
            )}
          </div>

          {!newsLoading && newsItems.length > 0 && (
            <div className="grid" style={{ marginTop: 22 }}>
              {newsItems.map((article, index) => (
                <article className="card" key={`${article.url}-${index}`}>
                  <span className="tag">{article.domain || "International source"}</span>
                  <h3 style={{ fontSize: 19, lineHeight: 1.45 }}>{article.title}</h3>
                  <p className="muted" style={{ fontSize: 12 }}>
                    {article.seendate ? `Reported: ${article.seendate}` : "Recent report"}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#876321", fontWeight: 700, fontSize: 13 }}
                  >
                    Read original article ↗
                  </a>
                  <p className="muted" style={{ fontSize: 12, marginTop: 14 }}>
                    **Diplomatic analysis prompt:** Which countries or international organisations may be affected, and what forms of dialogue or cooperation could help address this issue?
                  </p>
                </article>
              ))}
            </div>
          )}

          <div className="card" style={{ marginTop: 22 }}>
            <span className="tag">LEARNING FRAMEWORK</span>
            <h3>How to analyse an international news story</h3>
            <ol className="muted" style={{ lineHeight: 1.8, paddingLeft: 20 }}>
              <li><strong>Identify the actors:</strong> Which countries, organisations, or communities are involved?</li>
              <li><strong>Understand the issue:</strong> Is it political, economic, environmental, humanitarian, or security-related?</li>
              <li><strong>Consider the impact:</strong> How could it affect regional stability, trade, human rights, or cooperation?</li>
              <li><strong>Explore responses:</strong> What could the UN, ASEAN, or individual governments do?</li>
              <li><strong>Verify the facts:</strong> Compare multiple reputable reports and consult official statements before using information in MUN.</li>
            </ol>
            <p className="muted" style={{ fontSize: 11 }}>
              Note: DIPLOMATE displays headlines and links; it does not independently verify every report or generate a full article summary. Always read the original source and compare coverage.
            </p>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="brand">DIPLO<span>MATE.</span></div>
        <p>Empowering the next generation of global citizens.</p>
        <p>Learn diplomacy. Understand the world. Build a better future.</p>
        <small>Educational project · DIPLOMATE</small>
      </footer>
    </div>
  );
}

export default App;
