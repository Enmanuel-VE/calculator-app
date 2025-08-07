const HistoryPage = () => {
	const content = document.createElement("template");
	content.innerHTML = /*html*/ `
		<h1>History</h1>
		<p>This is the history page.</p>
	`;
	return content.content.cloneNode(true);
};

export default HistoryPage;
