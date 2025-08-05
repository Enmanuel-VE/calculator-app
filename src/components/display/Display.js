import "../../styles/calculator/display/display.css";
import { Result } from "./result/Result.js";
import { Operation } from "./operation/Operation.js";

export const Display = () => {
	const display = document.createElement("header");
	display.classList.add(`display`);
	display.append(Operation(), Result());
	return display;
};
