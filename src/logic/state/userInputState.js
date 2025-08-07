import formatCalculationInput from "../formatCalculationInput";
const defaultValue = "";

const DISPLAY = {
	operation: () => document.querySelector(".display__operation"),
	result: () => document.querySelector(".display__result"),
};

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
		DISPLAY.operation().textContent = this.get();
		DISPLAY.result().textContent = this.get();
	}

	push(value) {
		this.set(this.get() + value);
		DISPLAY.operation().textContent = this.get();
	}

	eval() {
		const currentValue = this.get().trim();
		if (currentValue === defaultValue) return defaultValue;

		const result = safeEval(currentValue);
		DISPLAY.result().textContent = result;

		return result;
	}
}

export const userInputState = new MutableStore();
