import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import {Haiku} from './scripts.js';
import {syllable} from 'syllable';

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