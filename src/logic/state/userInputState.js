import formatInput from "../formatCalculationInput";
import { Caretaker, Memento } from "./Memento";
const History = new Caretaker();

const DISPLAY = {
	operation: () => document.querySelector(".display__operation"),
	result: () => document.querySelector(".display__result"),
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
		DISPLAY.operation().value = this.get();
		DISPLAY.operation().scrollLeft = DISPLAY.operation().scrollWidth;
	}

	clear() {
		this.set("");
		DISPLAY.operation().value = this.get();
		DISPLAY.result().value = this.get();
	}

	push(value) {
		this.set(this.get() + value);
		DISPLAY.operation().value = this.get();
		DISPLAY.operation().scrollLeft = DISPLAY.operation().scrollWidth;
	}

	eval() {
		const currentMemento = History.currentMemento();
		const isCurrentOperation = this.get() === currentMemento?.operation;
		const isOperatorEmpty = this.get().trim() === "";

		if (isOperatorEmpty) {
			DISPLAY.result().value = "";
			DISPLAY.operation().value = "";
			return;
		}

		if (isCurrentOperation) return;

		try {
			const evaluateExpression = (expression) => {
				try {
					const output = new Function(`return ${expression}`)();
					const isResultValid = isNaN(output);

					if (isResultValid) throw new Error("Is not a number");

					return { ok: true, data: output };
				} catch (error) {
					return { ok: false, error };
				}
			};

			const process = formatInput(this.get());
			if (!process.ok) throw process.error;

			const output = evaluateExpression(process.data);
			if (!output.ok) throw output.error;

			const saved = new Memento({
				operation: this.get(),
				result: output.data,
			});

			History.add(saved);
			DISPLAY.result().value = output.data;
			DISPLAY.result().scrollLeft = 0;

			return output.data;
		} catch (e) {
			console.error("Message:", e.message);
			console.error("Stack:", e.stack);

			DISPLAY.result().value = "Math error";
			return "Math error";
		}
	}
}

export const userInputState = new Originator();
export { History };
