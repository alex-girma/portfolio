import Calendarmonthcontainer from "../../components/Calendarmonthcontainer";

const Calendar = () => {
	let currYear = "2021";
	return (
		<div className="col-start-3 col-span-2 row-start-1 row-span-3 bg-black bg-opacity-40 backdrop-blur-3xl rounded-md mt-2">
			<div className="text-center">{currYear}</div>
			<div className=" grid grid-cols-3 grid-rows-4 gap-2 p-2">
				<Calendarmonthcontainer month="01" currYear={currYear} maxDay="31" />
				<Calendarmonthcontainer month="02" currYear={currYear} maxDay="28" />
				<Calendarmonthcontainer month="03" currYear={currYear} maxDay="31" />
				<Calendarmonthcontainer month="04" currYear={currYear} maxDay="30" />
				<Calendarmonthcontainer month="05" currYear={currYear} maxDay="31" />
				<Calendarmonthcontainer month="06" currYear={currYear} maxDay="30" />
				<Calendarmonthcontainer month="07" currYear={currYear} maxDay="31" />
				<Calendarmonthcontainer month="08" currYear={currYear} maxDay="31" />
				<Calendarmonthcontainer month="09" currYear={currYear} maxDay="30" />
				<Calendarmonthcontainer month="10" currYear={currYear} maxDay="31" />
				<Calendarmonthcontainer month="11" currYear={currYear} maxDay="30" />
				<Calendarmonthcontainer month="12" currYear={currYear} maxDay="31" />
			</div>
		</div>
	);
};

export default Calendar;
