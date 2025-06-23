export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { originLat, originLon, destinationLat, destinationLon } = req.query;

  if (!originLat || !originLon || !destinationLat || !destinationLon) {
    return res.status(400).json({ error: 'Coordinates are required' });
  }

  const API_KEY = process.env.ORS_API_KEY;

  try {
    const matrixRes = await fetch('https://api.openrouteservice.org/v2/matrix/driving-car', {
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locations: [
          [parseFloat(originLon), parseFloat(originLat)],
          [parseFloat(destinationLon), parseFloat(destinationLat)]
        ],
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
