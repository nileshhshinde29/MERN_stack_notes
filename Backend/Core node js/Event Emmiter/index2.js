const pizzaOrder = require('./index2Module')

const pizzaShop = new pizzaOrder()

pizzaShop.on("order", (size) => {
    console.log(`Yeah! we are baking ${size} pizza`);
})

pizzaShop.order("large")
