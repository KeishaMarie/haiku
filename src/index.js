import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './scripts.js';
import {syllable} from 'syllable'

syllable('syllable') // 3
syllable('unicorn') // 3
syllable('hi') // 1
syllable('hihi') // 2
syllable('mmmmmmmmmmmmmmmm') // 1
syllable('wine') // 1
syllable('bottle') // 2
syllable('wine-bottle') // 3
syllable('Åland') // 2
console.log(syllable('syllable'));

const handleFormSubmission = (event) => {
event.preventDefault();
lineChecker();
};

const lineChecker = () => {
  let haikuInput = document.getElementById("haiku-text").value;
  console.log(haikuInput)
  let newHaiku = new Haiku(haikuInput);
  console.log(newHaiku)
  newHaiku.assignLineKeys();
  console.log(typeof newHaiku.lines[2])
  const warning = document.getElementById("warning");
  if (newHaiku.lines[3]) {
    warning.append("There are too many lines in this haiku!")
  } else if (!newHaiku.lines[0] | !newHaiku.lines[1] | !newHaiku.lines[2]) {
    warning.append("There are not enough lines in this haiku!")
  } else {
    warning.append("Great job! You made a haiku!")
  }
};

const form = document.getElementById("haiku-form");
  form.addEventListener("submit", handleFormSubmission);

