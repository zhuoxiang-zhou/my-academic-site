import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SITE_CONFIG, PAPERS, COURSES } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables.");
      // We will handle the missing key gracefully in the UI, but here we construct it anyway 
      // to prevent runtime crashes if methods are called, though they will fail from API side.
      client = new GoogleGenAI({ apiKey: "MISSING_KEY" });
    } else {
      client = new GoogleGenAI({ apiKey });
    }
  }
  return client;
};

// Construct a system instruction based on the site's data
const getSystemInstruction = (): string => {
  const papersList = PAPERS.map(p => `- ${p.title} (${p.year}, ${p.status}): ${p.abstract}`).join('\n');
  const coursesList = COURSES.map(c => `- ${c.code}: ${c.title} (${c.level})`).join('\n');

  return `
    You are a helpful academic assistant for ${SITE_CONFIG.name}, ${SITE_CONFIG.title} at ${SITE_CONFIG.institution}.
    Your goal is to answer questions from visitors about Dr. Sterling's research, teaching, and professional background.
    
    Here is the context about Dr. Sterling:
    
    BIO:
    ${SITE_CONFIG.bio}
    
    RESEARCH PAPERS:
    ${papersList}
    
    TEACHING:
    ${coursesList}
    
    CONTACT:
    Office: ${SITE_CONFIG.office}
    Email: ${SITE_CONFIG.email}
    
    Tone: Professional, academic, yet accessible. Be concise.
    If you don't know the answer based on this context, politely say you don't have that information and suggest contacting Dr. Sterling via email.
  `;
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: getSystemInstruction(),
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm currently experiencing connection issues. Please try again later.";
  }
};
