// Example of test below complete with import statement.
/*
import Blank from './../src/rectangle.js';

describe("Blank", () => {
    let blank; 
    
    beforeEach(() => {
        blank = new Blank(x,y);
    })

    test("blah blah blah blah blah", () => {
        expect(Blank.x).toEqual(xx);
        expect(Blank.y).toEqual(yy);
    });
})
*/

import { dayCalc, timePass } from "../src/js/secondary";'../src/js/secondary.js'

describe("dayCalc", () => {
    test("This function should return the day of the week based off of a date", () => {
        expect(dayCalc('2023-12-19')).toEqual('Monday');
        expect(dayCalc('2023-12-20')).toEqual('Tuesday');
        expect(dayCalc('2023-12-21')).toEqual('Wednesday');
        expect(dayCalc('2023-12-22')).toEqual('Thursday');
        expect(dayCalc('2023-12-23')).toEqual('Friday');
        expect(dayCalc('2023-12-24')).toEqual('Saturday');
        expect(dayCalc('2023-12-25')).toEqual('Sunday');
    })
})

describe("timePass", () => {
    test("should return a string with hours, minutes, and seconds since the provided date", () => {
        const result = timePass('2023-12-19');
        const [hrDif, minDif, secDif] = result.split('/').map(Number);
        expect(hrDif).toBeGreaterThanOrEqual(0); 
        expect(minDif).toBeGreaterThanOrEqual(0); 
        expect(secDif).toBeGreaterThanOrEqual(0); 
    });
});
