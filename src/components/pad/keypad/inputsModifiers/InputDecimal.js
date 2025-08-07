import { userInputState } from "../../../../logic/state/userInputState";
import { Button } from "../../../common/Button";

const InputDecimal = () => {
	const btn = Button({
		dataKey: "DECIMAL",
		value: ".",
		children: ".",
		className: `keypad__button`,
	});

	btn.addEventListener(`click`, () => {
		if (userInputState.get() === "") return;
		userInputState.push(btn.value);
	});

	return btn;
};

export default InputDecimal;
