import calculator from "../../assets/002-calculator.png";
import AppMenuBar from "../../components/AppMenuBar";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
	const test = [
		"c",
		"ce",
		"del",
		"÷",
		"7",
		"8",
		"9",
		"x",
		"4",
		"5",
		"6",
		"-",
		"1",
		"2",
		"3",
		"+",
		"±",
		"0",
		".",
		"=",
	];
	const handleClick = (e) => {
		const prev = document.getElementById("calculator__prev");
		const curr = document.getElementById("calculator__curr");
		const currValue = e.target.textContent;
		if (currValue === "ce") return (curr.textContent = "");
		if (currValue === "c") {
			prev.textContent = "";
			curr.textContent = "";
			return;
		}
		if (currValue === "del") {
			return (curr.textContent = curr.textContent.slice(0, -1));
		}
		if (currValue === "+" || currValue === "x" || currValue === "-" || currValue === "÷") {
			prev.textContent = prev.textContent + " " + curr.textContent + " " + currValue;
			curr.textContent = "";
			return;
		}
		curr.textContent = curr.textContent + currValue;
	};
	return (
		<div
			id="calculator__window"
			className="bg-orange-50 rounded-md mt-40 w-1/5 cursor-default shadow-lg hidden "
		>
			<AppMenuBar icon={calculator} name={"Calculator"} />
			<div className="grid grid-cols-1 grid-rows-2 gap-1 m-2">
				<p
					id="calculator__prev"
					className="col-span-full text-right pr-4 h-10 text-gray-400 flex items-center place-content-end"
				></p>
				<p
					id="calculator__curr"
					className="w-full col-span-full bg-orange-50 text-right pr-4 h-12 text-2xl font-semibold text-gray-600"
				></p>
				<div className="grid grid-cols-4 grid-rows-5 gap-1" onClick={handleClick}>
					{test.map((digits, ind) => {
						return <CalculatorButtons key={ind} digits={digits} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Calculator;
