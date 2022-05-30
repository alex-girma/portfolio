import Datebar from "./Datebar";
import Weatherbar from "./Weatherbar";

const Topbar = () => {
	return (
		<div className="bg-black bg-opacity-40 backdrop-blur-3xl flex-[1_1_3%] max-h-7 flex items-center self-center w-1/3 rounded-b-md">
			<Weatherbar />
			<Datebar />
		</div>
	);
};

export default Topbar;
