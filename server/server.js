

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to DIPLOMATE API!",
    status: "Server is running",
  });
});

function getAssistantReply(message) {
  const question = message.toLowerCase().trim();

  if (/^(hi|hello|hey|halo|hai)\b/.test(question)) {
    return "Hello! Welcome to DIPLOMATE. I'm your diplomacy learning assistant. I can help you explore international relations, understand MUN, learn about the United Nations, and develop your diplomatic skills. What would you like to learn today?";
  }

  if (question.includes("opening speech")) {
    return "An MUN opening speech is a short statement delivered by a delegate to introduce their country's position on the agenda. A good speech usually includes: (1) a formal greeting, (2) your country's perspective, (3) the importance of the issue, (4) proposed solutions, and (5) a diplomatic closing. Remember to represent your assigned country's policies.";
  }

  if (question.includes("resolution")) {
    return "A resolution paper is a formal document proposing solutions to an issue discussed in MUN. It usually contains preambulatory clauses, which explain the background and concerns, and operative clauses, which present specific actions. Delegates work together to negotiate and develop the document.";
  }

  if (question.includes("delegate") || question.includes("mun")) {
    return "Model United Nations (MUN) is an academic simulation of the United Nations. Students act as delegates representing different countries. They research international issues, deliver speeches, negotiate with other delegates, and draft resolutions. To prepare, research your country's policies, understand the agenda, and practise diplomatic communication.";
  }

  if (question.includes("diplomacy")) {
    return "Diplomacy is the practice of managing relationships between countries through communication, negotiation, and cooperation. Its main purposes include preventing conflict, building partnerships, protecting national interests, and finding peaceful solutions to international challenges.";
  }

  if (question.includes("asean")) {
    return "ASEAN (Association of Southeast Asian Nations) was established in 1967. It promotes regional cooperation, economic development, peace, and stability among its member states. Its work includes economic integration, education, cultural exchange, and regional security.";
  }

  if (question.includes("united nations") || question.includes("un ")) {
    return "The United Nations (UN) was established in 1945. It provides a platform for countries to cooperate on international peace and security, human rights, sustainable development, and humanitarian issues. Its six principal organs include the General Assembly and the Security Council.";
  }

  if (question.includes("climate")) {
    return "Climate change is a global challenge that requires international cooperation. Countries can work together through climate agreements, renewable energy development, climate financing, and sustainable policies. In MUN, delegates may discuss how to balance environmental protection with economic development.";
  }

  if (question.includes("human rights")) {
    return "Human rights are fundamental rights and freedoms that belong to every person. International cooperation helps protect these rights through international agreements, institutions, education, and humanitarian action.";
  }

  if (question.includes("foreign policy")) {
    return "Foreign policy refers to the strategies and decisions a country uses to manage its relationships with other countries. It may involve diplomacy, trade, security cooperation, international agreements, and cultural relations.";
  }

  if (question.includes("international relations")) {
    return "International Relations (IR) is the study of how countries and other global actors interact. It explores topics such as diplomacy, international organisations, conflict, cooperation, global economics, and human rights.";
  }

  return "That's an interesting question! I'm currently using DIPLOMATE's learning database. Try asking me about MUN, diplomacy, ASEAN, the United Nations, opening speeches, resolution papers, foreign policy, climate change, or human rights.";
}

app.post("/api/assistant", (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      success: false,
      reply: "Please enter a question first.",
    });
  }

  const reply = getAssistantReply(message);

  res.json({
    success: true,
    reply,
  });
});

app.listen(PORT, () => {
  console.log(`DIPLOMATE backend running at http://localhost:${PORT}`);
});
