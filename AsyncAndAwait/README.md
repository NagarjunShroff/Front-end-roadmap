# Async and Await
   
   - async keyword is used to return a promise.
   - await keyword is used to wait and handle a promise.

   Example:
   ```
   const validateUser = (userId, password) => {
    return new Promise((resolve, reject) => {
       if(userId && password) {
          resolve("Authenticated!");
       } else {
          reject({message: "userId and password is missing"});
       }
      });
   };

   const app = async () => {
      const data = {
         userId: 123,
         password: 456
      };

    try {
       const response = await validateUser(data.userId, data.password);
       console.log(response);
      } catch(e) {
         console.log(e.message);
      }
   };

   app();

   ```
 