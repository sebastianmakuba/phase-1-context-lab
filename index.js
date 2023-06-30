/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
const createEmployeeRecord = function (array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

const createEmployeeRecords = function (arrays) {
  return arrays.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateTimeString) {
  const [date, hour] = dateTimeString.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10)
  });

  return this;
};

const createTimeOutEvent = function (dateTimeString) {
  const [date, hour] = dateTimeString.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  });

  return this;
};

const hoursWorkedOnDate = function (date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

  return hoursWorked;
};

const wagesEarnedOnDate = function (date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const payPerHour = this.payPerHour;
  const wagesEarned = hoursWorked * payPerHour;

  return wagesEarned;
};

  const calculatePayroll = function (employees) {
  return employees.reduce(function (totalPayroll, employee) {
    return totalPayroll + allWagesFor.call(employee);
  }, 0);
};
const findEmployeeByFirstName = function (collection, firstNameString) {
  return collection.find(function (employee) {
    return employee.firstName === firstNameString;
  });
};
