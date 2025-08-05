import "../../../styles/calculator/pad/utilityMenu.css";
import { DeleteButton } from "./deleteButton/DeleteButton";
import { OptionsNav } from "./optionsNav/OptionsNav";

export const UtilityMenu = () => {
	const utilityMenu = document.createElement(`div`);
	utilityMenu.classList.add(`utility-menu`);
	utilityMenu.append(OptionsNav(), DeleteButton());
	return utilityMenu;
};
