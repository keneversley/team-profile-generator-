const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');



test('creates an Manager object', () => {
    const Employee = new Manager('james', '25', 'james@gmail.com', '007', 'Manager');
  
    expect (Employee.getRole).toBe('Manager');
  });
  
  test('creates an Manager officeNumber ', () => {
    const Employee = new Manager('james', '25', 'james@gmail.com', '007');
    expect (Employee.officeNumber()).toBe('007');
    
  });