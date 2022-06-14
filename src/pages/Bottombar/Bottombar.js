import breakout from "../../assets/001-breakout-room.png";
import calculator from "../../assets/002-calculator.png";
import calendar from "../../assets/003-timetable.png";
import clock from "../../assets/004-clock.png";
import todo from "../../assets/005-checklist.png";
import commandline from "../../assets/006-command.png";
import planets from "../../assets/007-planet.png";
import weather from "../../assets/008-cloudy.png";
import calories from "../../assets/009-kcal.png";
import spellit from "../../assets/010-spelling-bee.png";
import tictactoe from "../../assets/011-gamification.png";
import battleship from "../../assets/012-ship.png";
import Appiconcontainer from "../../components/Appiconcontainer";
import { toggleHiddenWindows } from "../../utility/functions";

const Bottombar = () => {
	const handleClick = (id) => {
		toggleHiddenWindows(`${id}__window`);
		//isAppRunning[id] = true;
	};
	return (
		<div
			className="text-gray-100 mb-2 bg-black bg-opacity-30 backdrop-blur-3xl flex-[1_1_5%] max-h-12 flex items-center self-center space-x-1 rounded-md p-2"
			onClick={(e) => handleClick(e.target.parentNode.id)} // get the id from child clicked element. use to open and close window
		>
			<Appiconcontainer name={"commandline"} icon={commandline} />
			<Appiconcontainer name={"spellit"} icon={spellit} />
			<Appiconcontainer name={"tictactoe"} icon={tictactoe} />
			<Appiconcontainer name={"battleship"} icon={battleship} />
			<Appiconcontainer name={"breakout"} icon={breakout} />
			<Appiconcontainer name={"calendar"} icon={calendar} />
			<Appiconcontainer name={"clock"} icon={clock} />
			<Appiconcontainer name={"todo"} icon={todo} />
			<Appiconcontainer name={"planets"} icon={planets} />
			<Appiconcontainer name={"weather"} icon={weather} />
			<Appiconcontainer name={"calories"} icon={calories} />
			<Appiconcontainer name={"calculator"} icon={calculator} />
		</div>
	);
};

export default Bottombar;
