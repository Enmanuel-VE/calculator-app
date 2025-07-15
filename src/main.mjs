import { symbolMap } from "./symbolMap.mjs";
const inputOperations = document.getElementById("operations-value");
const operationResult = document.getElementById("operation-result");

const typedValues = [];

const getNumbers = () => {
	Object.entries(symbolMap.digits).forEach(([symbol, element]) => {
		element.addEventListener("click", () => {
			const value = Number(symbol.trim());
			if (isNaN(value)) return;

			typedValues.push(value);
			inputOperations.value = typedValues.join("");
			console.log(typedValues);
		});
	});
};

const getOperators = () => {
	Object.entries(symbolMap.operators).forEach(([symbol, element]) => {
		element.addEventListener("click", () => {
			typedValues.push(symbol);
			inputOperations.value = typedValues.join("");

			console.log(typedValues);
		});
	});
};

const getModifiers = () => {
	Object.entries(symbolMap.modifiers).forEach(([symbol, element]) => {
		element.addEventListener("click", () => {
			typedValues.push(symbol);
			inputOperations.value = typedValues.join("");
			console.log(typedValues);
		});
	});
};

const getParents = () => {
	Object.entries(symbolMap.grouping).forEach(([symbol, element]) => {
		element.addEventListener("click", () => {
			typedValues.push(symbol);
			inputOperations.value = typedValues.join("");

			console.log(typedValues);
		});
	});
};

const main = () => {
	getNumbers();
	getOperators();
	getModifiers();
	getParents();

	symbolMap.control.delete.addEventListener("click", () => {
		typedValues.pop();
		inputOperations.value = typedValues.join("");
		console.log(typedValues);
	});

	symbolMap.control.clearAll.addEventListener("click", () => {
		while (typedValues.length) typedValues.pop();
		operationResult.textContent = result;

		console.log(typedValues);
	});

	symbolMap.control.equals.addEventListener("click", () => {
		const result = eval(typedValues.join(""));
		while (typedValues.length) typedValues.pop();
		inputOperations.value = result;
		typedValues.push(result);
		operationResult.textContent = result;

		console.log(result);
	});
};

main();
