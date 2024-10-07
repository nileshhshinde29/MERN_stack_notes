const AggregationQuestionPracticeSchema = require("../model/Aggregation/AggregationQuestionPracticeSchema")

const getUserByPagination = async (req, res) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const offset = (page - 1) * limit;
    const users = await AggregationQuestionPracticeSchema.find({})
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .exec();

    res.json({
        users,
        total: await AggregationQuestionPracticeSchema.countDocuments(), // Total number of documents
    });
};

const searchByName = async (req, res) => {

    /* 
    1. When we create indexing, database creates separates data structure that stores indexed field and pointer which refers to original document.
    2. When searching any document in collection we don`t need to check each document one by one. searching query search this in indexed object and this indexed object returns
       related document as response.
    */

    const searchString = await req.body.searchString

    try {
        await AggregationQuestionPracticeSchema.createIndexes({ name: 1 })  // single field index.
        // await AggregationQuestionPracticeSchema.createIndexes({name:1, age:-1})    // compound index.
        //  await AggregationQuestionPracticeSchema.createIndexes({ name:"text" })   // text index

        const user = await AggregationQuestionPracticeSchema.find({ name: searchString })
        res.status(200).send(user)

    } catch (error) {

    }
}

// query is  /users?page=1&limit=10

AggregationQuestionPracticeSchema.find({}).sort({ createdAt: -1 }).skip(offset).limit(10).exec()

