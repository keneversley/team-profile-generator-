const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Biggie", 1, "biggie@gmail.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Biggie", 1, "biggie@gmail.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Biggie", 1, "biggie@gmail.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});









// const Engineer = require('../lib/Engineer.js');




// test('creates an gitHub object', () => {
//   const Engineer = new Engineer('james', '25', 'james@gmail.com', 'keneversley' );

//   expect(Engineer.getGithub()).toBe('keneversley');
// });

// test('Engineer getRole ', () => {
//   const Engineer = new Engineer('james', '25', 'james@gmail.com', 'keneversley');

//   expect(Engineer.getGithub()).toBe('keneversley');
//   expect(Engineer.getRole()).toBe('Engineer');
// });
