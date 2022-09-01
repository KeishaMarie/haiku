export default class Haiku {
  constructor(haikuInput) {
    this.haikuInput = haikuInput;
    this.lines = {};
  }

  assignLineKeys () {
    let haikuArray = this.haikuInput.split("\n");
    this.lines[0] = haikuArray[0];
    this.lines[1] = haikuArray[1];
    this.lines[2] = haikuArray[2];
    this.lines[3] = haikuArray[3];
    return haikuArray
  }
}