import { App } from "./App.js";

const handleLinkClick = (event) => {
	const link = event.target.closest("a[data-link]");

	if (link) {
		event.preventDefault();
		const path = link.getAttribute("href");

		window.history.pushState({}, "", path);
		App();
	}
};

const main = () => {
	document.addEventListener("DOMContentLoaded", App);
	window.addEventListener("popstate", App);

	document.body.addEventListener("click", handleLinkClick);
};

main();
