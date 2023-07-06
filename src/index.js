function updateTime() {
  let firstCityElement = document.querySelector("#first-city");
  let firstCityDate = firstCityElement.querySelector(".date");
  let firstCityTime = firstCityElement.querySelector(".time");
  firstCityDate.innerHTML = moment().format("MMMM Do YYYY");
  firstCityTime.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss A");

  let secondCityElement = document.querySelector("#second-city");
  let secondCityDate = secondCityElement.querySelector(".date");
  let secondCityTime = secondCityElement.querySelector(".time");
  secondCityDate.innerHTML = moment().format("MMMM Do YYYY");
  secondCityTime.innerHTML = moment().tz("Europe/London").format("h:mm:ss A");

  let thirdCityElement = document.querySelector("#third-city");
  let thirdCityDate = thirdCityElement.querySelector(".date");
  let thirdCityTime = thirdCityElement.querySelector(".time");
  thirdCityDate.innerHTML = moment().format("MMMM Do YYYY");
  thirdCityTime.innerHTML = moment().tz("America/New_York").format("h:mm:ss A");
}

updateTime();

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment().tz(cityTimeZone).format("h:mm:ss A");
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2 class="name">${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>

            <div class="time">${cityTime}</div>
 </div>
 <a href="/"> Go back </a>`;
}

let selectedCityElement = document.querySelector("#selectedCity");
selectedCityElement.addEventListener("change", updateCity);
