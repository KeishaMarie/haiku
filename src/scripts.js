export class Haiku {
  constructor(haikuInput) {
    this.haikuInput = haikuInput;
    this.lines = {};
  }

  assignLineKeys () {
    let haikuArray = this.haikuInput.split("\n");
    this.lines[0] = haikuArray[0];
    this.lines[1] = haikuArray[1];
    this.lines[2] = haikuArray[2];
    return haikuArray
  }


}


/*

    



 let haikuInput = haikuInput;
    const haikuArray = haikuInput.split("\n");
    haikuInput[0]= haiku.lines[0];

    let haikuInput = haikuInput;
    const haikuArray = haikuInput.split("\n");


// this.currentLineNumber += 1;
// return this.currentLineNumber;


 addLineNumber (haiku) {
    this.
  }
}

  lineGenerator () {

  }

lineNumberChecker () {
    const lineNumberChecker = (haikuInput)
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

const lineNumberChecker = (haikuInput) => {

}
*/