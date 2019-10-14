import {sum} from '../code/index.js';

describe("sum", () => {
    test("it should sum", () => {
        const input = [1,2];
        const output = 3;
        expect(sum(...input)).toEqual(output);
    });
});