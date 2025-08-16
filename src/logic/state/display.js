const display = {
	get operation() {
		const inputOperation = document.querySelector(".display__operation");
		return inputOperation;
	},

	get result() {
		const inputResult = document.querySelector(".display__result");
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
