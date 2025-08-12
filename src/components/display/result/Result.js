import { History, userInputState } from "../../../logic/state/userInputState";
import "../../../styles/calculator/display/result.css";

export const Result = () => {
	const result = document.createElement("input");
	result.type = "text";
	result.readOnly = true;
	result.placeholder = "000";
	result.classList.add(`display__result`);

	if (History.currentMemento()) {
		const isEmpty = userInputState.get() === "";

		if (isEmpty) {
			result.value = "";
		} else {
			result.value = History.currentMemento().result;
		}
	}

	return result;
};
