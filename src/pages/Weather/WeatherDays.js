const WeatherDays = ({ day, comment, maxTemp, minTemp, iconURL }) => {
	return (
		<div className="flex flex-col w-full mx-2 self-stretch text-slate-200">
			<img src={iconURL} alt={comment} className="w-9 h-9 place-self-center" />
			<p className="text-xs place-self-center">{day}</p>
			<div className="flex  place-content-between text-xs">
				<p>
					{maxTemp} <span className="text-blue-500">⬆</span>
				</p>
				<p>
					{minTemp} <span className="text-blue-500">⬇</span>
				</p>
			</div>
		</div>
	);
};
export default WeatherDays;
