const digits = {
	0: document.getElementById("key-zero"),
	1: document.getElementById("key-one"),
	2: document.getElementById("key-two"),
	3: document.getElementById("key-three"),
	4: document.getElementById("key-four"),
	5: document.getElementById("key-five"),
	6: document.getElementById("key-six"),
	7: document.getElementById("key-seven"),
	8: document.getElementById("key-eight"),
	9: document.getElementById("key-nine"),
};

const modifiers = {
	"+/-": document.getElementById("key-toggle-sign"),
	".": document.getElementById("key-decimal"),
};

const operators = {
	"+": document.getElementById("key-plus"),
	"-": document.getElementById("key-subtract"),
	"*": document.getElementById("key-multiply"),
	"/": document.getElementById("key-divide"),
	"%": document.getElementById("key-percent"),
};

const control = {
	clearAll: document.getElementById("key-clear-all"),
	equals: document.getElementById("key-equals"),
	delete: document.getElementById("key-delete"),
};

const grouping = { "()": document.getElementById("key-paren") };

export const symbolMap = {
	digits,
	operators,
	modifiers,
	control,
	grouping,
};
