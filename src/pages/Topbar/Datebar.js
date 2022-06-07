import { useEffect, useState } from "react";
import { resetCalendarLayoutClickedDatebar } from "../../utility/functions";
import { getDate } from "../../utility/utilFunc";

const Datebar = () => {
	const [time, setTime] = useState(new Date());
	const locale = navigator.language;
	const handelClick = () => {
		resetCalendarLayoutClickedDatebar();
	};

	useEffect(() => {
		const renderTimer = 60000 - time.getSeconds() * 1000;
		const timer = setTimeout(() => setTime(new Date()), renderTimer);
		return () => clearTimeout(timer);
	});

	return (
		<div className="flex-1 text-sm text-blue-300 flex flex-col items-end pr-2 pt-1 pb-1 cursor-default">
			<div
				className="hover:bg-[#19151549] flex items-end space-x-1 pl-2 pr-2 rounded-md transition duration-500"
				onClick={handelClick}
			>
				<p>{getDate(time, locale)},</p>
				<p>
					{`${time.getHours()}`.padStart(2, 0)}:{`${time.getMinutes()}`.padStart(2, 0)}
				</p>
			</div>
		</div>
	);
};

export default Datebar;
