import { setupCounter } from "./counter.js";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="flex items-center justify-center">
    <a href="https://vitejs.dev" class="text-[#646cff] hover:text-[#535bf2]" target="_blank">
        <img src="${viteLogo}" class="p-6 w-32 transition-[border-color] duration-300 will-change-[filter] hover:drop-shadow-[0_0_32px_rgba(100,108,255,0.667)]" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="p-6 w-28 transition-[border-color] duration-300 will-change-[filter] hover:drop-shadow-[0_0_32px_rgba(247,223,30,0.667)]" alt="JavaScript logo" />
      </a>
    </div>
    <h1 class="text-4xl underline">Hello Vite!</h1>
    <div class="p-8">
    <button id="counter" class="text-base px-5 py-2 border border-solid border-transparent rounded-lg bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-500 hover:border-[#646cff]" type="button">
    </button>
    </div>
    <p class="text-[#888]">
      Start with editing main.js file
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
