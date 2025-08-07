import "../../../styles/calculator/display/operation.css";

export const Operation = () => {
	const operation = document.createElement("input");
	operation.type = "text";
	operation.readOnly = true;
	operation.placeholder = "000";
	operation.classList.add(`display__operation`);
	return operation;
};
