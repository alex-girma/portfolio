import { useEffect, useState } from "react";
import { toggleHiddenWindows } from "../../utility/functions";

const Weatherbar = () => {
	const [weather, setWeather] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [lat, setLat] = useState("");
	const [lon, setLon] = useState("");

	//TODO: Using slow but free weather api without api key req. not to push into github. change when server deployed
	useEffect(() => {
		if (localStorage.getItem("fetchedWeather")) {
			setIsLoading(false);
			return setWeather(JSON.parse(localStorage.getItem("fetchedWeather")));
		}
		requestWeather();
		async function setPositionState(pos) {
			setLat(pos.coords.latitude);
			setLon(pos.coords.longitude);
		}
		async function requestWeather() {
			try {
				await navigator.geolocation.getCurrentPosition(setPositionState);
				const pos = `${lat},${lon}`;
				const res = await fetch(`https://weatherdbi.herokuapp.com/data/weather/${pos}`);
				const json = await res.json();
				setWeather(json);
				setIsLoading(false);
				localStorage.setItem("fetchedWeather", JSON.stringify(json));
			} catch (error) {
				console.error(error);
			}
		}
	}, [lat, lon]);

	const handleClick = () => {
		toggleHiddenWindows("weather__window");
	};
	if (isLoading) return <div></div>;
	return (
		<div
			className="flex-1 flex items-center text-sm text-blue-300 hover:bg-[#19151549] rounded pl-2 cursor-default"
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
