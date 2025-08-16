import { History, userInputState } from "../../../logic/state/userInputState";
import "../../../styles/calculator/display/result.css";

const input = document.createElement("input");

const handleScroll = () => {
	const isScrolled = input.scrollLeft !== 0;
	input.classList.toggle("result-left-gradient-line", isScrolled);
	input.classList.toggle("result-right-gradient-line", !isScrolled);
};

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

	input.addEventListener("scroll", handleScroll);

	return input;
};
