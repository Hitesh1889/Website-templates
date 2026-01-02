
import { GoogleGenAI, Type } from "@google/genai";
import { TEMPLATES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getTemplateRecommendation(userInput: string) {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are NicheNexus AI, a professional web design consultant. 
    Based on the user's business description, recommend the most suitable website template from our catalog.
    
    Catalog:
    ${TEMPLATES.map(t => `- ID: ${t.id}, Name: ${t.name}, Niche: ${t.niche}, Description: ${t.description}`).join('\n')}
    
    Return your response in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userInput,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedTemplateId: { type: Type.STRING, description: "The ID of the best template match" },
            reasoning: { type: Type.STRING, description: "Why this template fits the user's business" },
            advice: { type: Type.STRING, description: "One piece of advice for their specific niche" }
          },
          required: ["recommendedTemplateId", "reasoning", "advice"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
