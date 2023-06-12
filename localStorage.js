import {
  queryS,
  h2q,
  pq,
  lsContainer,
  lsBtnAdd,
  stateChange,
  toggleBtn,
  varDelete,
  heartNotif,
} from "./localStoargeVar.js";

const domLoaded = () => {
  window.addEventListener("DOMContentLoaded", varDelete);
};

const jsonData = async (api) => {
  const fetchStart = await fetch(api);
  let response = await fetchStart.json();
  quoteDisplay(response);
};

const quoteDisplay = (responseUsed) => {
  queryS(".quote").insertAdjacentHTML(
    "beforeend",
    `<button class="btn-next-quote">Next</button>`
  );
  queryS(".btn-next-quote").addEventListener("click", () => {
    let count = Math.floor(Math.random() * (responseUsed.length - 1) + 1),
      h2Case = responseUsed[count].title,
      pCase = responseUsed[count].body;
    h2q.innerHTML = h2Case.charAt(0).toUpperCase() + h2Case.slice(1);
    pq.innerHTML = pCase.charAt(0).toUpperCase() + pCase.slice(1);
  });
  localStorageDisplay(h2q, pq);
};

const localStorageDisplay = (x, y) => {
  toggleBtn.addEventListener("change", stateChange);

  lsBtnAdd.addEventListener("click", () => {
    domLoaded();
    localStorage.setItem("header", x.innerText);
    localStorage.setItem("paragraph", y.innerText);
    lsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="local-storage__container">
      <h2 class="local-storage__header">${localStorage.getItem("header")}</h2>
      <p class="local-storage__subheader">${localStorage.getItem(
        "paragraph"
      )}</p>
      <button class="local-storage__btn--delete">Delete Quote</button>
    </div>`
    );
    heartNotif.classList.add("_heart-animation");
    setTimeout(() => {
      heartNotif.classList.remove("_heart-animation");
    }, 400);

    localStorage.setItem("dom", lsContainer.innerHTML);
    stateChange();
    varDelete();
  });
};

(() => {
  lsContainer.innerHTML = localStorage.getItem("dom");
  stateChange();
  let apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  jsonData(apiUrl);
  domLoaded();
})();
