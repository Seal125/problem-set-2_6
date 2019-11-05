// Question 1
const log = () => {
  const attributes = {
    speed: 90,
    power: 95,
    accuracy: 79,
    defense: 82,
  }
  
  for (let i in attributes) {
    console.log(i, ': ', attributes[i])
  }
};

// Question 2
const totalProps = (ob) => {
  let stored = 0;
  for (let i in ob) {
    stored++;
  }
  return stored;
};

// Question 3
const listBooks = (books) => {
  let sentence = '';
  for (let i = 0; i < books.length; i++) {
    sentence = `"${books[i].title} was written by ${books[i].author}."`;
    console.log(sentence);
  }
};

// Question 4
const repeatedCharacters = (word) => {
  let letters = word.toLowerCase().split('');
  let letterCount = {};
  
  for (let i = 0; i < letters.length; i++) {
    if (letterCount.hasOwnProperty(letters[i])) {
      letterCount[letters[i]] += 1;
    } else {
      letterCount[letters[i]] = 1;
    }
  }
  
  for (let letter in letterCount) {
    if (letterCount[letter] === 1) { delete letterCount[letter]; }
  }
  return letterCount;
};

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}