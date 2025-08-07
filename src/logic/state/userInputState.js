import formatCalculationInput from "../formatCalculationInput";

const displayOperation = () => document.querySelector(".display__operation");
const defaultValue = "";

const safeEval = (operation) => {
	try {
		const process = formatCalculationInput(operation);
		const output = new Function("return " + process)();

		if (!isFinite(output)) throw new Error("Result is not finite");
		if (isNaN(output)) throw new Error("Result is not a number");

		return output;
	} catch (e) {
		console.error(e);
		return "Math error";
	}
};

class MutableStore {
	constructor(initialValue = defaultValue) {
		this.value = initialValue;
	}

	get() {
		return this.value;
	}

	set(value) {
		this.value = value;
	}

	del() {
		this.set(this.get().slice(0, -1));
	}

	clear() {
		this.set(defaultValue);
	}

	push(value) {
		this.set(this.get() + value);
		displayOperation().textContent = this.get();
	}

	eval() {
		const input = this.get().trim();
		if (input === defaultValue) return defaultValue;

		return safeEval(input);
	}
}

export const userInputState = new MutableStore("");
