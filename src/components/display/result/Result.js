import { History, userInputState } from "../../../logic/state/userInputState";
import styles from "../../../styles/calculator/display/result.module.css";

const input = document.createElement("input");

const handleScroll = () => {
	const isScrolled = input.scrollLeft !== 0;
	input.classList.toggle(styles["result-left-gradient-line"], isScrolled);
	input.classList.toggle(styles["result-right-gradient-line"], !isScrolled);
};

export const Result = () => {
	input.type = "text";
	input.readOnly = true;
	input.placeholder = "000";
	input.classList.add(styles["display__result"]);

	input.title = "Click here to copy!";

	if (History.currentMemento()) {
		const hasOperation = userInputState.get() === "";

		if (hasOperation) {
			input.value = "";
		} else {
			input.value = History.currentMemento().result;
		}
	}

	input.addEventListener("click", (e) => {
		const hasResult = Boolean(e.target.value);
		if (hasResult) navigator.clipboard.writeText(e.target.value);
	});

	input.addEventListener("scroll", handleScroll);

	return input;
};
