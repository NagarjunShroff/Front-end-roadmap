# Progressive Web Application - PWA

    PWA is an application built with modern web technologies to provide the platform-specific application user experience from the same code base.

    Native Applications(Platform-specific apps) ios and andriod:
        - Installable
        - Automatic updates
        - High Availablity(Offline)
        - App Store
        - Capabilities
    
    Web applications:
        - Single codebase
        - Highly distributed

    Servce Workers:

        Service workers are one of the pillars of PWA, helping with caching, offline availablity and fast loading.

        Service workers are javaScript code that runs as a separate thread from the main thread. This acts as proxy server between the client and server. In PWA Client is browser and server is data source.

        Service Workers are specialized in intercepting network requests and perform apropriate actions like serving the data from the cache store(Cache Storage API) when it is offline or from the server when it is online.

        Before applying the service worker, you should register the service worker in your PWA. Once registration is done, service worker gets downloaded on the client to start the installation and activation process.

    Manifest file: (manifest.json)

        PWA needs meta information such as name, description, icons and launch mode.
        
        All the details you have provided in the manifest.json will be used in moblie app installation.

        You can see the details in dev tools - Application


    Caching:
        Progressive Web Apps are known for offering speed and high availability on users mobile devices. So much so, in fact, that they can work completely or partially in offline mode. Caching helps achieve that, which makes the gap between a PWA and a native mobile app smaller.

        The service worker uses Cache Storage API to interact with the cache and manage assets as appropriate. As a developer of the PWA, you must decide what you want to cache and what your caching strategy should be.

        For example, you may want to cache the following assets:

        All the static images

        CSS Styles

        All static fonts

        Static data that comes from a JSON file

        The entry-point index.html page or any other pages

        JavaScript files that serve the business logic

        You must also consider the space on the user’s mobile device before considering what you want to cache.

        You can explore and adapt various caching strategies, based on the application’s use cases. Here are the five most popular strategies to explore:

        1. Cache only

        2. Network only

        3. Stale-While-Revalidate

        4. Cache first, then Network

        5. The network first, then Cache
