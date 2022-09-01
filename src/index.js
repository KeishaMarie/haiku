import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './scripts.js';
import {syllable} from 'syllable'

syllable('syllable') // 3

const handleFormSubmission = (event) => {
event.preventDefault();

const warning = document.getElementById("warning");
lineChecker();
warning.innerText = "";
syllableChecker(lineChecker());
};

const syllableChecker = (lineChecker) => {
  let syllablesLine1 = syllable(lineChecker.lines[0]);
  let syllablesLine2 = syllable(lineChecker.lines[1]);
  let syllablesLine3 = syllable(lineChecker.lines[2]);
  const warning = document.getElementById("warning");
  if (syllablesLine1 != 5) {
    warning.append("Your first line needs to have 5 syllables.") 
  } if (syllablesLine2 != 7) {
      warning.append("Your second line needs to have 7 syllables.")
  } if (syllablesLine3 != 5) {
      warning.append("Your third line needs to have 5 syllables.")
  }

  };

const lineChecker = () => {
  let haikuInput = document.getElementById("haiku-text").value;
  let newHaiku = new Haiku(haikuInput);
  newHaiku.assignLineKeys();
  const warning = document.getElementById("warning");
  if (newHaiku.lines[3]) {
    warning.append("There are too many lines in this haiku!")
  } else if (!newHaiku.lines[0] | !newHaiku.lines[1] | !newHaiku.lines[2]) {
    warning.append("There are not enough lines in this haiku!")
  } else {
    warning.append("Your haiku has the correct amount of lines - great job!")
  }
  return newHaiku;
};

const form = document.getElementById("haiku-form");
  form.addEventListener("submit", handleFormSubmission);

