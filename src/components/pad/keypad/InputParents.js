import { userInputState } from "../../../logic/state/userInputState";
import { Button } from "../../common/Button";

const PARENTS = {
	OPEN: "(",
	CLOSED: ")",
};

const InputParents = () => {
	const btn = Button({
		className: "keypad__button",
		children: "()",
		dataKey: "PARENTS",
		value: "(",
	});

	btn.addEventListener("click", () => {
		const value = btn.value; // "(" OR ")"
		const isParenthesisOpen = value === PARENTS.OPEN;

		switch (isParenthesisOpen) {
			case true:
				userInputState.push(value);
				btn.value = PARENTS.CLOSED;
				break;
			case false:
				userInputState.push(value);
				btn.value = PARENTS.OPEN;
				break;
		}
	});

	return btn;
};

export default InputParents();
