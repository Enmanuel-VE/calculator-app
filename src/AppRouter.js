const base = import.meta.env.BASE_URL;

const routes = {
	[base]: () => import("./pages/HomePage.js"),
	[`${base}history`]: () => import("./pages/HistoryPage.js"),
	[`${base}conversionUnits`]: () => import("./pages/ConversionUnits.js"),
	[`${base}scientificMode`]: () => import("./pages/ScientificMode.js"),
};

export const AppRouter = async (path) => {
	const route = routes[path] || (() => import("./pages/NotFoundPage.js"));
	const module = await route();
	return module.default;
};
