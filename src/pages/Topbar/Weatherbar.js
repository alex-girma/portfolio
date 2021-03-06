import { useEffect, useState } from "react";
import { toggleHiddenWindows } from "../../utility/functions";

const Weatherbar = () => {
	// TODO: change fetching weather twice for Weatherbar.js and Weather.js. Maybe fetch weather from parent component and apss as props. fetch weather once per day
	const [weather, setWeather] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (localStorage.getItem("fetchedWeather")) {
			setIsLoading(false);
			return setWeather(JSON.parse(localStorage.getItem("fetchedWeather")));
		}
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const long = position.coords.longitude;
			requestWeather(lat, long);
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
	}, []);

	const handleClick = () => {
		toggleHiddenWindows("weather__window");
	};
	if (isLoading) return <div></div>;
	return (
		<div
			className="flex items-center text-sm text-blue-300 hover:bg-[#19151549] rounded ml-2 px-2 cursor-default"
			onClick={handleClick}
		>
			<div className="flex">
				<img
					className="pr-2 w-9 h-7 "
					alt={weather.currentConditions.comment}
					src={weather.currentConditions.iconURL}
				/>
			</div>
			<p className="pr-2">{weather.currentConditions.temp.c}°</p>
			<p>{weather.region.split(", ").pop()}</p>
		</div>
	);
};

export default Weatherbar;
