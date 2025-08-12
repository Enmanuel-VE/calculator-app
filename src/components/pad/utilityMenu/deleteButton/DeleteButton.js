import { DELETE_SVG } from "../../../../assets/Icons";
import { userInputState } from "../../../../logic/state/userInputState";

export const DeleteButton = () => {
	const deleteButton = document.createElement(`button`);

	deleteButton.classList.add(`utility-menu__delete-button`);
	deleteButton.type = `button`;
	deleteButton.setAttribute("aria-label", "Eliminar");
	deleteButton.append(DELETE_SVG({ width: 30, height: 25, role: "img" }));

	deleteButton.addEventListener("click", () => userInputState.del());

	return deleteButton;
};
