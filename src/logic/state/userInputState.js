import formatInput from "../formatCalculationInput";
import { Caretaker, Memento } from "./Memento";

function evaluateExpression(expression) {
	try {
		const output = new Function(`return ${expression}`)();
		const isResultValid = isNaN(output);

		if (isResultValid) throw new Error("Is not a number");

		return { ok: true, data: output };
	} catch (error) {
		return { ok: false, error };
	}
}

const History = new Caretaker();

const display = {
	get operation() {
		const inputOperation = document.querySelector(".display__operation");
		return inputOperation;
	},

	get result() {
		const inputResult = document.querySelector(".display__result");
		return inputResult;
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

	get hasOperation() {
		return Boolean(this.operation.value.trim());
	},

	get hasResult() {
		return Boolean(this.result.value.trim());
	},
};

class Originator {
	#state;

	constructor() {
		this.#state = "";
	}

	get() {
		return this.#state;
	}

	set(value) {
		this.#state = value;
	}

	del() {
		this.set(this.get().slice(0, -1));
		display.setOperation(this.get());

		display.operation.scrollLeft = display.operation.scrollWidth;
	}

	push(value) {
		this.set(this.get() + value);
		display.setOperation(this.get());

		display.operation.scrollLeft = display.operation.scrollWidth;
	}

	clear() {
		this.set("");
		display.clear();
	}

	eval() {
		const currentMemento = History.currentMemento();
		const isCurrentOperation = this.get() === currentMemento?.operation;

		if (!display.hasOperation) {
			display.clear();
			return;
		}

		if (isCurrentOperation) {
			if (!display.hasResult) display.setResult(currentMemento?.result);
			return;
		}

		try {
			const process = formatInput(this.get());
			if (!process.ok) throw process.error;

			const output = evaluateExpression(process.data);
			if (!output.ok) throw output.error;

			History.add(
				new Memento({ operation: this.get(), result: output.data })
			);

			display.setResult(output.data);
			display.result.scrollLeft = 0;
		} catch (e) {
			console.error("Message:", e.message);
			console.error("Stack:", e.stack);

			display.setResult("Math error");
		}
	}
}

export const userInputState = new Originator();
export { History };
