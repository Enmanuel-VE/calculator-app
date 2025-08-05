import "../../../styles/calculator/display/operation.css";
import { userInputState } from "../../../logic/state/userInputState.js";

export const Operation = () => {
	const operation = document.createElement("div");
	operation.classList.add(`display__operation`);
	return operation;
};
