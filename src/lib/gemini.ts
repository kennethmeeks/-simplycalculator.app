// Client-side wrappers for AI operations that proxy through the server
export const MODEL_FLASH = 'gemini-1.5-flash';
export const MODEL_PRO = 'gemini-1.5-pro';

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

interface AISchemaRequest {
    name: string;
    desc: string;
    isRetry?: boolean;
}

interface AICalculateRequest {
    name: string;
    inputs: Record<string, string>;
}

interface AIGuideRequest {
    name: string;
    description?: string;
}

export const fetchAISchema = async (params: AISchemaRequest) => {
    const response = await fetch('/api/ai/schema', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
    }
    
    return await response.json();
};

export const fetchAICalculation = async (params: AICalculateRequest) => {
    const response = await fetch('/api/ai/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
    }
    
    return await response.json();
};

export const fetchAIGuide = async (params: AIGuideRequest) => {
    const response = await fetch('/api/ai/guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
    }
    
    return await response.json();
};
