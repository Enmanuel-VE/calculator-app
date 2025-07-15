import { symbolMap } from "./symbolMap.mjs";

const getNumbers = (inputNumber) => {
	const value = Number(inputNumber.textContent.trim());
	if (isNaN(value)) return;

	inputNumber.addEventListener(`click`, () => {
		typedValues.push(value);
		console.log(`typedValues: `, typedValues);
	});
};

const main = () => {
	console.log(`symbolMap: `, symbolMap);
	console.log(`typedValues: `, typedValues);

	symbolMap.digits.forEach((e) => getNumbers(e));
};

main();
