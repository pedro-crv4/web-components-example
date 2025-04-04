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

class ExpandableElement extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("expandable-template").content;
        this.attachShadow({ mode: "open" }).appendChild(template.cloneNode(true));
    }

    connectedCallback() {
        const title = this.shadowRoot.querySelector(".title");
        const container = this.shadowRoot.querySelector(".expandable");

        title.addEventListener("click", () => {
            container.classList.toggle("expanded");
        });
    }
}

customElements.define("expandable-element", ExpandableElement);