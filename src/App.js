import { AppRouter } from "./AppRouter";

const ROOT = document.getElementById("root");

const App = async () => {
	const path = window.location.pathname;
	const page = await AppRouter(path);

	ROOT.innerHTML = "";
	ROOT.append(page());
};

export { App };
