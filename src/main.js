import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("popstate", App);

document.body.addEventListener("click", (event) => {
	if (event.target.matches("[data-link]")) {
		event.preventDefault();
		const path = event.target.getAttribute("href");
		window.history.pushState({}, "", path);
		App();
	}
});
