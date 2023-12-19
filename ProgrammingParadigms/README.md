# Programming Paradigm

Programming Paradigms are different ways or styles in which the given program or programming language can be organized.

Programming Paradigms are like the set of ideas and guidelines that many people have been agreed on, followed and expand upon.

1. Imperative Programming:
    You tell what needs to be done and how ti needs to be done.

Example:
```
// Identify the numbers that are greater than 5

const nums = [1,4,3,6,7,8,9,2];
const result = [];

for(let i = 0; i < nums.length ; i++) {
    if(nums[i] > 5) {
        result.push(nums[i]);
    }
}

console.log(result);

```
Here we are telling the program to iterate through each element and check if it is > 5 and store it a variable result.

2. Procedural Programming:
    With this we wil try to split the instructions into procedures or subrotines.

Example:
```
function pourIngredients() {
    - Pour flour in a bowl
    - Pour a couple eggs in the same bowl
    - Pour some milk in the same bowl
};

function mixAndTransferToMold() {
    - Mix the ingredients well.
    - pour to mold.
};

function cookandLetChill() {
    - cook for 35 mins
    - let it chill
};

pourIngredients();
mixAndTransferToMold();
cookAndLetChill();

```

3. Functional Programming:
    Here we concentrate more on functions.
    We will group the functions logically and make sure at any given input it should produce the same output and doesnt worry anything about outside of its scope - Pure functions.

    Example:
    ```
    const nums = [1,4,3,6,7,8,9,2];

    function filterNums() {
        const result = [];
        for (let i = 0; i < nums.length; i++){
            if(nums[i] > 5){
                result.push(nums[i]);
            }
        }
        return result;
    }

    console.log(filterNums());

    ```

4. Declarative Programming:
    You tell what needs to be done in a declarative way and the program will take care of it.
    
    This will hide the complexity of how it has to be done.

    Example:
    ```
    const nums = [1,4,3,6,7,8,9,2];

    console.log(nums.filter((num) => num > 5));

    ```

5. OOP Programming:
    Here it seperates the concerns and responsibilities into entities.

    Example:
    ```
    1. Main Chef
    2. Assistant chef

    // Main Chef
    class Cook () {

        constructor(name) {
            this.name = name;
        };
    
    mixAndBake() {
        - mix the ingredients well.
        - Cook for 35 mins.
    };

    }
    
    class AssistantCook () {
        constructor(name){
            this.name = name;
        };

    pourIngredients() {
        - Pour flour in a bowl
        - Pour a couple eggs in the same bowl
        - Pour some milk in the same bowl
    }

    letChill() {
        - let it chill.
    }
    }

    const mainCook = new Cook("Frank");
    const assistantCook - new AssistantCook("Antony");

    assistantCook.pourIngredients();
    mainCook.mixAndBake();
    assistantCook.letChill();

    ```