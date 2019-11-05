# Problem Set 2.6 - Introduction to JavaScript Objects
## Short Response

**1. If I initalize the following object...**
    ```javascript
    const myObject = {
      a: 'name',
      'b': 'test',
      123: 'c',
      1: 'd',
    };
    ```
    **which of the following statements will raise an error? Why?**
    1. `myObject[1];`
    2. `myObject[a];`
    3. `myObject.a;`

  - Number 2 raises an error because in order to access a key that is a character using brackets, you need to write it as a string. Using brackets works better if the key is a series of numbers or contains at least one number.

**2. What does the following code log? Why? (Be sure to run in the console after you make your prediction 😉)**
      ```javascript
      const coolKid = {
        firstName: function () {
          return 'Carmen';
        },
        lastName: function () {
          return 'Salas';
        },
      };

      console.log(person.firstName + ' ' + person.lastName);
      ```
  - My prediction was that it would not log 'Carmen' and 'Salas' because they are in functions and the function name can't be a string, so it would return undefined. However, when I tested it, it became apparent that I had missed the fact that `person` doesn't even exist. After correcting this, I tested it again and each key simply logs what comes after it, namely the whole function declaration and what is inside. 

**3. What does the following code log? Why?**
    ```javascript
    const myArray = ['a', 'b', 'c'];

    console.log(myArray[0]);
    console.log(myArray[-1]);

    myArray[-1] = 'd';
    myArray['e'] = 5;
    myArray[3] = 'f';

    console.log(myArray[-1]);
    console.log(myArray['e']);
    console.log(myArray);
    ```
  - It logs `["a", "b", "c", "f", -1: "d", e: 5]`. Arrays are objects, therefore they can be manipulated similarly. For example, you can assign indexes or elements to the array as shown above.

**4. Your classmate wrote the following code. They wanted to add elements to an array, sum them, and then divide by the length to find the average. All of the values are `7` so they are confused about why this function is returning `14` for the average. What's going on here?**
    ```javascript
    const myArray = [7, 7];
    myArray[-1] = 7;
    myArray[-2] = 7;

    function average(array) {
      let sum = 0;

      for (let i = -2; i < array.length; i += 1) {
        sum += array[i];
      }
      return sum / array.length;
    }
    console.log(myArray);
    average(myArray); // 14... even though we expected 7. Why? 🤔
    ```
    - When `myArray` is logged, it returns a length of two, even though there are four elements. Two of those elements are negatives, even though indexes loop from 0 beyond.

**5. What does it mean for an object property to be _enumerable_?**
  - Enumerability is essentially like placing a flag on an element in an object or array. It tells the computer to hide this element so that it may be skipped when looping through the array.