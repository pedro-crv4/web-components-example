const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "Eu estou no shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
    const spans = Array.from(document.querySelectorAll("span"));

    // const spans = Array.from(shadow.querySelectorAll("span"));
    for (const span of spans) {
        span.textContent = span.textContent.toUpperCase();
    }
});