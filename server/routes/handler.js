import express from "express";
import { all_armored_vehicles } from "../vehicles_data.js";
const router = express.Router();

const vehicles = all_armored_vehicles;

const muVehicles = [{}];

router.get("/vehicles/:id", (req, res) => {
  if (req.params.id === "all-armored-vehicles") {
    res.json(vehicles);
  } else if (req.params.id === "police-government") {
    const policeGovernment = vehicles.filter(
      (vehicle) => vehicle.category === "Police & Government"
    );
    res.json(policeGovernment);
  } else if (req.params.id === "fire-rescue") {
    const fireRescue = vehicles.filter(
      (vehicle) => vehicle.category === "Fire & Rescue"
    );
    res.json(fireRescue);
  } else if (req.params.id === "military-armored") {
    const militaryArmored = vehicles.filter(
      (vehicle) => vehicle.category === "Military Armored"
    );
    res.json(militaryArmored);
  } else if (vehicles.find((vehicle) => vehicle.ID === req.params.id)) {
    const vehicle = vehicles.find((vehicle) => vehicle.ID === req.params.id);
    res.json(vehicle);
  } else {
    res.status(404).json({ error: "Category not found" });
  }

  // const vehicleId = req.params.id;
  // const vehicle = vehicles.find((vehicle) => vehicle.ID === vehicleId);

  // if (vehicle) {
  //   res.json(vehicle);
  // } else {
  //   res.status(404).json({ error: "Vehicle not found" });
  // }
});

export default router;
