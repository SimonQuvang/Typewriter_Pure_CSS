const template = document.createElement("template");
template.innerHTML = `
 
  <style>
    @import "style.css"
  </style>

<h1>Hello, my name is Simon.</h1>
 
`;
class TypeWriter extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.querySelector("h1").innerText = this.getAttribute("text");
	}
}

window.customElements.define("type-writer", TypeWriter);
