# Callback hell - Pyramid of Doom
   Callback hell is a phenomenon where a callback is called inside another callback. it is nesting of multiple callback with in a function. it is also reffered as "Pyramid of Doom".

   Example:
   ```
   function print(i){
      window.alert("This is call number", i);
   };

   function fun1(callback) {
      setTimeout(() => {
         let i = 1;
         callback(i);
         i++;
         
         setTimeout(() => {
            callback(i);
            i++;

            setTimeout(() => {
               callback(i);
               i++;

               setTimeout(() => {
                  callback(i);
                  i++;

                  setTimeout(() => {
                     callback(i);
                     i++;
                  }, 800);
               }, 700);
            }, 500);
         }, 300);
      }, 100);
   };

   fun1(print);

   ```