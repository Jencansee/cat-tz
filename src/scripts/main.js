window.onscroll = () => { headerSticky() };
const header = document.getElementById("page-header");
const sticky = header.offsetTop;

function headerSticky() {
    window.pageYOffset > sticky ? header.classList.add("page-header--sticky") : header.classList.remove("page-header--sticky");
}