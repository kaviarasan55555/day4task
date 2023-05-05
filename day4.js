Day 5 task

// programs in anonymous function & IIFE


// 1 odd numbers in an array
//anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOdd= function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};




printOdd(numbers);


// 2 Convert all the strings to title caps in a string array
// anonymous function




let arr = ["hello", "world"];

let titleCaps = arr.map(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(titleCaps);


// 3 Sum of all numbers in an array
// anonymous function

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(sum);

// 4 Return all the prime numbers in an array

// anonymous function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = function(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

let primeNumbers = arr.filter(isPrime);

console.log(primeNumbers);

// 5 Return all the palindromes in an array
// Using anonymous function
const palindromes = (arr) => {
    return arr.filter((str) => str === str.split("").reverse().join(""));
  };

  console.log

  console.log(palindromes(["level", "noon", "hello", "madam", "civic"]));


 // 6 Return median of two sorted arrays of the same size:

  // Using anonymous function
const median = (arr1, arr2) => {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid - 1] + mergedArr[mid]) / 2;
  };
  console.log(median([1, 2, 3], [4, 5, 6]));


  // 7 Remove duplicates from an array:

  // Using anonymous function
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };
  console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 6]));

  // 8 Rotate an array by k times:
  // Using anonymous function
const rotateArray = (arr, k) => {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };
  console.log(rotateArray([1, 2, 3, 4, 5], 2));




//1 odd numbers in an array

// IIFE


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);


//2 Convert all the strings to title caps in a string array
// IIFE

let strArray = ["hello world"];

let titleCapsArray = (function(array) {
  return array.map(function(str) {
    
    let wordsArray = str.toLowerCase().split(" ");
    
    let titleCapsString = wordsArray.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    
    return titleCapsString;
  });
})(strArray);

console.log(titleCapsArray)




//3 Sum of all numbers in an array

// IIFE

let numArray = [1, 2, 3, 4, 5];

let sum = (function(array) {
  return array.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
})(numArray);

console.log(sum);


//4 Return all the palindromes in an array

// IIFE



let strArray = ["racecar", "hello", "mango", "world"];

let palindromeArray = (function(array) {
  function isPalindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
  }
  
  return array.filter(function(str) {
    return isPalindrome(str);
  });
})(strArray);

console.log(palindromeArray);




//5 Return median of two sorted arrays of the same size.

// IIFE 








let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let median = (function(a, b) {
  let arr = a.concat(b).sort(function(x, y) {
    return x - y;
  });
  
  let len = arr.length;
  let mid = Math.floor(len / 2);
  
  if (len % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
})(arr1, arr2);

console.log(median);





//6 Remove duplicates from an array



// IIFE 







let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = (function(array) {
  let unique = [];
  
  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }
  
  return unique;
})(arr);

console.log(uniqueArray); 

//7  IIFE
//Return all the prime numbers in an array

const primeNumbers = (function(arr) {
    const isPrime = num => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    return arr.filter(num => isPrime(num));
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  console.log(primeNumbers);




 //8 Rotate an array by k times
  // Using IIFE
const rotateArray = (function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  })([1, 2, 3, 4, 5], 2);
  console.log(rotateArray);




   // programs in arrow functions




// Print odd numbers in an array


let arr = [1, 2, 3, 4, 5, 6, 7];

let oddNumbers = arr.filter(num => num % 2 !== 0);

console.log(oddNumbers);



// Convert all the strings to title caps in a string array


let arr = ["hello", "world"];

let titleCaps = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(titleCaps); // Output: ["Hello", "World"]



// Sum of all numbers in an array

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);




// Return all the prime numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

let primeNumbers = arr.filter(isPrime);

console.log(primeNumbers);



// Return all the palindromes in an array


let arr = ["racecar", "apple", "deified", "javascript"];

let isPalindrome = str => str === str.split("").reverse().join("");

let palindromeWords = arr.filter(isPalindrome);

console.log(palindromeWords);
