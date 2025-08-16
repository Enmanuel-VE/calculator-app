import { History, userInputState } from "./../logic/state/userInputState";
import "../styles/globals.css";
import "../styles/historyPage/history.css";
import copySvg from "../../src/assets/images/copySvg.svg";
import calculatorSVG from "../../src/assets/images/calculatorSVG.svg";
import display from "../logic/state/display";

const BASE_URL = import.meta.env.BASE_URL;

const Header = () => {
	const header = document.createElement("header");

	header.innerHTML = /*html*/ `
		<nav class="header__nav">
			<a data-link class="return-button" href="${import.meta.env.BASE_URL}"> < </a>
		</nav>

		<div class="header__body">
			<h1 class="header-title">History</h1>
			<p class="header-description">This is the history page.</p>
		</div>

		<div class="header__aux-item"></div>
	`.trim();

	header.classList.add("history-calculator__header");

	return header;
};

const btnCopyResult = (mementoIndex) => {
	const btn = document.createElement("button");
	const img = document.createElement("img");

	img.src = copySvg;
	img.alt = "copy svg";
	img.classList.add("copy-svg");

	btn.classList.add("actions__btn");
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

	btn.classList.add("actions__btn");
	btn.type = "button";

	img.src = calculatorSVG;
	img.alt = "calculator svg";
	img.classList.add("calculator-svg");

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
			<div class="item__operation">${operation}</div>
			<div class="item__group-result">
				<div class="group-result__result">${result}</div>
				<div class="group-result__actions"></div>
			</div>
		`.trim();

		li.classList.add("list-operations__item");

		li.querySelector(".group-result__actions").append(
			btnCopyResult(index),
			btnReturnOperation(index)
		);

		return li;
	});

	const isHistoryEmpty = contentLi.length !== 0;

	if (isHistoryEmpty) {
		ul.append(...contentLi);
		section.append(ul);

		ul.classList.add("section__list-operations");
		section.classList.add("history-calculator__section");

		return section;
	}

	return null;
};

const HistoryPage = () => {
	const historyPage = document.createElement("div");

	if (Section()) {
		historyPage.append(Header(), Section());
	} else {
		historyPage.append(Header());
	}

	historyPage.classList.add("history-calculator");
	return historyPage;
};

export default HistoryPage;
