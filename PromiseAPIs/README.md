# Promise APIs
   1. Promise.all()
   2. Promise.allSettled()
   3. Promise.any()
   4. Promise.race()
   5. Promise.resolve()
   6. Promise.reject()

   - Promise.all():
      - It executes multiple promises and return a promise.
      - It will wait for all the input promises to get resolved.
      - If any of the input promises gets rejected, Promise.all also gets rejected immediately.
      - The execution time of Promise.all() is depends on the maximum time taken by an input promise.
   
   Example
   ```
   const red = new Promise((resolve, reject) => {
      setTimeout(() => resolve("red), 1000);
   });

   const green = new Promise((resolve, reject) => {
      setTimeout(() => resolve("green"), 3000);
   });

   const blue = new Promise((resolve, reject) => {
      setTimeout(() => resolve("blue"), 5000);
   });

   //using .then()

   const allPromises = Promise.all([red, green, blue]);
   allPromises.then((value) => console.log(value));
   allPromises;

   //using async and await

   const testAll = async () => {
      const colors = await Promise.all([red, green, blue]);
      console.log(colors);
   };
   testAll();

   Output:
   ["red", "green", "blue"]

   ```
   - Promise.allSettled:
      - The only difference between Promise.all() and Promise.allSettled(), With Promise.allSettled(), if any of the input promise gets rejected, it rejects only that promise and executes rest all other promise.
      - Output will contain the status and value for resolved promises and for rejected promises status and reason of rejection.

      Example:
      ```
      const red = new Promise((resolve, reject) => {
         setTimeout(() => resolve("red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => reject("Error:green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => resolve("blue"), 5000);
      });

      const testAll = async () => {
         const colors = Promise.allSettled([red, green, blue]);
         colors.map((color) => console.log(color));
      };

      testAll();

      Output:
      {status: 'fulfilled', value: 'red'}
      {status: 'rejected', reason: 'Error:green'}
      {status: 'fulfilled', value: 'blue'}

      ```
      - Promise.any():
         - It returns a promise if any one of the input promise gets resolved.
         - If all the input promises are gets rejected , Promise.any() will throw an AggregateError: All promises were rejected

      Example:
      ```
      Scenario 1:

      const red = new Promise((resovle,reject) => {
         setTimeout(() => resolve("red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => resolve("green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => resolve("blue"), 5000);
      });

      const testAll = async () => {
         const colors = await Promise.any([red, green, blue]);
         console.log(colors)
      };

      testAll();

      Output:
      red - As it is one to get resolved first.

      Scenario 2:
      
      const red = new Promise((resovle,reject) => {
         setTimeout(() => reject("Error:red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => resolve("green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => resolve("blue"), 5000);
      });

      const testAll = async () => {
         const colors = await Promise.any([red, green, blue]);
         console.log(colors)
      };

      testAll();
      
      Output:
      green - As this is the next one to get resolve first.

      Scenario 3:
      
      const red = new Promise((resovle,reject) => {
         setTimeout(() => reject("Error:red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => reject("green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => reject("blue"), 5000);
      });

      const testAll = async () => {
         const colors = await Promise.any([red, green, blue]);
         console.log(colors)
      };

      testAll();
      
      Output:
      AggregateError: All promises were rejected - As all the input promises gets rejected.
      
      ```
   - Promise.race():

      This will execute the fastest input promise and return a promise. if it gets rsolved it will show the output. if te fastest promise gets rejected, Promise.race() will be rejected immediately.

      Example: 
      ```
      const red = new Promise((resolve, reject) => {
         setTimeout(() => resolve("red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => resolve("green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => resolve("blue"), 5000);
      });

      const testAll = async () => {
         const colors = await Promise.race([red, green, blue]);
         console.log(colors);
      };

      testAll();

      Output:
      red as this is the promise will take less time than any other promise.

      Note: if red promise gets rejected, Promise.race() will get rejected immediately.

      ```

      - Promise.resolve():

      - This will reolve only one of the input promise whichever we are going to resolve.

      Example:
      ```
      const red = new Promise((resolve, reject) => {
         setTimeout(() => resolve("red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => resolve("green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => resolve("blue"), 5000);
      });

      const testAll = async () => {
         const colors = await Promise.resolve(red);
         console.log(colors);
      };
      testAll();

      Output:
      red - as we are resolving the same.

      ```

      - Promise.reject():

      - This will reject promise and preints the error stack trace.

      Example:
      ```
      const red = new Promise((resolve, reject) => {
         setTimeout(() => resolve("red"), 1000);
      });

      const green = new Promise((resolve, reject) => {
         setTimeout(() => reject("green"), 3000);
      });

      const blue = new Promise((resolve, reject) => {
         setTimeout(() => resolve("blue"), 5000);
      });

      const testAll = async () => {
         const colors = await Promise.reject(green);
         console.log(colors);
      };
      testAll();

      Output:
      UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<Promise>

      ```