import Calendar from "../Calendar/Calendar";
import Weather from "../Weather/Weather";

const Window = () => {
	return (
		<div className="flex-[1_1_92%] h-max flex items-start justify-center">
			<Calendar />
			<Weather />
		</div>
	);
};

export default Window;
