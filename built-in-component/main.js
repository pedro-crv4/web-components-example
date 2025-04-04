class ExpandingList extends HTMLUListElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener("click", this.toggleItem);
    }

    toggleItem(event) {
        const item = event.target;
        const sublist = item.querySelector("ul");
        if (sublist) {
            sublist.classList.toggle("hidden");
            event.stopPropagation();
        }
    }
}

customElements.define("expanding-list", ExpandingList, { extends: "ul" });
