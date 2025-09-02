import styles from "../../styles/common/header.module.css";
import backArrowSVG from "../../assets/images/backArrowSVG.svg";

const BASE_URL = import.meta.env.BASE_URL;

const header = document.createElement("header");

const Header = ({ title, description }) => {
	header.classList.add(styles["header-body"]);

	header.innerHTML = /*html*/ `
        <a class="${styles["header-body__return-button"]}" href="${BASE_URL}" data-link>
            <img src="${backArrowSVG}">
        </a>

        <div class="${styles["header-body__main-item"]}">
            <h1 class="${styles["main-item__title"]}">${title}</h1>
            <p class="${styles["main-item__description"]}">${description}</p>
        </div>

        <div></div>
    `.trim();
	return header;
};

export default Header;
