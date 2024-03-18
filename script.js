/***************** MODULE *****************/
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

/***************** MODULE *****************/
const todaysDate = new Date();
const dayOfTheYear = document.querySelector("#day-of-the-year");
const dayOfTheWeek = document.querySelector("#day-of-the-week");
const weekNumber = document.querySelector("#week-number");
const getDateNumbers = (todaysDate) => {
    const firstDayOfTheYear = new Date(todaysDate.getFullYear(), 0, 1);
    const timeDifference = todaysDate - firstDayOfTheYear;
    const millisecondsInADay = 86400000;
    const dayOfTheYear = Math.floor(timeDifference / millisecondsInADay + 1);
    const weekNumber = Math.ceil(dayOfTheYear / 7);

    console.log(todaysDate.toLocaleString("en-US"));

    return [dayOfTheYear, weekNumber];
};
dayOfTheWeek.innerText = todaysDate.getDay();
dayOfTheYear.innerText = getDateNumbers(todaysDate)[0];
weekNumber.innerText = getDateNumbers(todaysDate)[1];
