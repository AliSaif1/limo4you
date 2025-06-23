export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({ error: 'Origin and destination are required' });
  }

  const API_KEY = process.env.ORS_API_KEY;

  try {
    // First, geocode origin and destination to get coordinates
    const geocode = async (query) => {
      const geoRes = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(query)}&boundary.country=CA&size=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.features || geoData.features.length === 0) {
        throw new Error(`No results found for: ${query}`);
      }

      return geoData.features[0].geometry.coordinates; // [lon, lat]
    };

    const [originCoord, destinationCoord] = await Promise.all([
      geocode(origin),
      geocode(destination)
    ]);

    // Now call Matrix API
    const matrixRes = await fetch('https://api.openrouteservice.org/v2/matrix/driving-car', {
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locations: [originCoord, destinationCoord],
        metrics: ['distance', 'duration'],
        units: 'km'
      })
    });

    const matrixData = await matrixRes.json();

    if (!matrixData.distances || !matrixData.durations) {
      throw new Error('Invalid matrix response');
    }

    const distance = matrixData.distances[0][1]; // in kilometers
    const durationSec = matrixData.durations[0][1]; // in seconds

    const formatDuration = (seconds) => {
      const minutes = Math.round(seconds / 60);
      if (minutes < 60) return `${minutes} min`;
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours} hr ${mins} min`;
    };

    return res.status(200).json({
      distance,
      duration: formatDuration(durationSec),
    });
  } catch (error) {
    console.error('ORS Distance API Error:', error);
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}
