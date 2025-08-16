import { Caretaker, Memento } from "./Memento";
import formatInput from "../formatInput";
import evalResult from "../evalResult";
import display from "./display.js";

const History = new Caretaker();

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

			const output = evalResult(process.data);
			if (!output.ok) throw output.error;

			History.add(
				new Memento({ operation: this.get(), result: output.data })
			);

			display.setResult(output.data);
			display.result.scrollLeft = 0;
		} catch (error) {
			console.error("Message:", error.message);
			console.error("Stack:", error.stack);

			display.setResult("Math error");
		}
	}
}

export const userInputState = new Originator();
export { History };
