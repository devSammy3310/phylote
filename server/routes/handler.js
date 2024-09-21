import express from "express";
const router = express.Router();

const vehicles = [
  {
    id: 1,
    name: "Armored Vehicle A",
    image: "/path/to/imageA.jpg",
    description: "Description for Armored Vehicle A",
    specs: {
      weight: "10 tons",
      engine: "V8 Turbo Diesel",
      armor: "Level 4 Ballistic Protection",
    },
  },
  {
    id: 2,
    name: "Armored Vehicle B",
    image: "/path/to/imageB.jpg",
    description: "Description for Armored Vehicle B",
    specs: {
      weight: "8 tons",
      engine: "V6 Turbo Diesel",
      armor: "Level 3 Ballistic Protection",
    },
  },
  // Add more vehicles as needed
];

const muVehicles = [{}];

router.get("/vehicles/:id", (req, res) => {
  const vehicleId = parseInt(req.params.id);
  const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);

  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).json({ error: "Vehicle not found" });
  }
});

router.get("/vehicles", (req, res) => {
  res.end(JSON.stringify(vehicles));
});

export default router;
