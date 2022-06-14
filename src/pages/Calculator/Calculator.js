import calculator from "../../assets/002-calculator.png";
import AppMenuBar from "../../components/AppMenuBar";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
	const digits = [
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
	const toCalculate = [];
	let isSet = false;
	const handleClick = (e) => {
		const prev = document.getElementById("calculator__prev");
		const curr = document.getElementById("calculator__curr");
		const currValue = e.target.textContent;
		const calculate = ([a, b, c]) => {
			const temp = toCalculate[3];
			toCalculate.length = 0;
			if (b === "+") {
				toCalculate.push(+a + +c);
				toCalculate.push(temp);
			}
			if (b === "x") {
				toCalculate.push(+a * +c);
				toCalculate.push(temp);
			}
			if (b === "-") {
				toCalculate.push(+a - +c);
				toCalculate.push(temp);
			}
			if (b === "÷") {
				toCalculate.push(+a / +c);
				toCalculate.push(temp);
			}
		};

		// Guardes
		if (
			curr.textContent === "" &&
			(currValue === "+" ||
				currValue === "x" ||
				currValue === "-" ||
				currValue === "÷" ||
				currValue === "=")
		)
			return;
		if (curr.textContent.includes(".") && currValue === ".") return; // checks for more than one .
		if (curr.textContent.includes("-") && currValue === "±") return; // checks for more than one -
		if (curr.textContent === "0" && currValue === "±") return; // checks for more than one -
		if (curr.textContent === "0" && !isNaN(currValue)) return (curr.textContent = currValue); // removes leading 0 if not decimal

		// on button pressed
		if (currValue === "ce") return (curr.textContent = "");
		if (currValue === "c") {
			prev.textContent = "";
			curr.textContent = "";
			toCalculate.length = 0;
			return;
		}
		if (currValue === "del") {
			return (curr.textContent = curr.textContent.slice(0, -1));
		}
		if (currValue === "+" || currValue === "x" || currValue === "-" || currValue === "÷") {
			toCalculate.push(curr.textContent);
			toCalculate.push(currValue);
			if (toCalculate.length > 3) calculate(toCalculate);
			prev.textContent = toCalculate[0] + " " + toCalculate[1];
			curr.textContent = toCalculate[0];
			isSet = true;
			return;
		}
		if (currValue === "±") return (curr.textContent = "-" + curr.textContent);

		if (isSet) {
			curr.textContent = "";
			isSet = false;
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
				>
					0
				</p>
				<div className="grid grid-cols-4 grid-rows-5 gap-1" onClick={handleClick}>
					{digits.map((digit, ind) => {
						return <CalculatorButtons key={ind} digit={digit} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Calculator;
