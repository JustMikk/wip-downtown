import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the Gemini Client
// Note: In a real production app, you should proxy this through a backend to keep the key secret.
// For this demo, we use process.env.API_KEY as requested.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a chic, empathetic senior stylist at "Wip downtown", a high-end holistic hair sanctuary. 
Your name is "Aura".
You specialize in "Conscious Beauty" — sustainable, non-toxic treatments and high-fashion styling.
Tone: Warm, authoritative yet soft, sophisticated, and "botanical luxe".
Goal: Help users choose a cut based on face shape, products based on hair type, or explain color theory.
Advice Style: Always prioritize hair health. Suggest treatments from the "Wip downtown" menu (Structural Cut, Velvet Gloss, Balayage Revival, Mineral Detox).
Keep responses concise (under 100 words) but elegant. Use terminology like "texture," "movement," "radiance," and "dimension."
`;

export const sendMessageToStylist = async (
  history: ChatMessage[],
  userMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct history for the API
    // We only send the last few messages to keep context but save tokens, 
    // though for this simple implementation we'll send the valid history.
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add the new user message
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // A bit of creativity but stable
      }
    });

    return response.text || "I'm having a moment of silence. Please ask again shortly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("My connection to the ether is weak right now. Please try again.");
  }
};