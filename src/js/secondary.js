//This is a secondary JS file - you can rename it as you wish - just make sure to correctly import it into
//Index.JS file. Here is an example of exporting:
/*
//CLASS/CONSTRUCTOR:
export default class Blank {
    constructor(here,there) {
        this.here = here;
        this.there = there;
    }
}
//OBJECT PROTOTYPE FUNCTION:
    hereBlank() {
        return this.here * this.there;
    }
*/
 
export function dayCalc(dateStr) {
    let date = new Date(dateStr);
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = weekdays[date.getDay()];
    return dayOfWeek;
}

export function timePass(dateStr) {
    let dateStr2 = new Date(dateStr);
    let timeDif =  new Date() - dateStr2;
    let secDif = Math.floor(timeDif / 1000);
    let minDif = Math.floor(secDif / 60);
    let hrDif = Math.floor(minDif / 60);
    let dayDif = Math.floor(hrDif / 24);
    let weekDif = Math.floor(dayDif / 7);
    let yearDif = Math.floor(weekDif / 52);
    return `${yearDif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Years, ${weekDif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Weeks, ${dayDif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Days, ${hrDif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Hours, ${minDif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Minutes, ${secDif.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Seconds.`;
}

function displayDate() {
    let input = document.getElementById("dateInput").value;
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = `The day of the week for <span style="color:lightBlue">${input}</span> is <span style="color:#81F4E1">${dayCalc(input)}</span>. <br><br> The amount of time in Years, Weeks, Days, Hours, Minutes, and Seconds since specified date are:<br> <span style="color:Red">${timePass(input)}</span>`
}

export function initialization() {
    document.getElementById("button").addEventListener("click", displayDate);
}

initialization()