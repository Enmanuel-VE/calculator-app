import {
	MATH_FORMULA_SVG,
	RULER_SVG,
	TIME_SVG,
} from "../../../../assets/Icons";

const OPTIONS_MAP = {
	history: TIME_SVG({ width: 32, height: 32, role: "img" }),
	conversionUnits: RULER_SVG({ width: 32, height: 32, role: "img" }),
	scientificMode: MATH_FORMULA_SVG({ width: 32, height: 32, role: "img" }),
};

const OPTIONS_BUTTONS = Object.entries(OPTIONS_MAP).map(([key, value]) => {
	const BUTTON = document.createElement("button");

	BUTTON.type = "button";
	BUTTON.classList.add("options-nav__button");
	BUTTON.id = `${key}-option`;
	BUTTON.append(value);

	BUTTON.addEventListener("click", () => {
		console.log(`Haz clickeado: ${key}`);
	});
	return BUTTON;
});

export const OptionsNav = () => {
	const optionsNav = document.createElement(`nav`);
	optionsNav.classList.add(`utility-menu__options-nav`);

	optionsNav.append(...OPTIONS_BUTTONS);
	return optionsNav;
};
