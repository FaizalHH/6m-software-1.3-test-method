//use the functions rom sample.js
const {addFunc, isDivisibleBy5} = require("./sample");

//create tet suite 
describe("describe of the test suite", () => {
    it("should add 3 numbers",  ()=>{
        cons result = addFunc(1,3,4);
        //compare an expected value to the result
        expected(result).(toBe(8));
    })

//expect

it("should check divisibility by 5", ()=>{
    const result = isDivisibleBy5(1283);
    expect(result).toBe(false);
})
})