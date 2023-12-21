# Debounce Vs Throttle

- Debounce:

    Debounce monitors the delay between the user actions and execute the callback when the delay exceeds the threshold value set by the developer. Continous user actions will subsequently delay the execution of the callback.

    Debounce is most suitable for control events like typing or button clicks.

    Example:

    ```
    const searchBarDom = document.getElementById("search-bar");
    let numberOfKeyPresses = 0;
    let numberOfApiCalls = 0;

    const getResults = debounce(() => {
        numberOfApiCalls += 1;
        console.log(`Number of API calls: ${numberOfApiCalls}`);
    }, 1000);

    searchBarDom.addEventListener("input", function(e){
        numberOfKeyPresses += 1;
        console.log(`Search Keyword: ${e.target.value}`);
        console.log(`Number of Key Presses: ${numberOfKeyPresses}`);
        getResults();
    });

    function debounce(callback, delay){
        let timer;
        return (...args){
            clearTimeout(timer);
            timer = setTimeout(() => callback(...args), delay);
        };
    };

    HTML:
    <label></label>
    <input type="text" id="search-bar" />

    ```
- Throttle:

    Throttle uses the delay to execute the callback at regular intervals until the event trigger is active. It doesnt delay the execution of the callback for a significant period like debounce.

    Throttle is most suitable for continous event actions like resizing and scrolling.

    ```
    const searchBarDom = document.getElementById("search-bar");
    let numberOfKeyPresses = 0;
    let numberOfApiCalls = 0;

    const getResults = throttle(() => {
        numberOfApiCalls += 1;
        console.log(`Number of API calls: ${numberOfApiCalls}`);
    }, 1000);

    searchBarDom.addEventListener("input", function(e){
        numberOfKeyPresses += 1;
        console.log(`Search Keyword: ${e.target.value}`);
        console.log(`Number of Key Presses: ${numberKeyPresses}`);
        getResults();
    });

    function throttle(callback, delay){
        let shouldWait = false;

        return (...args){
            if (shouldWait)
                return;
            callback(...args);
            shouldWait = true;
            setTimeout(() => shouldWait = false, delay);
        };
    };

    HTML:
    <label></label>
    <input type="text" id="search-bar" />

    ```
project: https://github.com/NagarjunShroff/debounce-and-throttle