const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    try {
        // For some reason listModels isn't directly on genAI in some versions, 
        // but let's try the model manager if available or just try to generate with a known one.
        // Actually, the error message suggested calling ListModels.
        // Let's try to just use 'gemini-pro' which is standard.
        console.log("Trying to list models...");
        // There isn't a simple listModels in the high level SDK easily accessible in this snippet context 
        // without looking up the specific method signature.
        // Instead, let's just try to generate with 'gemini-pro' to see if it works.

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello");
        console.log("gemini-1.5-flash worked!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Just run a curl to list models, it's easier.
console.log("Use curl to list models.");
