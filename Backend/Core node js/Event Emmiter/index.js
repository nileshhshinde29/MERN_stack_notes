const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("order-pizza", () => {
    console.log("ordered pizza");
})

emitter.on("order-pizza", (size) => {
    console.log("ordered " + size + " pizza")
})

emitter.emit("order-pizza", 'large')  // trigger all emitter which having name "order-pizza"

