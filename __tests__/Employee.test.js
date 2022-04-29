const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "ken";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("ken", testValue);
    expect(e.id).toBe(testValue);

});


test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("ken", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "ken";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("ken", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "Ken@gmail.com";
    const e = new Employee("ken", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("ken", 1, "Ken@gmail.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Can set email via constructor argument", () => {
    const testValue = "Ken@gmail.com";
    const e = new Employee("Biggie", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Ken";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Biggie", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "Ken@gmail.com";
    const e = new Employee("ken", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Ken", 1, "Ken@gmail.com.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});






// const Employee = require('../lib/Employee.js');




// test('creates an employee object', () => {
//   const employee = new Employee('james', '25', 'james@gmail.com',);

//   expect(employee.name).toBe('james');
//   expect(employee.id).toBe('25');
//   expect(employee.email).toBe('james@gmail.com');
 
// });

// test('creates an employee object', () => {
//   const employee = new Employee('james', '25', 'james@gmail.com',);

//   expect(employee.getName()).toBe('james');
//   expect(employee.getId()).toBe('25');
//   expect(employee.getEmail()).toBe('james@gmail.com');
//   expect(employee.getRole()).toBe('Employee');
 
// });

// test("creates an id object", () => {
//   const enemy = new Enemy('goblin', 'sword');
//   expect(employee.id).toBe('25');

//   expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
// });

// test('gets a description of the enemy', () => {
//   const enemy = new Enemy('goblin', 'sword');

//   expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
//   expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
// });

// test('checks if enemy is alive or not', () => {
//   const enemy = new Enemy('goblin', 'sword');

//   expect(enemy.isAlive()).toBeTruthy();

//   enemy.health = 0;

//   expect(enemy.isAlive()).toBeFalsy();
// });

// test("gets enemy's attack value", () => {
//   const enemy = new Enemy('goblin', 'sword');
//   enemy.strength = 10;

//   expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
//   expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
// });

// test("subtracts from enemy's health", () => {
//   const enemy = new Enemy('goblin', 'sword');
//   const oldHealth = enemy.health;

//   enemy.reduceHealth(5);

//   expect(enemy.health).toBe(oldHealth - 5);

//   enemy.reduceHealth(99999);

//   expect(enemy.health).toBe(0);
// });