import { History } from "./../logic/state/userInputState";
import "../styles/globals.css";
import "../styles/historyPage/history.css";

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

const Section = () => {
	const section = document.createElement("section");
	const ul = document.createElement("ul");

	const contentLi = History.getHistory().map((memento) => {
		const li = document.createElement("li");
		const operation = memento.get().operation;
		const result = memento.get().result;

		li.innerHTML = /*html*/ `
			<div class="item__operation">${operation}</div>
			<div class="item__result">${result}</div>
		`.trim();

		li.classList.add("list-operations__item");

		return li;
	});

	if (contentLi.length !== 0) {
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
