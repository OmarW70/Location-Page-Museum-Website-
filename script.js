function toggleDarkMode() {
document.body.classList.toggle('dark-mode') ; 
}
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navbar ul");

menuBtn.onclick = () => {
nav.classList.toggle("active");
};
