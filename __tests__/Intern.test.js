const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const Employee = new Intern('james', '25', 'james@gmail.com', 'Intern');

  expect(Employee.getRole).toBe('Intern');
});

test('creates school', () => {
  const Employee = new Intern('james', '25', 'james@gmail.com', 'Intern');
  expect(Employee.School()).toBe('Harvard');
  
});

test('creates an Intern school', () => {
  const Employee = new Intern('james', '25', 'james@gmail.com', 'Harvard');
  expect(Employee.getSchool()).toBe('Harvard');
  
});
