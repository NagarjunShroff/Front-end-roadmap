# React Server Components

   React Server Compoenents (RSC) allows you to write the UI that can be rendered and optionally cached on the server.

   - What are all the thing to be keep in mind while writing RSC

      Basically if the components needs only data to display and does not need any user interactions, state management, Effect management, browser API's - these components are best suitable to be Server Components.

   - Advantages
      1. Needs backend access without roundtrip (No latency)
      2. No waterfalls.
      3. Automatic code splitting.
      4. Zero bundle size.
      5. An RSC can import and render the client compoenent, but reverse is not possible. However you can pass the RSC as props to client component.
      6. Use client components as much as possible at the leaf level and server components in the root level.

   - Limitations
      Server components does not have access to event handlers like click handler, client states and effects.

   - Importance of Server Compoenents
      1. Data fetching:
            Server Components allows you to move the data fetching logic to the server (nearer to the data source), so it takes less time to resolve the request. This will improve the performance by reducing the time.

      2. Security:
            Server Components allows you to move the sensitive data or logic to deal with tokens and API keys to server without taking the risk of exposing them to the client.

      3. Caching:
            By rendering on the server, results can be cached and reused on subsequest request and across users, so that it improves the performace by not querying frequesntly.

      4. Bundle size:
            By rendering on the server, all the dependencies does not to be dowloaded in the client side which make the page to render faster.

      5. Initial page lod and First Contentful Paint (FCP):
            Server components allows you to generate the HTML on the server and make it availble for the user immediately, without waiting for the client to download, parse and execute the javaScrpt to render the page.

      6. Search Engine Optimization and Social Networking Sharebility:
            Rendered HTMl on the server can be used by the search engine bots to idex the page and social network bots to create social card preview for the page.

      7. Streaming:
            Server components allows you to split the rendering work into chunks and stream it to client as in when it is ready. This allows the user to see certain parts of the UI without waiting for the entire UI to be ready on the server.