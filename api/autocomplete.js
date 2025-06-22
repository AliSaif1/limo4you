// /api/autocomplete.js (Vercel serverless function)

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { input } = req.query;

  if (!input || input.length < 3) {
    return res.status(400).json({ error: 'Input too short or missing' });
  }

  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${API_KEY}&components=country:ca&types=geocode`
    );

    const data = await response.json();

    if (data.status !== 'OK') {
      return res.status(500).json({ error: data.error_message || 'Google API error' });
    }

    return res.status(200).json(data.predictions);
  } catch (err) {
    console.error('Autocomplete API Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
