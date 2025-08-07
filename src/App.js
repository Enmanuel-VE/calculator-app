import { AppRouter } from "./AppRouter";

const App = async () => {
	const ROOT = document.getElementById("root");
	ROOT.innerHTML = "";

	const path = window.location.pathname;
	const page = await AppRouter(path);

	ROOT.append(page());
};

export { App };
