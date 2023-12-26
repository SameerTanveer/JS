function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

async function myAsyncFunc() {
  console.log("Starting the program");

  await delay(5000);
  console.log("setTimeout of 5 Seconds!");

  await delay(2000);
  console.log("setTimeout of 2 Seconds!");

  console.log("Ending the program");
}

myAsyncFunc();
