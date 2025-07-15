const numbers = [
	"key-zero",
	"key-one",
	"key-two",
	"key-three",
	"key-four",
	"key-five",
	"key-six",
	"key-seven",
	"key-eight",
	"key-nine",
];

const operators = [
	"key-plus",
	"key-subtract",
	"key-multiply",
	"key-divide",
	"key-percent",
];

const modifiers = ["key-toggle-sign", "key-decimal"];
const control = ["key-clear-all", "key-equals"];

export const symbolMap = {
	digits: numbers.map((id) => document.getElementById(id)),
	operators: operators.map((id) => document.getElementById(id)),
	modifiers: modifiers.map((id) => document.getElementById(id)),
	control: control.map((id) => document.getElementById(id)),
	grouping: document.getElementById("key-paren"),
};
