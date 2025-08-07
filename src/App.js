import { AppRouter } from "./AppRouter";

const App = async () => {
	const ROOT = document.getElementById("root");

	ROOT.classList.add("fade-out");

	setTimeout(async () => {
		const path = window.location.pathname;
		const page = await AppRouter(path);

		ROOT.innerHTML = "";
		ROOT.append(page());

		ROOT.classList.remove("fade-out");
		ROOT.classList.add("fade-in");
	}, 200);
};

export { App };
