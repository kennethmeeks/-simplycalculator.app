import { GoogleGenAI, Type } from "@google/genai";

// Use recommended stable models from gemini-api skill
export const MODEL_FLASH = 'gemini-flash-latest';
export const MODEL_PRO = 'gemini-3.1-pro-preview';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Helper for parsing JSON from AI strings with legacy cleanup and robust object extraction
export const safeParseAIResponse = (text: string | undefined): any => {
    if (!text) throw new Error("Empty AI response");
    
    let cleaned = text.trim();
    
    // Attempt 1: Direct parse
    try {
        return JSON.parse(cleaned);
    } catch (e) {
        // Attempt 2: Clean markdown blocks
        const jsonBlockRegex = /```json\s?([\s\S]*?)```/g;
        const match = jsonBlockRegex.exec(cleaned);
        if (match && match[1]) {
            try {
                return JSON.parse(match[1].trim());
            } catch (e2) {
                cleaned = match[1].trim(); // Fallthrough to bracket recovery
            }
        } else if (cleaned.includes('```')) {
            cleaned = cleaned.replace(/```[a-z]*\n?/g, '').replace(/```/g, '').trim();
            try {
                return JSON.parse(cleaned);
            } catch (e3) {
                // fallthrough
            }
        }

        // Attempt 3: Bracket hunting (find first { and last })
        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            const potentialJson = cleaned.substring(firstBrace, lastBrace + 1);
            try {
                return JSON.parse(potentialJson);
            } catch (e4) {
                cleaned = potentialJson; // Fallthrough to truncation recovery
            }
        }

        // Attempt 4: Minor truncation recovery (missing closing braces)
        if (cleaned.startsWith('{')) {
            let attempt = cleaned;
            // Try adding up to 3 closing brackets
            for (let i = 0; i < 3; i++) {
                attempt += i === 0 ? '}' : (i === 1 ? ']}' : ']]}');
                try {
                    return JSON.parse(attempt);
                } catch (e5) {
                    continue;
                }
            }
        }
        
        throw new Error("Malformed or incomplete JSON response from AI");
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
