export const getWeatherDetails = async (location) => {
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=79487e10b9a362eec78787a28e30f6e5`;
	const data = await fetch(URL);
	const details = await data.json();

	return details;
};
