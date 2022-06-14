const Appiconcontainer = ({ name, icon }) => {
	//TODO: add an indication if app is open and running
	// const handleClick = (e) => {
	// 	const ele = document.getElementById(`${name}__window`);
	// 	if (ele === null || ele === undefined) return;
	// 	if (isAppRunning[name]) {
	// 		return e.currentTarget.childNodes[1].classList.toggle("invisible");
	// 	}
	// 	e.currentTarget.childNodes[1].classList.toggle("invisible");
	// };
	const handleClickMouseOver = (e) => {
		const ele = e.currentTarget.childNodes[2].classList;
		if (ele === null || ele === undefined) return;
		ele.toggle("hidden");
	};
	const handleClickMouseLeave = (e) => {
		const ele = e.currentTarget.childNodes[2].classList;
		if (ele === null || ele === undefined) return;
		ele.toggle("hidden");
	};

	return (
		<>
			<div
				id={name}
				className="hover:bg-[#807f7f49] pt-2 px-1 rounded-md transition duration-500 cursor-default flex flex-col items-center relative hover:first:visible"
				// onClick={handleClick}
				onMouseOver={handleClickMouseOver}
				onMouseOut={handleClickMouseLeave}
			>
				<img src={icon} alt={name} className="w-8 h-8 " />
				<div className="h-1 mt-1 w-1/4 bg-red-50 rounded invisible "></div>
				<span className="hidden text-xs absolute bottom-14 bg-zinc-800 bg-opacity-90 backdrop-blur-3xl px-3 py-1 rounded">
					{name.charAt(0).toUpperCase() + name.slice(1)}
				</span>
			</div>
		</>
	);
};

export default Appiconcontainer;
