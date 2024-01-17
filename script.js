const creative = document.querySelector(".creative__menu")
const hNav = document.querySelector(".header__nav")
creative.addEventListener("click", () => {
    creative.classList.toggle("open");
    hNav.classList.toggle("open");
}
)