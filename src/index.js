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
