class ExpandableElement extends HTMLElement {
    static get observedAttributes() {
        return ["expanded"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        setTimeout(() => {
            const title = this.querySelector('.title');
            this.updateHeight();

            this.isExpanded = this.getAttribute('expanded') === 'true';
            title.addEventListener('click', this.handleClick.bind(this));
        }, 0);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Avoids the first time that the component is rendered, the callback is triggered but with oldValue being null
        if (newValue && oldValue) {
            this.isExpanded = newValue === 'true';
        }
    }

    handleClick() {
        if (this.isExpanded) {
            return this.close();
        }

        return this.open();
    }

    updateHeight() {
        this.style.height = this.scrollHeight + "px";
    }

    open() {
        this.updateHeight();
        this.setAttribute('expanded', true);
    }

    close() {
        this.updateHeight();
        this.setAttribute('expanded', false);
    }
}

customElements.define('expandable-element', ExpandableElement);