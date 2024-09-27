const AggregationQuestionPracticeSchema = require("../model/Aggregation/AggregationQuestionPracticeSchema")


const mainFunction = async (req, res) => {

    findByIdAndRemove(req, res)
}

// find

async function find(req, res) { // it return [] when empty

    const data = await AggregationQuestionPracticeSchema.find()
    return res.send(data)
}

async function findWithMultipleConditions(req, res) {

    const data = await AggregationQuestionPracticeSchema.find({
        name: /A/, //case sensitive.
        age: { $gt: 15, $lt: 40 },
        hobbies: { $in: ["painting", "treaking"] },
    })
        .limit(10)
        .sort({ "name": -1 })
    return res.send(data)
}

async function findWithQueryBuilderConditions(req, res) {

    const data = await AggregationQuestionPracticeSchema.find({
        name: /A/
    })
        .where("age").gt(15).lt(40)
        .where("hobbies").in(["painting", "treaking"])
        .limit(10)
        .sort({ "name": -1 })
    return res.send(data)
}

async function FindOne(req, res) { // it return {} when empty

    const data = await AggregationQuestionPracticeSchema.findOne({ "name": "John", age: { $gt: 15, $lt: 30 } }).select("name hobbies").exec().then((res) => {
        console.log(res)
    }) // exec return a promise we can handle this by try and catch. we can use .then without exec.
    return res.send(data)
}


// create 

async function insertMany(req, res) {

    const data = await AggregationQuestionPracticeSchema.insertMany([{
        "name": "John",
        "age": 24,
        "city": "New York",
        "hobbies": ["playing"]
    },
    {
        "name": "HRX",
        "age": 40,
        "city": "Sangli",
        "hobbies": ["gaming"]
    }])
    return res.send(data)
}

async function create(req, res) {
    const data = await AggregationQuestionPracticeSchema.create({     // we can not use InsertOne with mongoose 
        "name": "Joshn",
        "age": 24,
        "city": "SSSSS",
        "hobbies": ["playing"]
    })
    return res.status(200).send(data)
}

async function save(req, res) {
    const aggregationSchema = new AggregationQuestionPracticeSchema({ "name": "Joshn", "age": 24, "city": "SSSSS", "hobbies": ["playing"] })

    const data = await aggregationSchema.save()  // to use save we need to create separate instance of Model
    return res.status(200).send(data)
}


// update

async function update(req, res) { //deprecated

    const data = await AggregationQuestionPracticeSchema.update({ "name": "Jonny" }, { $set: { name: "john", age: 0 } })
    return res.status(200).send(data)
}

async function updateOne(req, res) { //update one is not give data object. gives "acknowledged": true,"modifiedCount": 0,

    const data = await AggregationQuestionPracticeSchema.updateOne({ "name": "Jonny" }, { $set: { name: "john", age: 0 } })
    return res.status(200).send(data)
}// new true is not work with update one

async function updateMany(req, res) {  //update one is not give data object. gives "acknowledged": true,"modifiedCount": 0,

    const data = await AggregationQuestionPracticeSchema.updateMany({ "name": "John" }, { $set: { name: "jonny", age: 0 } })
    return res.status(200).send(data)
} // new true is not work with update one

async function findOneAndUpdate(req, res) {
    const data = await AggregationQuestionPracticeSchema.find({ "name": "John" }, { $set: { name: "jonny", age: 0 } }, { new: true })
    return res.status(200).send(data)
}

async function findByIdAndUpdate(req, res) {
    const data = await AggregationQuestionPracticeSchema.findByIdAndUpdate("65c38017a562c3857937cf49", { $set: { name: "jonny", age: 0 } }, { new: true })
    return res.status(200).send(data)
}


// delete

async function DeleteOne(req, res) { // {"acknowledged": true,"deletedCount": 0}
    const data = await AggregationQuestionPracticeSchema.deleteOne({ name: "Alice" })
    return res.status(200).send(data)
}

async function DeleteMany(req, res) { // {"acknowledged": true,"deletedCount": 0}
    const data = await AggregationQuestionPracticeSchema.deleteMany({ name: "Alice" })
    return res.status(200).send(data)
}

async function findByIdAndDelete(req, res) { // gives deleted object
    const data = await AggregationQuestionPracticeSchema.findByIdAndDelete("65c38017a562c3857937cf45")
    return res.status(200).send(data)
}

async function findOneAndRemove(req, res) { // gives removed object
    const data = await AggregationQuestionPracticeSchema.findOneAndRemove({ name: "Nilesh" })
    return res.status(200).send(data)
}

async function findByIdAndRemove(req, res) { // gives removed object
    const data = await AggregationQuestionPracticeSchema.findByIdAndRemove("65c38017a562c3857937cf46")
    return res.status(200).send(data)
}



// // queries in details
// insert() /* this is old but working. may be dipracate soon */ 
// insertOne() /* insert one doc */  insert and insert one not working with mongoose

// $lt: 12 /* less than */
// $lte: 12 /* less than equal to */
// $gt: 12 /* greater than */
// $gte: 12 /* greater than equal to */

// find({ age: { gt: 5, lt: 12 } });

module.exports = { mainFunction }

/* 

## Update() vs findOneAndUpdate()
  Update - update one or more document
         - Update multiple documents until give multi: false.   

  FindOneAndUpdate - finding a single document
                   - Return original object until give {new true}   
                   
## drop() and remove()                   
    drop()    remove specific collection from database.
    e.g AggregationQuestionPracticeSchema.collection.drop()

    remove()  deletes specific document from database.

    

*/
