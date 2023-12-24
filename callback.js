// function delayedGreeting(callback) {
//     setTimeout(function () {
//       callback("Hello, world \nI have displayed this message after a delay of 2 seconds!");
//     }, 2000);
//   }

//   function greet(message) {
//     console.log(message);
//   }

//   delayedGreeting(greet);

//a callback is a function that is passed as an argument to another function 
//and is executed after the completion of some asynchronous operation or at a specified time.


// Asynchronous function that takes a callback
function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(function () {
    const data = "This is the fetched data";
    // Invoke the callback with the fetched data
    callback(data);
  }, 3000); // Simulating a delay of 3 seconds
}

// Callback function
function handleData(data) {
  console.log("Handling data:", data);
}

// Calling the asynchronous function with the callback
fetchData(handleData);
