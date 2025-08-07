import "../../../styles/calculator/display/result.css";

export const Result = () => {
	const result = document.createElement("input");
	result.type = "text";
	result.readOnly = true;
	result.placeholder = "000";
	result.classList.add(`display__result`);
	return result;
};
