# Problem Set 2.6
## Introduction to JavaScript Objects

**1. Write a function, `log` that will log each property and corresponding value of an object, separated by a colon.**

  ```javascript
  const attributes = {
    speed: 90,
    power: 95,
    accuracy: 79,
    defense: 82,
  }

  log(attributes);
  // speed: 90
  // power: 95
  // accuracy: 79
  // defense: 82
  ```

**2. Write a function called `totalProps` that will return the total number of properties for a given object (not including prototype properties).**

  ```javascript
  const grades = {
    A: 100,
    B: 92,
    C: 84,
    D: 76,
    F: 64,
  }

  totalProps(grades); // 5
  ```

**3. Write a function called `listBooks` that takes an array of book objects and logs a sentence about the `title` and `author` for each book.**

  ```javascript
  const library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Walter Isaacson',
      title: 'Steve Jobs',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];

  listBooks(library);
  // "The Road Ahead was written by Bill Gates."
  // "Steve Jobs was written by Walter Isaacson."
  // "Mockingjay: The Final Book of the Hunger Games was written by Suzanne Collins."
  ```

**4. Implement a function called `repeatedCharacters` that takes a String as an argument and returns an object that contains a count of the repeated characters.**

  ```javascript
  repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
  repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
  repeatedCharacters('Pet');            // {}
  repeatedCharacters('Paper');          // { p: 2 }
  repeatedCharacters('Baseless');       // { s: 3, e: 2 }
  ```
