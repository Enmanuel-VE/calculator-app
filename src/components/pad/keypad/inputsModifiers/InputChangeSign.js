import { userInputState } from "../../../../logic/state/userInputState";
import { Button } from "../../../common/Button";

const DISPLAY = {
	operation: () => document.querySelector(".display__operation"),
};

const changeSign = () => {
	const currentValue = userInputState.get();
	if (!currentValue) return;

	switch (currentValue.startsWith("-")) {
		case true:
			userInputState.set(currentValue.slice(1));
			break;
		case false:
			userInputState.set("-(" + currentValue + ")");
			break;
	}

	DISPLAY.operation().value = userInputState.get();
};

const InputChangeSign = () => {
	const btn = Button({
		dataKey: "CHANGE_SIGN",
		value: "+/-",
		children: "+/-",
		className: `keypad__button`,
	});

	btn.addEventListener("click", changeSign);

	return btn;
};

export default InputChangeSign;
