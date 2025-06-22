// /pages/api/distance.js

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { origin, destination } = req.query;

    if (!origin || !destination) {
        return res.status(400).json({ error: 'Origin and destination required' });
    }

    const API_KEY = process.env.GOOGLE_API_KEY;

    try {
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            return res.status(500).json({ error: data.error_message || 'Failed to fetch distance' });
        }

        const element = data.rows[0].elements[0];
        if (element.status !== 'OK') {
            return res.status(400).json({ error: 'Invalid location data' });
        }

        return res.status(200).json({
            distance: element.distance.value / 1000, // kilometers
            duration: element.duration.text,
        });
    } catch (error) {
        console.error('Distance API Error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
}
