import { History, userInputState } from "../../../logic/state/userInputState";
import "../../../styles/calculator/display/result.css";

const input = document.createElement("input");

export const Result = () => {
	input.type = "text";
	input.readOnly = true;
	input.placeholder = "000";
	input.classList.add(`display__result`);

	input.title = "Click here to copy!";

	if (History.currentMemento()) {
		const isEmpty = userInputState.get() === "";

		if (isEmpty) {
			input.value = "";
		} else {
			input.value = History.currentMemento().result;
		}
	}

	input.addEventListener("click", (e) => {
		navigator.clipboard.writeText(e.target.value);
	});

	input.addEventListener("scroll", () => {
		if (input.scrollLeft !== 0) {
			input.classList.add("result-left-gradient-line");
			input.classList.remove("result-right-gradient-line");
		} else {
			input.classList.add("result-right-gradient-line");
			input.classList.remove("result-left-gradient-line");
		}
	});

	return input;
};
