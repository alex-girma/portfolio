import { useEffect, useState } from "react";
import { getDate } from "../../utility/utilFunc";

const Datebar = () => {
	const [time, setTime] = useState(new Date());
	const locale = navigator.language;

	useEffect(() => {
		const test = 60000 - time.getSeconds() * 1000;
		const timer = setTimeout(() => setTime(new Date()), test);
		return () => clearTimeout(timer);
	});
	return (
		<div className="flex-1 text-sm text-gray-100 flex flex-col items-end pr-2 pt-1 pb-1 cursor-default">
			<div className="hover:bg-[#19151549] flex items-end space-x-1 pl-2 pr-2 rounded-md transition duration-500">
				<p className="">{getDate(time, locale)},</p>
				<p className="">
					{`${time.getHours()}`.padStart(2, 0)}:{`${time.getMinutes()}`.padStart(2, 0)}
				</p>
			</div>
		</div>
	);
};

export default Datebar;
