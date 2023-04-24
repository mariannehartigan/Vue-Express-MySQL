import express from "express";

import {
  showMoods
} from "../controllers/mood.js";

import {
  showWeather
} from "../controllers/weather.js";


const router = express.Router();

router.get("/moods", showMoods);
router.get("/weather", showWeather);

export default router;
