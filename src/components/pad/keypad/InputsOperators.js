import { userInputState } from "../../../logic/state/userInputState";
import { Button } from "../../common/Button";

const INPUTS_OPERATORS_MAP = {
	DIVIDE: `/`,
	MULTIPLY: `*`,
	SUBTRACT: `-`,
	ADD: `+`,
	PERCENTAGE: `%`,
};

export const INPUTS_OPERATORS = Object.entries(INPUTS_OPERATORS_MAP).map(
	([key, value]) => {
		const btn = Button({
			dataKey: key,
			children: value,
			value,
			className: `keypad__button`,
		});

		btn.addEventListener(`click`, () => {
			userInputState.push(value);
		});
		return btn;
	}
);
