class Trip {
  constructor(details) {
    this.name = details.name;
    this.startDate = details.startDate;
    this.endDate = details.endDate;
    this.location = details.location;
    this.description = details.description;
  };

};

module.exports = Trip;
