class SuperBike {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

// module.exports = new SuperBike("kawasaki Ninja")

module.exports = SuperBike // this is module catching