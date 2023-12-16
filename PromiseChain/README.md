# Promise Chain

   When promise chain comes into picture.
   1. You want to know the out come of the Asynchronous operation.
   2. You want to inter-relate two or more Asynchronous operations. When you want to pass the output of one promise as input to another promise.
   3. You got 3 handlers to handle the promise.
      1. .then() - To handle resolved scenario
      2. .catch() - To handle rejected scenario
      3. .finally() - To clean up things like db connection or remove loding icon

   - .then() can
      1. Return another Promise.
      2. Return synchronous value.
      3. Return/Throw and error.

   - Return another Promise:
   ```
   const getUser = new Promise((resolve, reject) => {
      const user = {
         name: "John Doe",
         email: "john.doe@abc.com"
      };

      resolve(user);
   });

   getUser
   .then((user) => {
      console.log(`Got user ${user.name}`);

      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("Bangalore);
         });
      })
   })
   .then((address) => console.log(`User's address ${address}`));

   ```
   
   - Return Synchronous value:
   ```
   const getUser = new Promise((resolve, reject) => {
      const user = {
         name: "John Doe",
         email: "john.doe@abc.com"
      };

      resove(user);
   });

   getUser
   .then((user) => {
      console.log(`Got user ${user.name}`);

      return user.email;
   })
   .then((email) => {
      console.log(`User's email ${email}`);
   });

   ```
   
   - Return/Throw an error:
   ```
   const getUser = new Promise((resolve, reject) => {
      const user = {
         name: "John Doe",
         email: "john.doe@abc.com",
         permissions: ["db", "hr", "dev"]
      };

      resolve(user);
   });

   getUser
   .then((user) => {
      console.log(`Got user ${user}`);

      if(user.permissions.includes("hr")) {
         throw new Error("You are not allowed.");
      }
   })
   .catch((error) => {
      console.log(error);
   });

   ```

   Example for Promise chaining:
   ```
   Scenario 1:

   const number = new Promise((resolve, reject) => {
      resolve(10);
   });

   number.then((value) => {
      value++;
      return value; // Here the value is 11
   });

   number.then((value)) => {
      value += 10;
      return value; // Here the value is 20 as we are not chaining
   }
   
   number.then((value) => {
      value += 20;
      return value; // Here the value is 30 as we are not chaining.
   });


   Scenario 2:

   const number = new Promise((resolve, reject) => {
      resolve(10);
   });

   number.then((value) => {
      value++;
      return value; // Here the value is 11
   }).then((value) => {
      value += 10;
      return value; // Here the value is 21 as we are chaining
   }).then((value) => {
      value += 20;
      return value; // Here the value is 41 as we are chaining
   });

   ```

   - .finally() - This is use to clean up stuff like db disconnect, setting off the loader icon etc...

   ```
   const promise = new Promise((resolve, reject) => {
      resolve("Testing finally method.");
   })

   // finally executor function does not take any parameter.
   promise.finally(() => {
      console.log("Running .finally()");
   }).then((result) => console.log(result));

   Output:
   Running .finally()
   Testing finally method.

   ```
Source: https://github.com/atapas/promise-interview-ready/tree/main/src/02-promise-chain