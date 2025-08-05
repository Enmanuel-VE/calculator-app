import "../../styles/calculator/pad/pad.css";
import { DividingLine } from "./dividingLine/DividingLine.js";
import { Keypad } from "./keypad/Keypad.js";
import { UtilityMenu } from "./utilityMenu/UtilityMenu.js";

export const Pad = () => {
	const pad = document.createElement(`article`);
	pad.classList.add(`pad`);
	pad.append(UtilityMenu(), DividingLine(), Keypad());
	return pad;
};
