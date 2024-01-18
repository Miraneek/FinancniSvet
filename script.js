let links = document.querySelectorAll(".dropdown-content section");

links.forEach((link) => {
    let aInsideSection = link.querySelector("a");
    let svgInsideSection = link.querySelector("svg");
    let imgInsideSection = link.querySelector("img");
    link.addEventListener("mouseover", () => {
        aInsideSection.style.color = "#0094FF";
        svgInsideSection.style.stroke = "#00b341";
        if (svgInsideSection.classList.contains("icon-tabler-news")){
            svgInsideSection.style.stroke = "#fd0061";
        }
        if (imgInsideSection != null){
            console.log("vgbh")
            imgInsideSection.style.filter = "grayscale(0%)";
        }
    })
    link.addEventListener("mouseout", () => {
        aInsideSection.style.color = "#3d3d3d";
        svgInsideSection.style.stroke = "#3d3d3d";
        if (imgInsideSection){
            imgInsideSection.style.filter = "grayscale(100%)";
        }
    })
})