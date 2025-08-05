import "../../../styles/calculator/pad/keypad.css";
import { INPUTS_NUMBERS } from "./InputsNumbers";
import { INPUTS_OPERATORS } from "./InputsOperators";
import { INPUTS_CONTROLS } from "./InputsControls";
import { INPUT_PARENTS } from "./InputParents";
import { INPUTS_MODIFIERS } from "./InputsModifiers";

export const Keypad = () => {
	const keypad = document.createElement(`div`);
	keypad.classList.add(`keypad`);

	keypad.append(
		...INPUTS_NUMBERS,
		...INPUTS_OPERATORS,
		...INPUTS_CONTROLS,
		...INPUT_PARENTS,
		...INPUTS_MODIFIERS
	);
	return keypad;
};
