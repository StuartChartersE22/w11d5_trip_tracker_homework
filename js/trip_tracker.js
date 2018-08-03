// const Trip = require("../models/trip.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const detailForm = document.getElementById("trip-detail-form");

  detailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!event.target.endDate.value){
      event.target.endDate.value = event.target.startDate.value;
    };

    const trip = new Trip(event.target);
    const tripList = document.querySelector(`#trip-details`);
    const tripDetails = document.createElement(`tr`)

    for(let detail in Object.keys(trip)){
      console.dir(detail);
      const tripDetail = document.createElement(`td`);
      tripDetail.textContent = event.target[detail].value;
      tripDetails.appendChild(tripDetail);
    };
    tripList.appendChild(tripDetails);
    detailForm.reset();
  });
});
