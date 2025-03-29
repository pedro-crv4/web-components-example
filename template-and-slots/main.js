class MyParagraph extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("custom-paragraph-template");
        const templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('my-paragraph', MyParagraph);