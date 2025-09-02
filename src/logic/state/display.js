import stylesResult from "../../styles/calculator/display/result.module.css";
import stylesOperation from "../../styles/calculator/display/operation.module.css";

const $ = (query) => document.querySelector(query);

const display = {
	get operation() {
		const inputOperation = $(`.${stylesOperation.display__operation}`);
		return inputOperation;
	},

	get result() {
		const inputResult = $(`.${stylesResult.display__result}`);
		return inputResult;
	},

	get hasOperation() {
		return Boolean(this.operation.value.trim());
	},

	get hasResult() {
		return Boolean(this.result.value.trim());
	},

	setOperation(value) {
		display.operation.value = value;
	},

	setResult(value) {
		display.result.value = value;
	},

	clear() {
		this.setOperation("");
		this.setResult("");
	},
};

export default display;
