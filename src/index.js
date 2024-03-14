function updateTime() {
  //South Carolina
  let southCarolinaElement = document.querySelector("#south-carolina");
  let southCarolinaDateElement = southCarolinaElement.querySelector(".date");
  let southCarolinaTimeElement = southCarolinaElement.querySelector(".time");
  let southCarolinaTime = moment();

  southCarolinaDateElement.innerHTML = southCarolinaTime.format("MMMM Do YYYY");
  southCarolinaTimeElement.innerHTML = southCarolinaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz(Europe / Paris);

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
