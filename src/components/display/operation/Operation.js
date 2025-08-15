import { History, userInputState } from "../../../logic/state/userInputState";
import "../../../styles/calculator/display/operation.css";

const input = document.createElement("input");

const handleScroll = () => {
	const isScrolled = input.scrollLeft !== 0;
	input.classList.toggle("operation-left-gradient-line", isScrolled);
	input.classList.toggle("operation-right-gradient-line", !isScrolled);
};

const handleKeyDown = () => {
	const hasValue = input.value !== "";
	if (hasValue) input.title = input.value;

	const hasScroll = input.scrollWidth > input.clientWidth;

	if (hasScroll) {
		input.addEventListener("scroll", handleScroll);
	} else {
		input.classList.remove("operation-right-gradient-line");
		input.classList.remove("operation-left-gradient-line");
	}
};

const onChange = (e) => {
	userInputState.set(e.target.value);
	userInputState.eval();
};

export const Operation = () => {
	const hasHistory = History.currentMemento();
	if (hasHistory) input.value = userInputState.get();

	input.type = "text";
	input.placeholder = "00.0";
	input.classList.add(`display__operation`);

	input.addEventListener("change", onChange);
	input.addEventListener("keydown", handleKeyDown);

	return input;
};
