let elBtns = document.querySelector(".dark-light");
let theme = false;

elBtns.addEventListener("click", (evt) => {
theme = !theme;
const newBg = theme ? "dark" : "light";
window.localStorage.setItem("theme", newBg);
newTheme();
});

let newTheme = () => {
if (window.localStorage.getItem("theme") == "dark") {
document.body.classList.add("dark");
elBtns.classList.add("btn")
} else {
document.body.classList.remove("dark");
elBtns.classList.remove("btn");
}
};

newTheme();