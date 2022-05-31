import image from "../../assets/bg.jpg";
import Window from "../Window/Window";
import Topbar from "../Topbar/Topbar";
import Bottombar from "../Bottombar/Bottombar";

const Desktop = () => {
	return (
		<div
			className="flex flex-col h-screen bg-no-repeat bg-cover bg-center "
			style={{ backgroundImage: `url(${image})` }}
		>
			<Topbar />
			<Window />
			<Bottombar />
		</div>
	);
};

export default Desktop;
