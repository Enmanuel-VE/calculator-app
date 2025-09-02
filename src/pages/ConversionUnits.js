import "../styles/globals.css";
import styles from "../styles/conversionUnits/conversionUnits.module.css";
import Header from "../components/common/Header.js";

const Section = () => {
	const section = document.createElement("section");
	section.classList.add(styles["body-conversion-units"]);

	return section;
};

const ConversionUnits = () => {
	const page = document.createElement("div");

	page.append(
		Header({
			title: "Conversion Units",
			description: "This is the conversion units page.",
		}),
		Section()
	);

	page.classList.add(styles["conversion-units"]);

	return page;
};

export default ConversionUnits;
