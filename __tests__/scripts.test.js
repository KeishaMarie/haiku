import { Haiku } from './../src/scripts.js';

describe('Haiku', () => {
 let haiku;
 let haikuArray;
  beforeEach(() => {
   haiku = new Haiku("An old pond!\n A frog jumps in\n the sound of water.");
   haikuArray = haiku.assignLineKeys();
  });
  
  test('should create a Haiku object with user input', () => {
    expect(haiku.haikuInput).toEqual("An old pond!\n A frog jumps in\n the sound of water.");
  });

  test('should create an array from the haiku', () => {
    expect(haikuArray[0]).toEqual("An old pond!");
  });

  test('should assign key-value pairs to the haiku object line property', () => {
    expect(haiku.lines[0]).toEqual("An old pond!");
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