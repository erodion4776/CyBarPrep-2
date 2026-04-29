const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message, context } = JSON.parse(event.body || "{}");

    // Support both Netlify and local naming conventions
    const url = process.env.LEXAI_API_URL || process.env.VITE_LEX_AI_URL;
    const apiKey = process.env.LEXAI_API_KEY || process.env.VITE_LEX_AI_KEY;
    const siteId = process.env.LEXAI_SITE || process.env.VITE_LEX_SITE_ID;

    if (!url || !apiKey || !siteId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: "Proxy Configuration Missing",
          details: `Missing: ${[!url && 'URL', !apiKey && 'KEY', !siteId && 'SITE'].filter(Boolean).join(', ')}`,
          env_keys: Object.keys(process.env).filter(k => k.includes('LEX'))
        })
      };
    }

    console.log(`[Proxy] URL: ${url.slice(0, 20)}...`);

    const response = await axios.post(url, {
      message,
      site: siteId,
      context: context || {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey.startsWith('sk-') ? `Bearer ${apiKey}` : apiKey, // Handle both raw key and bearer
        'x-api-key': apiKey // Some versions use this
      },
      timeout: 25000
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response.data)
    };

  } catch (error) {
    console.error("[Proxy Error]", error.response?.data || error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ 
        error: error.message,
        remote_details: error.response?.data || "No remote details",
        remote_status: error.response?.status
      })
    };
  }
};
