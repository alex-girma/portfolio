import calculator from "../../assets/002-calculator.png";
import Appiconcontainer from "../../components/Appiconcontainer";

const Bottombar = () => {
	return (
		<div className="text-gray-100 mb-4 bg-black bg-opacity-30 backdrop-blur-3xl flex-[1_1_5%] max-h-12 flex items-center self-center space-x-1 rounded-md p-2">
			<Appiconcontainer name={"Calculator"} icon={calculator} />
		</div>
	);
};

export default Bottombar;
