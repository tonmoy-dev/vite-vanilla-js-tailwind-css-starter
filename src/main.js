import { setupCounter } from "./counter.js";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="flex items-center justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo text-3xl" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla text-3xl" alt="JavaScript logo" />
      </a>
    </div>
    <h1 class="text-4xl underline">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Start with editing main.js file
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
