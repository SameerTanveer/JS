//a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It is a way to handle asynchronous code more elegantly and manage the flow of control.

// A new Promise named fetchData is created with the executor function taking two parameters:
// resolve is a function to be called if the asynchronous operation is successful.
// reject is a function to be called if there is an error during the operation.
const fetchData = new Promise((resolve, reject) => {
  // Inside the Promise, a setTimeout is used to simulate an asynchronous operation
  // After the timeout, the resolve function is called with a string representing the fetched data.
  setTimeout(() => {
    const data = "My Name is Khan";
    resolve(data);
  }, 2000);
});

// The fetchData Promise is used with the .then method to handle the fulfillment (successful completion) of the Promise.
// Inside the .then block, the result parameter represents the data resolved by the Promise, and a success message is logged to the console.
// Additionally, the .catch method is used to handle any rejections (errors) that might occur during the Promise execution.
// Inside the .catch block, the error parameter represents the reason for the rejection, and an error message is logged to the console.
fetchData
  .then((result) => {
    console.log("Success:", result);
  })

  .catch((error) => {
    console.log("Error Found:", error);
  });
