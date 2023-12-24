//closure is formed when a function is defined inside another function 
//and has access to variables from the outer (enclosing) function's scope, 
//even after the outer function has finished executing.

function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log("Executing Inner Function...")
    console.log(outerVariable);
  }

  return innerFunction;
}

let closure = outerFunction();
closure();


