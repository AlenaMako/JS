const numbers = [51, 18, 13, 24, 7, 85, 19];
let biggesttNumber = numbers[0];

for (const number of numbers) {
  if (number > biggesttNumber) {
    biggesttNumber = number;
  }
}

console.log('biggestNumber: ', biggesttNumber);