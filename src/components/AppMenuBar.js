import { toggleCSSValue, toggleHiddenWindows } from "../utility/functions";

const AppMenuBar = ({ icon, name }) => {
	const handleClickMinimize = (id) => {
		toggleHiddenWindows(`${id}__window`);
	};
	const handleClickMaximize = (id) => {
		toggleCSSValue(`${id}__window`, ["w-full", "h-full", "mt-40", "w-1/5"]);
	};

	return (
		<div className="flex place-content-between place-items-center bg-white rounded-t mb-2">
			<div className="flex pl-5 ">
				<img src={icon} alt={name} className="w-4 h-4 mr-4" />
				<p className="text-xs">{name}</p>
			</div>
			<div className="h-full">
				<button
					className="px-4 text-xs h-7 hover:bg-gray-100"
					onClick={() => handleClickMinimize(name.toLowerCase())}
				>
					⚊
				</button>

				<button
					className="px-4 text-xs h-7 hover:bg-gray-100"
					onClick={() => handleClickMaximize(name.toLowerCase())}
				>
					☐
				</button>
				<button
					className="px-4 text-xs h-7 hover:bg-red-600 rounded-tr"
					onClick={() => handleClickMinimize(name.toLowerCase())}
				>
					✕
				</button>
			</div>
		</div>
	);
};

export default AppMenuBar;
