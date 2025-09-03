import { History, userInputState } from "./../logic/state/userInputState";
import Header from "../components/common/Header";
import "../styles/globals.css";
import styles from "../styles/historyPage/history.module.css";

import copySvg from "../../src/assets/images/copySvg.svg";
import calculatorSVG from "../../src/assets/images/calculatorSVG.svg";

const BASE_URL = import.meta.env.BASE_URL;

const btnCopyResult = (mementoIndex) => {
	const btn = document.createElement("button");
	const img = document.createElement("img");

	img.src = copySvg;
	img.alt = "copy svg";
	img.classList.add(styles["copy-svg"]);

	btn.classList.add(styles["actions__btn"]);
	btn.type = "button";
	btn.append(img);

	btn.addEventListener("click", () => {
		window.navigator.clipboard.writeText(
			History.getForIndex(mementoIndex).get().result
		);
	});

	btn.title = "Click here to copy!";

	return btn;
};

const btnReturnOperation = (mementoIndex) => {
	const btn = document.createElement("button");
	const a = document.createElement("a");
	const img = document.createElement("img");

	btn.classList.add(styles["actions__btn"]);
	btn.type = "button";

	img.src = calculatorSVG;
	img.alt = "calculator svg";
	img.classList.add(styles["calculator-svg"]);

	a.href = BASE_URL;
	a.dataset.link = true;

	btn.append(img);
	a.append(btn);

	btn.addEventListener("click", () => {
		userInputState.set(
			History.changeCurrentMemento(mementoIndex).get().operation
		);
	});

	return a;
};

const Section = () => {
	const section = document.createElement("section");
	const ul = document.createElement("ul");

	const contentLi = History.getHistory().map((memento, index) => {
		const li = document.createElement("li");
		const operation = memento.get().operation;
		const result = memento.get().result;

		li.innerHTML = /*html*/ `
			<div class="${styles["item__operation"]}">${operation}</div>
			<div class="${styles["item__group-result"]}">
				<div class="${styles["group-result__result"]}">${result}</div>
				<div class="${styles["group-result__actions"]}"></div>
			</div>
		`.trim();

		li.classList.add(styles["list-operations__item"]);

		li.querySelector(`.${styles["group-result__actions"]}`).append(
			btnCopyResult(index),
			btnReturnOperation(index)
		);

		return li;
	});

	const isHistoryEmpty = contentLi.length !== 0;

	if (isHistoryEmpty) {
		ul.append(...contentLi);
		section.append(ul);

		ul.classList.add(styles["section__list-operations"]);
		section.classList.add(styles["history-calculator__section"]);

		return section;
	} else {
		section.classList.add(styles["history-calculator__section-empty"]);

		section.innerHTML = /*HTML*/ `
		<h1 class="${styles.title__historyEmpty}">🥴 Oh dear, you haven't performed any operations that we can show you yet.</h1>
		<p class="${styles.description__historyEmpty}">📰 Go back to the home page, do your calculations, and you'll be able to see the changes reflected in this section later. 🚀</p>
		`.trim();

		return section;
	}

	return null;
};

const HistoryPage = () => {
	const historyPage = document.createElement("div");

	historyPage.append(
		Header({
			title: "History",
			description: "This is the history page.",
		})
	);

	if (Section()) historyPage.append(Section());

	historyPage.classList.add(styles["history-calculator"]);
	return historyPage;
};

export default HistoryPage;
