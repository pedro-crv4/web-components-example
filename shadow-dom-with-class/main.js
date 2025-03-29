class CounterComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.count = 0;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = document.createElement('style');
        style.innerHTML = `
            .counter-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                font-size: 24px;
                background-color: #f0f0f0;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            button {
                font-size: 20px;
                padding: 10px 20px;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                background-color: #503296;
                color: white;
                transition: background-color 0.3s ease;
            }

            button:hover {
                background-color: rgba(80, 50, 150, 0.9);
            }

            button:active {
                background-color: #431A86;
                transform: scale(0.95);
            }

            #count {
                font-weight: bold;
                min-width: 50px;
                text-align: center;
            }
        `;

        const template = document.createElement('template');
        template.innerHTML = `
            <div class="counter-container">
                <button id="decrement">-</button>
                <span id="count">${this.count}</span>
                <button id="increment">+</button>
            </div>
        `;

        this.shadow.appendChild(style);
        this.shadow.appendChild(template.content.cloneNode(true));

        setTimeout(() => {
            this.setupEventListeners();
        }, 0);
    }

    updateCount() {
        const countEl = this.shadow.getElementById('count');
        countEl.innerText = this.count;
    }

    setupEventListeners() {
        this.shadow.getElementById('increment').addEventListener('click', () => {
            this.count++;
            this.updateCount();
        });

        this.shadow.getElementById('decrement').addEventListener('click', () => {
            this.count--;
            this.updateCount();
        });
    }
}

customElements.define('counter-component', CounterComponent);