
// "/api/pizzahub/shop", {'lang': 38.8951 , 'lat': -77.0364}
// "/api/pizzahub/pizza", {'shopId': shopId}

// "/api/pizzahub/beverages", {'pizzaId': pizza.id}

//"/api/order", {
//     beverage: beverage.name,
//     name: name,
//     type: type,
//   }

// const fetchShopBasedOnLocation = ({lang, lat}) => {
//     console.log(`Locating pizza shop nearby at ${lang} ${lat}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const response = {
//             shopId: "s-123"
//         };

//         resolve(response.shopId);
//     }, 1000);
//     })
// };


// const fetchAvailablePizzaList = ({shopId}) => {
//     console.log(`Getting the available pizzas from shop ${shopId}`);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const response = {
//                 pizzas: [
//                     {
//                       type: "veg",
//                       name: "margherita",
//                       id: "pv-123",
//                     },
//                     {
//                       type: "nonveg",
//                       name: "pepperoni slice",
//                       id: "pnv-124",
//                     },
//                   ],
//             };
//             resolve(response.pizzas);
//         }, 1500);
//     });
    
// };


// const fetchFreeBeverages = ({ pizzaId }) => {
//     console.log(`Getting the available free beverages for the ordered pizza ${pizzaId}`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(
//             {
//                 id: "b-10",
//                 name: "cola"
            
//             }), 1500);
//     });
// };

// const customFetch = (endpoint, payload) => {
//     if(endpoint.includes("/api/pizzahub/shop")){
//         return fetchShopBasedOnLocation(payload);
//     } else if(endpoint.includes("/api/pizzahub/pizza")){
//         return fetchAvailablePizzaList(payload);
//     } else if(endpoint.includes("/api/pizzahub/beverages")){
//         return fetchFreeBeverages(payload);
//     }
// };

// const getMyPizza = (pizzaList, type, name) => {
//     const myPizza = pizzaList.find((pizza) => pizza.type === type && pizza.name === name);

//     return new Promise((resolve, reject) => {
//         if(myPizza) {
//             console.log(`Yay!, We have the pizza which you have selected ${myPizza.name}`);
//             resolve(myPizza);
//         } else {
//             reject( new Error("Sorry, We dont have the pizza which you have selected."))
//         }
//     });
// };

// const createOrder = (endpoint, payload) => {
//     if(endpoint.includes("api/order")) {
//         console.log(`Placing the order for thr pizza ${payload.name}`);
//         const { beverage, name , type } = payload;
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({
//                     success: true,
//                     message: `The pizza ${name} ${type} has been successfully ordered!`
//                 })
//             }, 1000);
//         })
//     }
// };


// function orderPizza(type, name){
//     customFetch("/api/pizzahub/shop", {'lang': 38.8951 , 'lat': -77.0364})
//     .then((shopId) => customFetch("/api/pizzahub/pizza", {'shopId': shopId}))
//     .then((pizzaList) => getMyPizza(pizzaList, type, name))
//     .then((pizza) => customFetch("/api/pizzahub/beverages", {'pizzaId': pizza.id}))
//     .then((beverage) => createOrder("/api/order", {
//         beverage: beverage.name,
//         name: name,
//         type: type
//     }))
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error.message));
// };


// orderPizza("nonveg", "pepperoni slice");



const red = new Promise((resolve,reject) => {
    setTimeout(() => resolve("red"), 1000);
});

const green = new Promise((resolve, reject) => {
    setTimeout(() => resolve("green"), 3000);
});

const blue = new Promise((resolve, reject) => {
    setTimeout(() => reject("blue"), 5000);
});


const testAll = async () => {
    const colors = await Promise.reject(blue);
    console.log(colors)
    // colors.map((color) => console.log(color));
};

testAll();