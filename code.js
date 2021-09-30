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

//inter

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


function getFormattedDate(date) {
    let dateArray = date.toString().split(" ")
    let formattedDate = ""
    let timeOfDay
    let time = dateArray[4].split(":")
    for (let i = 0; i < months.length; i++) {
        if (months[i] === dateArray[1]) {
            formattedDate = formattedDate + (i+1)
            break
        }
    }
    formattedDate = formattedDate + "/" + dateArray[2]
    formattedDate = formattedDate + "/" + dateArray[3].slice(dateArray[3].length-2)
    if (parseInt(time[0]) === 0) {
        timeOfDay = "am"
        formattedDate = formattedDate + " - 12" 
    } else if (parseInt(time[0]) === 12) {
        timeOfDay = "pm"
        formattedDate = formattedDate + " - 12"
    } else if (parseInt(time[0]) > 12) {
        timeOfDay = "pm"
        formattedDate = formattedDate + " - " + (parseInt(time[0]) - 12) 
    } else {
        timeOfDay = "am"
        formattedDate = formattedDate + " - " + time[0]
    }
    formattedDate = formattedDate + ":" + time[1] + timeOfDay
    console.log(formattedDate)
    return formattedDate
}

console.assert(
    getFormattedDate(new Date("April 16, 1996 9:16:00")) === "4/16/96 - 09:16am",
    "getFormattedDate does not return correct date"
)

console.assert(
    getFormattedDate(new Date("September 23, 2021 9:16:00")) === "9/23/21 - 09:16am",
    "getFormattedDate does not return correct date"
)

console.log(new Date("September 23, 2021 9:16:00"))

//One day is 86400000

function getDaysAgoString(date1, date2) {
    let dateArray1 = date1.toString().split(" ")
    let dateArray2 = date2.toString().split(" ")
    let timeBetween
    let daysBetween
    if ((dateArray1[1] === dateArray2[1]) && (dateArray1[2] === dateArray2[2]) & (dateArray1[3] === dateArray2[3])) {
        return "Same day"
    } else if ((dateArray1[1] === dateArray2[1]) && (parseInt(dateArray1[2]) - parseInt(dateArray2[2]) === 1) & (dateArray1[3] === dateArray2[3])) {
        return "Previous day"
    } else {
        timeBetween = date1 - date2
        daysBetween = timeBetween/86400000    
        if (timeBetween % 86400000 < 43200000) {
            return (Math.round(daysBetween) + 1) + " days ago"
        } else {
            return Math.round(daysBetween) + " days ago"
        }
    }
}

console.assert(
    getDaysAgoString(new Date("September 23, 2021 9:16:00"), new Date("September 23, 2021 9:16:00")) === "Same day",
    "getDaysAgoString does not return correct difference if days are the same"
)

console.assert(
    getDaysAgoString(new Date("September 23, 2021 9:16:00"), new Date("September 22, 2021 8:16:00")) === "Previous day",
    "getDaysAgoString does not return correct difference if dates are one day apart"
)

console.assert(
    getDaysAgoString(new Date("September 30, 2021 9:16:00"), new Date("April 16, 1996 23:00:01")) === "9298 days ago",
    "getDaysAgoString does not return correct difference if the times are different."
)