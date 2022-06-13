const Appiconcontainer = ({ name, icon }) => {
	//TODO: show if app is open
	// const handleClick = (e) => {
	// 	console.log(document.getElementById(`${name}__window`).classList);
	// 	if (document.getElementById(`${name}__window`).classList.contains("hidden"))
	// 		e.target.parentNode.childNodes[1].classList.toggle("invisible");
	// };

	return (
		<div
			id={name}
			className="hover:bg-[#807f7f49] pt-2 px-1 rounded-md transition duration-500 cursor-default flex flex-col items-center"
			// onClick={handleClick}
		>
			<img src={icon} alt={name} className="w-8 h-8" />
			<div className="h-1 mt-1 w-1/4 bg-red-50 rounded invisible"></div>
		</div>
	);
};

export default Appiconcontainer;
