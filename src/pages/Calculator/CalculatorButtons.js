const CalculatorButtons = ({ digits }) => {
	return (
		<div
			className={
				"bg-white px-4 py-3 text-center rounded shadow-md hover:bg-slate-50 active:shadow-sm duration-150"
			}
		>
			{digits}
		</div>
	);
};

export default CalculatorButtons;
