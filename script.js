/***************** MODULE *****************/
const getNewQuoteButton = document.getElementById("getNewQuoteButton");
getNewQuoteButton.addEventListener("click", () => {
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    fetch("https://api.quotable.io/quotes/random")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok please try again.");
            }
            return response.json();
        })
        .then((data) => {
            quote.innerText = data[0].content;
            author.innerText = data[0].author;
        })
        .catch((error) => {
            alert(error.message);
        });
});

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
function getData() {
    const currentTime = document.querySelector("#current-time");
    const abbreviation = document.querySelector("#abbreviation");
    const cityCountry = document.querySelector("#city-country");
    const timezone = document.querySelector("#timezone");
    const dayOfTheYear = document.querySelector("#day-of-the-year");
    const dayOfTheWeek = document.querySelector("#day-of-the-week");
    const weekNumber = document.querySelector("#week-number");
    const greeting = document.querySelector("#greeting");
    fetch("http://worldtimeapi.org/api/ip")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok please try again.");
            }
            return response.json();
        })
        .then((data) => {
            const dateTime = new Date(data.datetime);
            currentTime.innerText = `${dateTime.getHours()}:${
                dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : "" + dateTime.getMinutes()
            }`;

            if (dateTime.getHours() >= 5 && dateTime.getHours() < 12) {
                greeting.innerText = "GOOD MORING";
            } else if (dateTime.getHours() >= 12 && dateTime.getHours() < 18) {
                greeting.innerText = "GOOD AFTERNOON";
            } else {
                greeting.innerText = "GOOD EVENING";
            }

            abbreviation.innerText = data.abbreviation;
            timezone.innerText = data.timezone;
            dayOfTheWeek.innerText = data.day_of_week;
            dayOfTheYear.innerText = data.day_of_year;
            weekNumber.innerText = data.week_number;

            return fetch(`http://ip-api.com/json/${data.client_ip}`);
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok please try again.");
            }
            return response.json();
        })
        .then((data2) => {
            cityCountry.innerText = `In ${data2.city}, ${data2.countryCode}`;
        })
        .catch((error) => {
            alert(error.message);
        });
}

getData();
