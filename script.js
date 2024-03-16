const primaryButton = document.querySelector("#primary");

primaryButton.addEventListener("click", () => {
    const body = document.querySelector("body");
    const arrow = document.querySelector(".arrow");
    if (body.classList.contains("lift")) {
        body.classList.remove("lift");
        primaryButton.childNodes[0].nodeValue = "MORE";
        arrow.style.transform = "rotate(0deg)";
    } else {
        body.classList.add("lift");
        primaryButton.childNodes[0].nodeValue = "LESS";
        arrow.style.transform = "rotate(180deg)";
    }
});
