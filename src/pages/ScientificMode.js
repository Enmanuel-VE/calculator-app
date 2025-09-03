import ComingSoonPage from "../components/common/ComingSoon";

const ScientificMode = () => {
	const element = document.createElement("div");

	element.style = `
        width: 100%;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `.trim();

	element.append(ComingSoonPage());

	return element;
};

export default ScientificMode;
