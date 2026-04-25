import { GoogleGenAI, Type } from "@google/genai";

// Use recommended stable models from gemini-api skill
export const MODEL_FLASH = 'gemini-3-flash-preview';
export const MODEL_PRO = 'gemini-3.1-pro-preview';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Helper for parsing JSON from AI strings with markdown cleanup and recovery
export const safeParseAIResponse = (text: string | undefined): any => {
    if (!text) throw new Error("Empty AI response");
    
    // Remove markdown code blocks if present
    let cleaned = text.trim();
    if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```json\n?/, '').replace(/```$/, '').trim();
    }
    
    try {
        return JSON.parse(cleaned);
    } catch (e) {
        // Basic recovery for minor truncation (unclosed object)
        if (!cleaned.endsWith('}') && cleaned.includes('{')) {
            try {
                return JSON.parse(cleaned + '}');
            } catch (e2) {
                // Try recovery for missing array/object combo if nested
                try {
                    return JSON.parse(cleaned + ']}');
                } catch (e3) {
                    throw new Error("Malformed or incomplete JSON response from AI");
                }
            }
        }
        throw new Error("Malformed JSON response from AI");
    }
};

// Common retry logic for Gemini
export const callGeminiWithRetry = async (params: any, retries = 2) => {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("AI services are currently unavailable. Please verify API configuration.");
    }
    let lastError;
    for (let i = 0; i <= retries; i++) {
        try {
            return await ai.models.generateContent(params);
        } catch (err) {
            lastError = err;
            if (i < retries) {
                // Wait before retrying (exponential backoff)
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }
    throw lastError;
};

export { ai, Type };
