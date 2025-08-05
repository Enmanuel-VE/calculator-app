export const Button = ({ value, dataKey, children, className }) => {
	const btn = document.createElement(`button`);

	btn.type = `button`;

	if (className) btn.classList.add(className);

	if (value || !isNaN(value)) btn.value = value;

	if (dataKey) btn.dataset.key = `key-${dataKey}`;

	if (typeof children === `string` || `number`) {
		btn.textContent = children;
	} else if (btn instanceof Node) {
		btn.append(children);
	}

	return btn;
};
