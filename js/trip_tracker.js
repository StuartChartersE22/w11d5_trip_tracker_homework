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
    tripDetails.classList.add(`trip-details`);

    for(let detail of Object.keys(trip)){
      const tripDetail = document.createElement(`td`);
      tripDetail.textContent = trip[detail];
      tripDetails.appendChild(tripDetail);
    };

    const actionCell = document.createElement(`td`);
    const deleteButton = document.createElement(`button`);
    deleteButton.classList.add("button")
    deleteButton.textContent = `Delete`;
    actionCell.appendChild(deleteButton);
    tripDetails.appendChild(actionCell);

    deleteButton.addEventListener(`click`, () => {
      tripList.removeChild(tripDetails);
    });

    tripList.appendChild(tripDetails);
    detailForm.reset();
  });



});
