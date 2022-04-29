const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UoU";
    const e = new Intern("Biggie", 1, "biggie@gmail.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Biggie", 1, "biggie@gmail.com", "HARVARD", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UoU";
    const e = new Intern("Biggie", 1, "biggie@gmail.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});












// const Intern = require('../lib/Intern.js');

// test('creates an Intern object', () => {
//   const Employee = new Intern('james', '25', 'james@gmail.com', 'Intern');

//   expect(Employee.getRole).toBe('Intern');
// });

// test('creates school', () => {
//   const Employee = new Intern('james', '25', 'james@gmail.com', 'Intern');
//   expect(Employee.School()).toBe('Harvard');
  
// });

// test('creates an Intern school', () => {
//   const Employee = new Intern('james', '25', 'james@gmail.com', 'Harvard');
//   expect(Employee.getSchool()).toBe('Harvard');
  
// });
