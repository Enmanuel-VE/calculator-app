import { userInputState } from "../../../logic/state/userInputState";
import { Button } from "../../common/Button";

const INPUT_PARENTS_MAP = {
	PARENTS: "()",
};

export const INPUT_PARENTS = Object.entries(INPUT_PARENTS_MAP).map(
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
