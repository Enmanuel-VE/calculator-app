import { History, userInputState } from "../../../logic/state/userInputState";
import "../../../styles/calculator/display/operation.css";

export const Operation = () => {
	const operation = document.createElement("input");

	operation.type = "text";
	operation.placeholder = "000";
	operation.classList.add(`display__operation`);

	if (History.currentMemento()) {
		operation.value = userInputState.get();
	}

	operation.addEventListener("change", (event) => {
		userInputState.set(event.target.value);
		userInputState.eval();
	});
	return operation;
};
