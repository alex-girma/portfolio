const Appiconcontainer = ({ name, icon }) => {
	return (
		<div
			id={name}
			className="hover:bg-[#807f7f49] p-2 rounded-md transition duration-500 cursor-default"
		>
			<img src={icon} alt={name} className="w-8 h-8" />
		</div>
	);
};

export default Appiconcontainer;
