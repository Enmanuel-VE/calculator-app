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
	const btn = document.createElement("a");

	btn.classList.add("options-nav__button");

	btn.id = `${key}-option`;
	btn.href = `${import.meta.env.BASE_URL}${key}`;
	btn.dataset.link = "";
	btn.append(value);

	btn.addEventListener("click", () => {
		console.log(`Haz clickeado: ${key}`);
	});
	return btn;
});

export const OptionsNav = () => {
	const optionsNav = document.createElement(`nav`);
	optionsNav.classList.add(`utility-menu__options-nav`);

	optionsNav.append(...OPTIONS_BUTTONS);
	return optionsNav;
};
