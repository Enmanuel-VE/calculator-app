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
	equalButton.addEventListener("click", () => userInputState.eval());
	clearButton.addEventListener("click", () => userInputState.clear());

	return [equalButton, clearButton];
};

export const INPUTS_CONTROLS = inputsControls();
