// Your code here

//Basic

let now = new Date()

function getDateObject() {
    let newDate = new Date();
    return newDate
}

let dateOne = getDateObject()

console.assert(
    dateOne instanceof Date,
    "getDateObject does not return a date value"
)

console.assert(
    dateOne >= now,
    "getDateObject does not retrun correct date"
)

function getNumericTimestamp() {
    let date = new Date()
    let time = date.getTime()
    return time
}

console.log(getNumericTimestamp())

let time = getNumericTimestamp()

let dateTwo = getNumericTimestamp()

console.assert(
    time === now.getTime(),
    "getNumericTimestamp does not return correct time"
)

console.assert(
    time >= now.getTime(),
    "time is not greater than now"
)

function getDayOfTheWeek(date) {
    let day = date.getDay()
    if (day === 0) {
        return "Sunday"
    } else if (day === 1) {
        return "Monday"
    } else if (day === 2) {
        return "Tuesday"
    } else if (day === 3) {
        return "Wednesday"
    } else if (day === 4) {
        return "Thursday"
    } else if (day === 5) {
        return "Friday"
    } else if (day === 6) {
        return "Saturday"
    }
}

console.assert(
    getDayOfTheWeek(new Date("September 23, 2021 9:16:00")) === "Thursday",
    "getDayOfTheWeek does not return correct day"
)

console.assert(
    getDayOfTheWeek(new Date("April 16, 1996 9:16:00")) === "Tuesday",
    "getDayOfTheWeek does not return correct day"
)