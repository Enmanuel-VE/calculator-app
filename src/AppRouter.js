const BASE_URL = import.meta.env.BASE_URL;

const routes = {
	[BASE_URL]: () => import("./pages/HomePage.js"),
	[`${BASE_URL}/history`]: () => import("./pages/HistoryPage.js"),
};

export const AppRouter = async (path) => {
	const route = routes[path] || (() => import("./pages/NotFoundPage.js"));
	const module = await route();
	return module.default;
};
