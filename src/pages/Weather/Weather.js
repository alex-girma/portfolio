import { useEffect, useState } from "react";
import WeatherDays from "./WeatherDays";

const Weather = () => {
	const [forCast, setForCast] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
		setForCast(JSON.parse(localStorage.getItem("fetchedWeather")));
	}, []);
	if (isLoading) return <div></div>;
	return (
		<div
			id="weather__window"
			className="bg-cyan-500 bg-opacity-50 backdrop-blur-3xl rounded-md mt-2 w-1/3 cursor-default shadow-lg hidden"
		>
			{console.log(forCast)}
			<div className="flex items-center justify-center border-b-2 mb-3">
				<div>
					<img
						className="w-30 h-30 "
						alt={forCast.currentConditions.comment}
						src={forCast.currentConditions.iconURL}
					/>
				</div>
				<p className="text-slate-200 font-semibold text-6xl px-8 py-4">
					{forCast.currentConditions.temp.c}°
				</p>
				<div className="flex flex-col text-slate-200 font-semibold">
					<p>{forCast.currentConditions.comment}</p>
					<p>{forCast.region.split(", ").pop()}</p>
				</div>
			</div>
			<div className="flex place-content-between mb-3">
				{forCast.next_days.slice(0, 7).map((val, ind) => (
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
