const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Biggie", 1, "biggie@gmail.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Biggie", 1, "biggie@gmail.com", 100, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Biggie", 1, "biggie@gmail.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});











// const Manager = require('../lib/Manager.js');
// const Employee = require('../lib/Employee.js');



// test('creates an Manager object', () => {
//     const Employee = new Manager('james', '25', 'james@gmail.com', '007', 'Manager');
  
//     expect (Employee.getRole).toBe('Manager');
//   });
  
//   test('creates an Manager officeNumber ', () => {
//     const Employee = new Manager('james', '25', 'james@gmail.com', '007');
//     expect (Employee.officeNumber()).toBe('007');
    
//   });