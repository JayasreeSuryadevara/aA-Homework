function mysteryScoping1(){
    var x = 'out of block';
    if (true){
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScope2() {
    const x = 'out of block';
    if (true){
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);

  function madLib(verb, adj, noun) {
    outStr = "We shall ${verb.toUpperCase()} the ${adj.toUpperCase()}${noun.toUpperCase()}";
    return outStr;
  }

  function isSubstring(searchString, subString) {
      return searchString.includes(subString);
  }

  function fizzBuzz(arr) {
    const fizzBuzzArr = []
    arr.forEach(el => {
      if ((el % 3 === 0) ^ (el % 5 === 0 )){
        fizzBuzzArr.push(el);
      }
    });
    return fizzBuzzArr;
  }

  function isPrime(num){
    if (num < 2) { return false; }
    for (let i = 2; i < num; i++ ){
      if (n % i === 0 ) {
        return false;
      }
    }
    return true;
  }

  function sumOfNPrimes(n) {
    let sum = 0;
    let countPrimes = 0;
    let i = 2;
    
    while (countPrimes < n) {
      if (isPrime(i)) {
        sum += i;
        countPrimes++;
      }
      i++;
    }

    return sum;
  }