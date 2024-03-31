// setItem(key, value) – зберегти пару ключ/значення.
// getItem(key) – отримати значення за ключем.
// removeItem(key) – видалити дані за ключем.
// clear() – видалити все.
// key(index) – отримати ключ на заданій позиції.
// length – кількість збережених елементів.

// localStorage.setItem("theme", "light")
// const themeColour = localStorage.getItem("theme");

// console.log(themeColour)

// const settings = {
//     theme: "light",
//     notification:false,
//     options:[1,2,3]
// }

// localStorage.setItem("settings", JSON.stringify(settings))

// const settingsData = localStorage.getItem("settings")

// const parseSettings = JSON.parse(settingsData)
// console.log(parseSettings)

const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const theme = localStorage.getItem("theme");

if(theme) {
    body.classList.add(theme)
} else {
    body.classList.add('light')
    localStorage.setItem('theme', 'light')
};

btn.addEventListener("click", (e) => {

});
console.log(theme);
