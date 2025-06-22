export default async function handler(req, res) {
  const { input } = req.query;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );

  const data = await response.json();

  res.status(200).json(data);
}
