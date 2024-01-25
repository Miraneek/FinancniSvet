let links = document.querySelectorAll(".dropdown-content section");

links.forEach((link) => {
    let aInsideSection = link.querySelector("a");
    let svgInsideSection = link.querySelector("svg");
    let imgInsideSection = link.querySelector("img");
    link.addEventListener("mouseover", () => {
        aInsideSection.style.color = "#0094FF";
        if (svgInsideSection) {
            svgInsideSection.style.stroke = "#00b341";
            if (svgInsideSection.classList.contains("icon-tabler-news")) {
                svgInsideSection.style.stroke = "#fd0061";
            }
        }
        if (imgInsideSection) {
            imgInsideSection.style.filter = "grayscale(0%)";
        }
    })
    link.addEventListener("mouseout", () => {
        aInsideSection.style.color = "#3d3d3d";
        if (svgInsideSection) {
            svgInsideSection.style.stroke = "#3d3d3d";
        }
        if (imgInsideSection) {
            imgInsideSection.style.filter = "grayscale(100%)";
        }
    })
})

addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    if (window.scrollY > 0) {
        header.classList.remove("unscrolled");
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        header.classList.add("unscrolled");
    }
});

let icon = document.querySelector(".menu_icon");

icon.addEventListener("click", () => {
    icon.classList.toggle("clicked");
    let dropdown = document.querySelector(".right-side");
    dropdown.classList.toggle("show");
});


