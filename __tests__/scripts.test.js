import { Haiku } from './../src/scripts.js';

describe('Haiku', () => {
  
  test('should create a Haiku object with user input', () => {
    const haiku = new Haiku("An old pond! A frog jumps in the sound of water.")
    expect(haiku.haikuInput).toEqual("An old pond! A frog jumps in the sound of water.");
  });
});


/*
import lineNumberChecker from './../src/scripts.js';

describe('lineNumberChecker' () => {
  test('should output a number that is equal to the number of lines in haikuInput', () => {
    const haikuInput = 3;
    expect()
  })
})
*/