const queryS = (tag) => document.querySelector(tag),
  stateChange = () => {
    queryS(".show-favorite__counter").innerText = lsContainer.children.length;
    lsContainer.children.length == 0
      ? ((toggleBtn.disabled = true),
        (toggleBtn.checked = false),
        (toggleBtn.style.opacity = "0.4"),
        (toggleShow.style.opacity = "0.4"))
      : ((toggleBtn.disabled = false),
        (lsContainer.style.padding = "0px"),
        (toggleBtn.style.opacity = "1"),
        (toggleShow.style.opacity = "1"));

    toggleBtn.checked || (toggleBtn.disabled = false)
      ? ((lsContainer.style.transform = "translateY(0px)"),
        (lsContainer.style.position = "relative"))
      : ((lsContainer.style.transform = "translateY(-3000px)"),
        (lsContainer.style.position = "absolute"));

    toggleBtn.checked
      ? (toggleShow.innerText = "Hide favorite")
      : (toggleShow.innerText = "Show favorite");
  };

const varDelete = () => {
  let deleteBtn = document.querySelectorAll(".local-storage__container button");
  deleteBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      elem.parentNode.remove();
      localStorage.removeItem("header");
      localStorage.removeItem("paragraph");
      localStorage.setItem("dom", lsContainer.innerHTML);
      stateChange();
    });
  });
};

let h2q = queryS(".quote__header"),
  pq = queryS(".quote__paragraph"),
  lsContainer = queryS(".local-storage"),
  lsBtnAdd = queryS(".btn-add-favorite"),
  toggleBtn = queryS(".show-favorite__toggle"),
  toggleShow = queryS(".show-favorite__label"),
  heartNotif = queryS(".show-favorite--heart");

export {
  queryS,
  h2q,
  pq,
  lsContainer,
  lsBtnAdd,
  stateChange,
  toggleBtn,
  varDelete,
  heartNotif,
};
