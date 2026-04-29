import { Handler } from '@netlify/functions';
import axios from 'axios';

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message, context } = JSON.parse(event.body || "{}");

    const url = process.env.LEXAI_API_URL || process.env.VITE_LEX_AI_URL;
    const apiKey = process.env.LEX_AI_KEY || process.env.VITE_LEX_AI_KEY;
    const siteId = process.env.LEXAI_SITE || process.env.VITE_LEX_SITE_ID;

    if (!url || !apiKey || !siteId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: "Server configuration missing (API_URL, API_KEY, or SITE_ID)",
          debug_env: Object.keys(process.env).filter(k => k.includes('LEX'))
        })
      };
    }

    console.log(`[Netlify Proxy] Forwarding request to Site: ${siteId.slice(0, 4)}...`);

    const response = await axios.post(url, {
      message,
      site: siteId,
      context: context || {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      timeout: 25000
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response.data)
    };

  } catch (error: any) {
    console.error("[Netlify Proxy Error]:", error.response?.data || error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ 
        error: "Strategic link failed", 
        details: error.response?.data || error.message 
      })
    };
  }
};
