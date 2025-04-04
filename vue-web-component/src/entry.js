import { defineCustomElement } from "vue";
import CounterComponent from "./CounterComponent.ce.vue";

const CounterElement = defineCustomElement(CounterComponent);

customElements.define("counter-component", CounterElement);
