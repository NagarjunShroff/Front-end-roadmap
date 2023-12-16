# React Suspense

Before deep diving into React Suspense lets know about Data fetching patterns

- Data fetching patterns
 a. Fetch on Render:
    This is most used way of data fetching.
    ![Fetch on render](./fetchOnRender.png)

 Problem: Consider parent and child components makes network calls on mounting phase, if the network call in the parent component fails during the component mount, it never allows the child component to render( Network waterfall ).

 b. Fetch then Render:
    ![Fetch then render](./fetchThenRender.png)
    Here we solve Network waterfall issue.

   Problem: Consider if the Parent component makes multiple network calls, children components render will wait till all the network calls to be resolved.

 c. Render while fetch: React Suspense.
    Before getting into the React Suspense lets understand what is Imperative and Declarive Programing.

   Imperative: You tell what needs to be done and how it needs to be done.
   example: Java, C, Pascal etc..
    
   Declarative: You tell the program that what needs to be done in declarative way and the program will take care of it.
   example: React - you dont need to worry about DOM manipulations. React Suspense is another example, ML
    
   React Suspense:
      a. We dont need to matain loading state.
      b. We dont need to make network call on the component mount using useEffect.
        
   Syntax:
   ```
        <Suspense fallback={<p> Loading... </p>}>
         <YourComponent/>
        </Suspense>
   ```
   Suspense will show the "Loading..." on the UI till the YourComponent network calls get resolved. Once it is resolved it will show the corresponding response(depending on the how you are rendering in YourComponent).

   Error boundary:
      In the above code snippet if the network call of the YourComponent fails with the error, to display any error response, we can use the Error boundary.

   We can have a generic error page cin the project and use it to display when network calls fails or throws error.

   We can use 3rd party library "react-error-boundary" in the project to do the same.

   Suspense will always reach out to the nearer error boundary when the component's network fails or throws error.
![React Suspense with Error boundary](./reactSuspenseWithErrorboundary.png)

project: https://github.com/NagarjunShroff/react-suspense