const formatCalculationInput = (input) => {
	const normalizeSymbol = (str) => {
		const result = str
			.replace(/\+\-/g, "-")
			.replace(/\-\+/g, "-")
			.replace(/--/g, "+")
			.replace(/\+\+/g, "+")
			.replace(/\(\+/g, "(");

		return result;
	};

	const insertMultiplication = {
		byParentheses: (str) => str.replace(/\)\(/g, ")*("),
		byNumberOpenParenthesis: (str) => str.replace(/(\d)(\()/g, "$1*("),
		byNumberClosingParenthesis: (str) => str.replace(/(\))(\d)/g, ")*$2"),
	};

	const percentToDivision = (str) => str.replace(/(\d+)%/g, "($1/100)");

	const userInputTransformation = [
		percentToDivision,
		...Object.values(insertMultiplication),
		normalizeSymbol,
	];

	return userInputTransformation.reduce((acc, fn) => fn(acc), input);
};

export default formatCalculationInput;
