// const menu = document.getElementById("menu");
// const action = document.getElementById("actions");

// menu.addEventListener("click", () => {
//   hundleMenu();
// })

// function hundleMenu() {
//   menu.classList.toggle("is-active");
//   action.classList.toggle("is-active");
// }

let btn = document.getElementById("theme")
let icon = document.getElementsByClassName("fa-moon")[0]
console.log(icon)
let cont = document.getElementById("cont")
// btn.style.color = "black"

btn.onclick = function name() {
  document.body.classList.toggle("light")
  // cont.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
  if (document.body.classList.contains("light")) {
    icon.className="fas fa-sun"
  } else {
        icon.className = "fas fa-moon"
  }
}