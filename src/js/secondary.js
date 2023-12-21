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
    let yearDif = Math.floor((weekDif / 56) + 1);
    return `${yearDif}/${weekDif}/${dayDif}/${hrDif}/${minDif}/${secDif}`;
}

function displayDate() {
    let input = document.getElementById("dateInput").value;
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = `The day of the week for <span style="color:lightBlue">${input}</span> is <span style="color:Blue">${dayCalc(input)}</span>. <br> The amount of <span style="color:orange">Years/Weeks/Days/Hours/Minutes/Seconds</span> since specified date are: <span style="color:Red">${timePass(input)}</span>`
}

export function initialization() {
    document.getElementById("button").addEventListener("click", displayDate);
}

initialization()