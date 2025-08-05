import { userInputState } from "../../../logic/state/userInputState";
import { Button } from "../../common/Button";

const equalButton = Button({
	value: "=",
	dataKey: "EQUALS",
	children: "=",
	className: "keypad__button",
});
const clearButton = Button({
	value: "C",
	dataKey: "CLEAR_ALL",
	children: "C",
	className: "keypad__button",
});

const inputsControls = () => {
	equalButton.addEventListener("click", () => {
		const displayResult = document.querySelector(".display__result");

		displayResult.textContent = userInputState.eval();
	});

	clearButton.addEventListener("click", () => {
		const displayResult = document.querySelector(".display__result");
		const displayOperation = document.querySelector(".display__operation");

		userInputState.clear();

		displayOperation.textContent = userInputState.get();
		displayResult.textContent = userInputState.get();
	});

	return [equalButton, clearButton];
};

export const INPUTS_CONTROLS = inputsControls();
