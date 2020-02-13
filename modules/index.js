// Your code goes here!
import * as percentage from "./percentage.js"

const modulo1 = document.getElementById('modulo_1')
const modulo2 = document.getElementById('modulo_2')


document.addEventListener('keyup', () => {
    let moduloResult = document.getElementById('modulo_result');
    moduloResult.value = percentage.modulo(modulo1.value, modulo2.value);
})


// Percentage

const percentage1 = document.getElementById('percentage_1')
const percentage2 = document.getElementById('percentage_2')

document.addEventListener('keyup', () => {
    let percentageResult = document.getElementById('percentage_result');
    percentageResult.value = percentage.percentage(percentage1.value, percentage2.value);
})


// percentage of


const percentageOf1 = document.getElementById('percentageOf_1')

const percentageOf2 = document.getElementById('percentageOf_2')

document.addEventListener('keyup', () => {

    let percentageOfResult = document.getElementById('percentageOf_result');
    percentageOfResult.value = percentage.percentageOf(percentageOf1.value, percentageOf2.value);
})


// difference

const difference1 = document.getElementById('difference_1')
const difference2 = document.getElementById('difference_2')

document.addEventListener('keyup', () => {
    let differenceResult = document.getElementById('difference_result');
    differenceResult.value = percentage.difference(difference1.value, difference2.value);
})

// CALCULATE THE RATIO


// import { calculateAspectRatio } from "./aspect-ratio"
