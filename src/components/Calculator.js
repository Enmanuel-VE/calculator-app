import "../styles/calculator/calculator.css";
import { Display } from "./display/Display.js";
import { Pad } from "./pad/Pad.js";

export const Calculator = () => {
	const calculator = document.createElement(`section`);
	calculator.classList.add(`calculator`);

	calculator.append(Display(), Pad());

	return calculator;
};
