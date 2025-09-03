import styles from "../../styles/common/comingSoon.module.css";

import homeSVG from "../../assets/images/home-icon-silhouette-svgrepo-com.svg";
const BASE_URL = import.meta.env.BASE_URL;

const ComingSoonPage = () => {
	const div = document.createElement("div");
	div.classList.add(styles.comingSoon);

	div.innerHTML = /*HTML*/ `
        <h2 class="${styles.comingSoon__title}">🚀 Coming soon.</h2>
		<p class="${styles.comingSoon__description}">
			☕️⚠️ Uncompiled zone alert! It seems you've stumbled upon a little corner of the universe where the code is still in the incubation phase... or where the coffee hasn't reached its optimal inspiration point.
		</p>

        <footer class="${styles.comingSoon__footer}">
            <a data-link href="${BASE_URL}">
                <button title="Return to the basic calculator." class="${styles["footer__return-btn"]}" type="button">
                    <p>Return to the basic calculator.</p>
                    <img loading="lazy" class="${styles.footer__homeSVG}" src="${homeSVG}" alt="Back to home button.">
                </button>
            </a>
        </footer>
    `.trim();

	return div;
};

export default ComingSoonPage;
