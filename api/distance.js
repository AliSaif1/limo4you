export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { originLat, originLon, destinationLat, destinationLon } = req.query;

  if (!originLat || !originLon || !destinationLat || !destinationLon) {
    return res.status(400).json({ error: 'All coordinates are required' });
  }

  const API_KEY = process.env.ORS_API_KEY;

  try {
    const origin = [parseFloat(originLon), parseFloat(originLat)];
    const destination = [parseFloat(destinationLon), parseFloat(destinationLat)];

    const body = {
      locations: [origin, destination],
      metrics: ['distance', 'duration'],
      units: 'km',
    };

    const response = await fetch('https://api.openrouteservice.org/v2/matrix/driving-car', {
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    // Log full result to check structure or error
    if (result?.error || !result?.distances || !result?.durations) {
      console.error('ORS Error:', result);
      return res.status(500).json({
        error: result?.error?.message || 'Invalid response from ORS Matrix API',
      });
    }

    const distance = result.distances[0][1]; // in km
    const durationSec = result.durations[0][1]; // in seconds

    const formatDuration = (sec) => {
      const min = Math.round(sec / 60);
      if (min < 60) return `${min} min`;
      const hr = Math.floor(min / 60);
      return `${hr} hr ${min % 60} min`;
    };

    return res.status(200).json({
      distance,
      duration: formatDuration(durationSec),
    });
  } catch (err) {
    console.error('Matrix API Failed:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
