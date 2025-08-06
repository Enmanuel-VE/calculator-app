const displayOperation = () => document.querySelector(".display__operation");
const defaultValue = "";

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
		return eval(this.get());
	}
}

export const userInputState = new MutableStore("");
