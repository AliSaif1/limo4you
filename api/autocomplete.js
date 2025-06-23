export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { input } = req.query;

  if (!input || input.length < 3) {
    return res.status(400).json({ error: 'Input too short or missing' });
  }

  const API_KEY = process.env.LOCATIONIQ_API_KEY;

  try {
    const response = await fetch(
      `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${encodeURIComponent(input)}&limit=10&dedupe=1&countrycodes=ca,us&normalizecity=1`,
      {
        headers: {
          'User-Agent': 'Limo4All/1.0 (contact@yourdomain.com)' // Optional but helpful
        }
      }
    );

    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error('LocationIQ API returned error:', data);
      return res.status(500).json({ error: 'LocationIQ API error', detail: data });
    }

    const predictions = data.map((item) => ({
      description: item.display_name,
      terms: item.display_name.split(',').map((term) => ({ value: term.trim() })),
      lat: item.lat,
      lon: item.lon,
    }));

    return res.status(200).json(predictions);
  } catch (err) {
    console.error('LocationIQ Autocomplete API Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
