import dotenv from "dotenv";
dotenv.config();
export const getWeatherDetails = async (location) => {
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.WEATHER_API_KEY}`;
	const data = await fetch(URL);
	const details = await data.json();

	return details;
};
