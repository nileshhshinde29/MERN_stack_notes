const EventEmitter = require("events")

class pizzaOrder extends EventEmitter {
    constructor() {
        super()  // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        this.orderedPizza = 0
    }
    order(size) {
        this.orderedPizza++
        console.log(this.orderedPizza);
        this.emit('order', size)
    }
}

module.exports = pizzaOrder