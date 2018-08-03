class Trip {
  constructor(name, location, description, startDate, endDate = startDate) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.description = description;
  };

};

module.exports = Trip;
