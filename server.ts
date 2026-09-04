import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini client to avoid crashes if GEMINI_API_KEY is not set
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// System instructions for the Zaphire Decor Virtual Assistant
const SYSTEM_PROMPT = `
You are the luxury virtual event concierge for "Zaphire Decor", an event coordination, decor, and customized product company based in Sacramento, California.
Business Information:
- Company: Zaphire Decor
- Location: Sacramento, CA (Serving Sacramento, Roseville, Elk Grove, Folsom, Davis, Rocklin, Granite Bay, and surrounding areas)
- Phone: 916-524-9415
- Email: decorzaphire@gmail.com
- Slogan: "Beautifully Coordinated. Uniquely Yours."
- Mission: "Creating memorable moments, beautifully coordinated and uniquely yours."

Services:
1. Wedding Coordinating and Planning (Day-of, month-of, master timelines, vendor logistics, ceremony rehearsal, stress-free execution)
2. Event Coordinating (Milestone birthdays, anniversaries, baby showers, bridal showers, corporate and social events)
3. Wedding and Event Decor (Luxury tablescapes, organic balloon installations, floral/drape backdrops, custom welcome signs, centerpieces)
4. Customized Products (Laser-cut acrylic signs, personalized gift boxes, custom drinkware, personalized table numbers, cake toppers, favors)
5. Customized Apparel (Personalized shirts, bridal party robes, hoodies, jackets for weddings, celebrations, reunions, and teams)

Tone & Rules:
- Warm, professional, refined, helpful, and concise.
- Never invent specific dollar prices, as every wedding or custom order is quoted individually based on vision, guest count, and scope. Encourage users to use the 'Request a Quote' form or call 916-524-9415.
- Do not invent fake founder names or awards.
- Keep responses friendly, 2-4 sentences max unless detailed questions are asked.
`;

// API route for AI Chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const ai = getAIClient();
    if (!ai) {
      // Return helpful fallback message if API key is not configured
      res.json({
        reply: "Thank you for reaching out to Zaphire Decor! For inquiries or a personalized quote for your Sacramento wedding or celebration, please call or text us at 916-524-9415 or email decorzaphire@gmail.com."
      });
      return;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    const reply = response.text || "Thank you for contacting Zaphire Decor! How may we assist with your Sacramento event?";
    res.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({
      error: 'Failed to process chat message',
      reply: "We are currently experiencing high volume. Please feel free to submit a quote request below or call us directly at 916-524-9415!"
    });
  }
});

// API route for Quote Inquiries
app.post('/api/quote', (req, res) => {
  try {
    const quoteData = req.body;
    console.log('[Zaphire Decor Inquiry Received]:', quoteData);

    // In production, forward to email service (e.g. Resend, SendGrid, or nodemailer)
    res.status(200).json({
      status: 'success',
      message: 'Inquiry received successfully. Our team will review your details shortly.'
    });
  } catch (error) {
    console.error('Quote Submission Error:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Zaphire Decor API' });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Zaphire Decor server running on http://localhost:${PORT}`);
  });
}

startServer();
