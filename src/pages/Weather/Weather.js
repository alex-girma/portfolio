import { useEffect, useState } from "react";
import WeatherDays from "./WeatherDays";

const Weather = () => {
	// TODO: fetching weather twice for Weatherbar.js and Weather.js change it
	//const forCast = JSON.parse(localStorage.getItem("fetchedWeather")) || {};
	const [weather, setWeather] = useState({});
	const [fetchday, setFetchDay] = useState(new Date().getDate());
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (fetchday < new Date().getDate()) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const long = position.coords.longitude;
				requestWeather(lat, long);
				setFetchDay(new Date().getDate());
			});
		}
		if (localStorage.getItem("fetchedWeather")) {
			setIsLoading(false);
			return setWeather(JSON.parse(localStorage.getItem("fetchedWeather")));
		}
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const long = position.coords.longitude;
			requestWeather(lat, long);
			setFetchDay(new Date().getDate());
		});

		async function requestWeather(lat, long) {
			try {
				const url = `https://weatherdbi.herokuapp.com/data/weather/${lat},${long}`;
				const res = await fetch(`${url}`);
				const json = await res.json();
				setWeather(json);
				setIsLoading(false);
				localStorage.setItem("fetchedWeather", JSON.stringify(json));
			} catch (error) {
				console.error(error);
			}
		}
	}, [fetchday]);

	if (isLoading) return <div id="weather__window"></div>;
	return (
		<div
			id="weather__window"
			className="bg-cyan-500 bg-opacity-50 backdrop-blur-3xl rounded-md mt-2 w-1/3 cursor-default shadow-lg hidden"
		>
			<div className="flex items-center justify-center border-b-2 mb-3">
				<div>
					<img
						className="w-30 h-30 "
						alt={weather.currentConditions.comment}
						src={weather.currentConditions.iconURL}
					/>
				</div>
				<p className="text-slate-200 font-semibold text-6xl px-8 py-4">
					{weather.currentConditions.temp.c}°
				</p>
				<div className="flex flex-col text-slate-200 font-semibold">
					<p>{weather.currentConditions.comment}</p>
					<p>{weather.region.split(", ").pop()}</p>
				</div>
			</div>
			<div className="flex place-content-between mb-3">
				{weather.next_days.slice(1, 8).map((val, ind) => (
					<WeatherDays
						key={val.max_temp + val.day + ind}
						day={val.day}
						comment={val.comment}
						maxTemp={val.max_temp.c}
						minTemp={val.min_temp.c}
						iconURL={val.iconURL}
					/>
				))}
			</div>
		</div>
	);
};

export default Weather;
