// const Trip = require("../models/trip.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const detailForm = document.getElementById("trip-detail-form");
  const deleteAllButton = document.getElementById(`delete-all-button`);
  const oneDay = document.getElementById("one-day");
  const multiDay = document.getElementById("multi-day");
  const tripList = document.querySelector(`#trip-details`);

  const dateOptions = document.querySelector('.dateEntry');
  const endDate = document.createElement(`div`);

  const endDateOption = document.createElement(`input`);
  endDateOption.id = `end-date-input`;
  endDateOption.type = `date`;
  endDateOption.name = `endDate`;
  endDateOption.required = true;
  const endDateLabel = document.createElement(`label`);
  endDateLabel.htmlFor = `end-date-input`;
  endDateLabel.textContent = `Until: `

  endDate.appendChild(endDateLabel);
  endDate.appendChild(endDateOption);

  const removeEndDate = function () {
    if(dateOptions.contains(endDate)){
      dateOptions.removeChild(endDate);
    }
  }

  const addEndDate = function () {
    if(!dateOptions.contains(endDate)){
      dateOptions.appendChild(endDate);
    }
  }

  oneDay.addEventListener(`click`, (event) => {
    removeEndDate();
  });

  multiDay.addEventListener(`click`, (event) => {
    addEndDate();
  });

  // <label for="end-date-input">Until: </label>
  // <input type="date" id="end-date-input" name="endDate">

  detailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!event.target.contains(endDate)){
      event.target.endDate = {value: event.target.startDate.value};
    };

    const trip = new Trip(event.target);
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
    deleteAllButton.hidden = false;

    removeEndDate();
    detailForm.reset();
  });

  deleteAllButton.addEventListener('click', () => {
    const tripListDetails = document.getElementsByClassName('trip-details');
    for(let tripListDetail of tripListDetails) {
      tripList.removeChild(tripListDetail);
    }
    deleteAllButton.hidden = true;
  });

});
