import { userInputState } from "../../../logic/state/userInputState";
import { Button } from "../../common/Button";

const INPUTS_MODIFIERS_MAP = {
	DECIMAL: `.`,
	CHANGE_SIGN: `+/-`,
};

export const INPUTS_MODIFIERS = Object.entries(INPUTS_MODIFIERS_MAP).map(
	([key, value]) => {
		const btn = Button({
			dataKey: key,
			children: value,
			value,
			className: `keypad__button`,
		});

		btn.addEventListener(`click`, () => {
			userInputState.push(value);
			console.log(userInputState.get());
		});
		return btn;
	}
);
