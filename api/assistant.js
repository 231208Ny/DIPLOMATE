const replyFor = (message) => {
  const q = message.toLowerCase();
  if (q.includes("asean")) return "ASEAN (the Association of Southeast Asian Nations) is a regional organisation founded in 1967. It promotes cooperation among Southeast Asian countries in areas such as economic development, regional stability, and socio-cultural exchange. Its decisions are generally based on consultation and consensus.";
  if (q.includes("mun") || q.includes("model united nations")) return "Model United Nations (MUN) is an educational simulation in which students represent countries or other stakeholders, research an agenda, deliver speeches, negotiate, and draft resolutions. To prepare, understand your committee's mandate, research your assigned country's position, collect credible evidence, and practise concise diplomatic speaking.";
  if (q.includes("human rights")) return "Human rights are basic rights and freedoms inherent to every person. The Universal Declaration of Human Rights, adopted by the UN General Assembly in 1948, is a foundational international document. In international relations, human-rights discussions include protection, accountability, equality, and cooperation.";
  if (q.includes("climate")) return "Climate diplomacy is the negotiation and cooperation between countries on climate change. The 2015 Paris Agreement is a central framework: countries submit nationally determined contributions and work towards limiting global temperature rise. Key discussion areas include mitigation, adaptation, climate finance, and loss and damage.";
  if (q.includes("international law") || q.includes("law of nations")) return "International law consists of rules and principles governing relations among states and other international actors. Important sources include treaties, customary international law, and general principles of law. The UN Charter is a key foundation for the modern international system.";
  if (q.includes("security") || q.includes("peace")) return "International peace and security are central purposes of the United Nations. Countries can support them through diplomacy, mediation, conflict prevention, peacebuilding, respect for international law, and cooperation through regional and international organisations.";
  if (q.includes("united nations") || q === "un" || q.includes("what is the un")) return "The United Nations (UN) was established in 1945. It is an international organisation whose purposes include maintaining international peace and security, developing friendly relations among nations, promoting human rights, and coordinating cooperation on global challenges. It has six principal organs, including the General Assembly and Security Council.";
  if (q.includes("indonesia")) return "Indonesia is a founding member of ASEAN and a member of the United Nations and G20. Its foreign policy is commonly described as bebas aktif (free and active): independent in determining positions while actively contributing to international cooperation and peace.";
  if (q.includes("diplomacy") || q.includes("international relations") || q.includes("foreign policy")) return "Diplomacy is the practice of managing relationships between countries and other international actors through communication, negotiation, representation, and cooperation. Foreign policy is the set of goals and actions a state pursues internationally; diplomacy is one of the main tools used to carry it out.";
  return "That's a thoughtful question. I can help with introductory topics such as diplomacy, international relations, foreign policy, ASEAN, the United Nations, MUN, international law, human rights, climate diplomacy, and peace and security. Try narrowing your question to one of these areas. For important academic work, verify details with official or scholarly sources.";
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed. Use POST." });
  }

  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message) return res.status(400).json({ success: false, error: "Please enter a question." });
  if (message.length > 2000) return res.status(413).json({ success: false, error: "Please keep your question under 2,000 characters." });

  return res.status(200).json({ success: true, reply: replyFor(message) });
}
