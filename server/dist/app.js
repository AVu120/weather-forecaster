"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Enable only in local dev, i.e., comment out in production.
app.use((0, cors_1.default)());
const getCitiesOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.GET_CITIES_API_KEY || "",
    },
};
app.get("/api/cities", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`https://spott.p.rapidapi.com/places/autocomplete?limit=50&type=CITY`, getCitiesOptions);
    if (!response.ok)
        return res.status(500).json({
            error: response.text || response.statusText || "Failed to fetch cities.",
        });
    const cities = yield response.json();
    res.send(cities);
}));
app.get("/api/weather", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = req.query;
    const response = yield (0, node_fetch_1.default)(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.GET_WEATHER_FORECAST_API_KEY}`, getCitiesOptions);
    if (!response.ok)
        return res.status(500).json({
            error: response.text ||
                response.statusText ||
                "Failed to fetch weather forecast",
        });
    const weatherForecast = yield response.json();
    res.send(weatherForecast);
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
