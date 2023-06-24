/* Your Code Here */
let createEmployeeRecord = function ([firstName, familyName, title, payPerHour]) {
    const Object = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return Object;
    
}

let createEmployeeRecords = function (arrays) {
    return arrays.map(createEmployeeRecord);
    
}

function createTimeInEvent(dateStamp) {
    let date = dateStamp.split("").slice(0, 10).join("");
    let time = dateStamp.split("").slice(11).join("");
    let timeInEvent = {
        type: "TimeIn",
        hour: parseInt(time),
        date: date,
    };
    this.timeInEvents.push(timeInEvent);
    return this;

}

function createTimeOutEvent(dateStamp) {
    let date = dateStamp.split("").slice(0, 10).join("");
    let time = dateStamp.split("").slice(11).join("");
    let timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(time),
        date: date,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.filter(el => (el.date === date))
    let timeOut = this.timeOutEvents.filter(el => (el.date === date))

    for (let i = 0; i < timeIn.length; i++) {
        return (timeOut[i].hour - timeIn[i].hour)/100;
    }

}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName(scrArray, firstName) {
    return scrArray.find(record => (record.firstName === firstName))
}

function calculatePayroll(arrays) {
    
    return arrays.reduce(function (memo, record) {
        return memo + allWagesFor.call(record)       
    }, 0)
}
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

