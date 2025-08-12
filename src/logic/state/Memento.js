class Memento {
	#state;

	constructor(state) {
		this.#state = structuredClone(state);
	}

	get() {
		return structuredClone(this.#state);
	}
}

class Caretaker {
	#history;
	#currentIndex;

	constructor() {
		this.#history = [];
		this.#currentIndex = -1;
	}

	add(Memento) {
		const isFinalIndex = this.#currentIndex < this.#history.length - 1;

		if (isFinalIndex) {
			this.#history = this.#history.slice(0, this.#currentIndex + 1);
		}

		this.#history.push(Memento);
		this.#currentIndex++;
	}

	undo() {
		const hasPrevious = this.#currentIndex > 0;
		if (!hasPrevious) return null;

		this.#currentIndex--;
		return this.#history[this.#currentIndex];
	}

	redo() {
		const isFinalIndex = this.#currentIndex < this.#history.length - 1;
		if (!isFinalIndex) return null;

		this.#currentIndex++;
		return this.#history[this.#currentIndex];
	}

	currentMemento() {
		if (this.#currentIndex === -1) return null;

		return this.#history[this.#currentIndex].get();
	}

	getForIndex(index) {
		if (index >= 0 && index <= this.#history.length - 1) {
			return this.#history[index];
		}

		return null;
	}

	getHistory() {
		return this.#history.map((m) => new Memento(m.get()));
	}
}

export { Caretaker, Memento };
