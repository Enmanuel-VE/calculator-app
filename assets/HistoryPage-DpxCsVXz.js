import{H as l}from"./userInputState-DExqByOb.js";import"./index-DAhmW2ca.js";const i=()=>{const t=document.createElement("header");return t.innerHTML=`
		<nav class="header__nav">
			<a data-link class="return-button" href="/calculator-app/"> < </a>
		</nav>

		<div class="header__body">
			<h1 class="header-title">History</h1>
			<p class="header-description">This is the history page.</p>
		</div>

		<div class="header__aux-item"></div>
	`.trim(),t.classList.add("history-calculator__header"),t},n=()=>{const t=document.createElement("section"),e=document.createElement("ul"),a=l.getHistory().map(r=>{const s=document.createElement("li"),o=r.get().operation,c=r.get().result;return s.innerHTML=`
			<div class="item__operation">${o}</div>
			<div class="item__result">${c}</div>
		`.trim(),s.classList.add("list-operations__item"),s});return a.length!==0?(e.append(...a),t.append(e),e.classList.add("section__list-operations"),t.classList.add("history-calculator__section"),t):null},p=()=>{const t=document.createElement("div");return n()?t.append(i(),n()):t.append(i()),t.classList.add("history-calculator"),t};export{p as default};
