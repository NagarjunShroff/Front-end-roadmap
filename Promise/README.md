# Promise - How to Resolve or Reject a Promise

   Promise: An Object represents an eventual completion or failure of an asynchronous operations and its resulting value.

   Example:
   ```
   Resolved promise.

   const promise1 = new Promise(function(resolve, reject){
      resolve('Water');
   });

   Rejected promise.

   const promise2 = new Promise(function(resolve, reject){
      reject(new Error("Disaster!"));
   });
   ```

   Promise takes an exector function as parameter which can have deciding factor to resolve or reject it.

   - Promise has 3 different states.
      1. pending: When the exection starts.
      2. fullfilled: When the promise gets resolved.
      3. rejected: When the promise gets rejected.

   - Promise can have 3 different values based on the state.
      1. undefined: When promise is in pending state, not fulfilled or rejected.
      2. value: When the promise gets resolved.
      3. error: When the promise gets rejected.

   - Promise provides 3 method handlers.
      1. .then()
      2. .catch()
      3. .finally()

   Example:
   ```
   const promise = new Promise(function(resolve, reject){
       resolve('Water');
       //reject(new Error("Jack fell down"));
   });

   const consumer = promise.then((result) => 
   console.log(`Cooking with ${result}.`)
   ).catch((error) => 
   console.log(`OMG ${error.message}.`));

   consumer();

   Output:
   if promise gets resolved the output will be: Cooking with Water.
   if promise gets rejected the output will be: OMG Jack fell down.

   ```