class MutableStore {
	constructor(initialValue = "") {
		this.value = initialValue;
	}

	get() {
		return this.value;
	}

	del() {
		this.value = this.value.slice(0, -1);
	}

	clear() {
		this.value = "";
	}

	set(value) {
		this.value = value;
	}

	push(value) {
		this.value += value;
	}

	eval() {
		return eval(this.value);
	}
}

export const userInputState = new MutableStore("");
