import { userInputState } from "../../../logic/state/userInputState";
import { Button } from "../../common/Button";

const INPUTS_NUMBERS_MAP = {
	ZERO: 0,
	ONE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
};

export const INPUTS_NUMBERS = Object.entries(INPUTS_NUMBERS_MAP).map(
	([key, value]) => {
		const btn = Button({
			value,
			dataKey: key,
			children: value,
			className: `keypad__button`,
		});
		btn.addEventListener(`click`, () => {
			userInputState.push(value);
		});
		return btn;
	}
);
