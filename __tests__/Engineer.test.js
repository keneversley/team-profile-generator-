const Engineer = require('../lib/Engineer.js');




test('creates an gitHub object', () => {
  const Engineer = new Engineer('james', '25', 'james@gmail.com', 'keneversley' );

  expect(Engineer.getGithub()).toBe('keneversley');
});

test('Engineer getRole ', () => {
  const Engineer = new Engineer('james', '25', 'james@gmail.com', 'keneversley');

  expect(Engineer.getGithub()).toBe('keneversley');
  expect(Engineer.getRole()).toBe('Engineer');
});
