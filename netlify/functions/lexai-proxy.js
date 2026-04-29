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
        body: JSON.stringify({ error: "Proxy Configuration Missing" })
      };
    }

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

  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
