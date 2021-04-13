// Code your solutions in this file
function writeCards(namesArray, eventName) {
  let newArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArray;
}

function countDown(number) {
  let count = 0;
  while (number >= count) {
    console.log(count)
    count++
  }
}