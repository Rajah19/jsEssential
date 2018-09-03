function myresult() {
  //closures is a funtion inside a function
  const a = 3;
  const b = 4;

  function multiply() {
    return a * b;
  }
  return multiply;
}

const theResult = myresult();
console.log(theResult);
console.log('The result: ', theResult());
