const AggregationPractice = require('../../model/Aggregation/AggregationQuestionPracticeSchema')
const AggregationDB = require('../../model/Aggregation/aggrigationSchema')
// const { exists } = require('../model/momentSchema')
const { ObjectId } = require('mongodb')

async function Question1() {
    /* Retrieve all documents from the "users" collection. */
    const temp = await AggregationPractice.aggregate([{ $match: {} }])
    return temp
}


async function Question2() {
    /* Retrieve the users sorted by age in ascending order.*/

    const temp = await AggregationPractice.aggregate([{ $sort: { age: 1 } }])
    return temp
}

async function Question3() {
    /* Find users aged 30 and above.*/

    const temp = await AggregationPractice.aggregate([{ $match: { age: { $gt: 30 } } }])
    return temp
}

async function Question4() {
    /*Count the total number of users.*/

    const temp = await AggregationPractice.aggregate([{ $count: "totalUsers" }])
    const temp1 = await AggregationPractice.aggregate([{ $group: { _id: null, "totalUsersUsingGroup": { $sum: 1 } } }])
    temp.push(temp1[0])
    return { temp }
}

async function Question5() {
    /*Find the user with the highest age*/

    const temp = await AggregationPractice.aggregate([{ $group: { _id: null, maxuser: { $max: "$age" } } }])
    return { temp }
}
async function Question6() {
    /*Retrieve only the names of all users.*/

    const temp = await AggregationPractice.aggregate([{ $group: { _id: null, name: { $push: "$name" } } }])
    const temp1 = await AggregationPractice.aggregate([{ $project: { _id: 0, name: 1 } }])
    return {
        using$group: temp,
        using$project: temp1
    }
}

async function Question7() {
    /*Retrieve the hobbies of the user with the lowest age.*/

    const temp = await AggregationPractice.aggregate([{ $sort: { age: 1 } }, { $limit: 1 }, { $project: { _id: 0, hobbies: 1 } }])
    return { temp }
}

async function Question8() {
    /*Find users who enjoy both "reading" and "running" as hobbies.*/

    const temp = await AggregationPractice.aggregate([{ $match: { hobbies: { $all: ["reading", "running"] } } }])
    return { temp }
}

async function Question9() {
    /*Count the total number of hobbies across all users.*/

    const temp = await AggregationPractice.aggregate([{ $unwind: "$hobbies" }, { $group: { _id: null, uniqueHobbies: { $addToSet: "$hobbies" } } }, { $unwind: "$uniqueHobbies" }, { $count: "Total unique hobbies" }])
    return { temp }
}

async function Question10() {
    /*Find users whose names contain the letter 'a'*/

    const temp = await AggregationPractice.aggregate([{ $match: { $or: [{ "name": { $regex: 'gary', $options: 'i' } }] } }])  // $options 'i' is for case-insensitive
    return { temp }
}

async function Question11() {
    /*Sort users by city and then by age in descending order*/

    const temp = await AggregationPractice.aggregate([{ $sort: { 'city': 1, age: -1 } }])
    return { temp }
}

async function Question12() {
    /*Find the youngest user*/

    const temp = await AggregationPractice.aggregate([{ $sort: { age: -1 } }, { $limit: 1 }])
    return { temp }
}

async function Question13() {
    /*Retrieve users who have at least one hobby*/

    const temp = await AggregationPractice.aggregate([{ $match: { hobbies: { $exists: true, $ne: [] } } }]) // Matches documents where hobbies field exists and is not an empty array
    return { temp }
}


async function Question14() {
    /*Count the number of users in each city.*/

    const temp = await AggregationPractice.aggregate([{ $group: { _id: '$city', Users: { $push: "$name" } }, UserCount: { $sum: 1 } }])
    return { temp }
}

async function Question15() {
    /*Find users whose age is an even number.*/

    const temp = await AggregationPractice.aggregate([{
        $match: {
            $expr: {
                $eq: [
                    { $mod: ["$age", 2] },
                    0
                ]
            }
        }
    }])
    return { temp }
}

/* Intermediate */

async function Question16() {
    /*Calculate the average age of users*/

    const temp = await AggregationPractice.aggregate([{ $group: { _id: null, averageAge: { $avg: "$age" } }, }])
    return { temp }
}

async function Question17() {

    /*Project only the names and ages of users.*/

    const temp = await AggregationPractice.aggregate([{ $project: { _id: 0, name: 1, age: 1 } }])
    return { temp }
}

async function Question18() {

    /*Group users by city and find the average age in each city.*/

    const temp = await AggregationPractice.aggregate([{ $group: { _id: "$city", avg: { $avg: "$age" } } }])
    return { temp }
}

async function Question19() {

    /* Find the second oldest user.*/

    const temp = await AggregationPractice.aggregate([{ $sort: { "age": -1 } }, { $skip: 1 }, { $limit: 1 }])
    return { temp }
}

async function Question20() {

    /* Group users by age and count the number of users in each age group.*/

    const temp = await AggregationPractice.aggregate([{
        $group: {
            _id: '$age', "cnt": { $sum: 1 }
        }
    }])
    return { temp }
}




async function Question21() {

    /*Retrieve users who have the hobby "traveling."*/

    const temp = await AggregationPractice.aggregate([{ $match: { hobbies: "traveling" } }])
    return { temp }
}

async function Question22() {

    /*Count the number of unique cities in the dataset.*/
    const temp = await AggregationPractice.aggregate([{ $group: { _id: "$city" } }, { $count: 'total cities' }])

    // const temp = await AggregationPractice.aggregate([{ $unwind: "$city" }, { $group: { _id: null, 'allCities': { $addToSet: '$city' } } }, { $unwind: "$allCities" }, { $count: 'total cities' }])
    return { temp }
}

async function Question23() {

    /*Find users aged between 25 and 30.*/
    const temp = await AggregationPractice.aggregate([{ $match: { age: { $gt: 25, $lt: 30 } } }])
    return { temp }
}

async function Question24() {

    /*Sort users by the number of hobbies they have in ascending order*/
    const temp = await AggregationPractice.aggregate([{ $addFields: { numberOfHobbies: { $size: "$hobbies" } } }, { $sort: { "numberOfHobbies": 1 } }])
    const temp2 = await AggregationPractice.aggregate([{ $project: { _id: 0, numberOfHobbies: { $size: "$hobbies" } } }, { $sort: { "numberOfHobbies": 1 } }])
    return { temp }
}


async function Question25() {

    /*Find users who have more than two hobbies.*/
    const temp = await AggregationPractice.aggregate([{ $addFields: { numberOfHobbies: { $size: "$hobbies" } } }, { $match: { "numberOfHobbies": { $gt: 2 } } }])
    const temp1 = await AggregationPractice.aggregate([{
        $match: {
            $expr: {
                $gt: [{ $size: "$hobbies" }, 2]
            }
        }
    }])
    return { temp1 }
}

async function Question26() {

    /*Find users who have more than two hobbies.*/
    const temp = await AggregationPractice.aggregate([{ $project: { _id: 0, name: 1, firstHobby: { $arrayElemAt: ["$hobbies", 0] } } }])
    return { temp }
}


async function Question27() {
    /*Find the user with the highest age in each city.*/

    const temp = await AggregationPractice.aggregate([{
        $group: {
            _id: "$city",
            maxAgeUser: { $max: { age: "$age", name: "$name" } }
        }
    }])
    return { temp }
}

async function Question28() {
    /*Calculate the sum of ages for all users.*/

    const temp = await AggregationPractice.aggregate([{ $group: { _id: null, 'sum': { $sum: '$age' } } }])
    return { temp }
}


async function Question29() {
    /*Unwind the array of cities, creating a document for each city a user is associated with*/

    const temp = await AggregationPractice.aggregate([{ $unwind: '$city' }, { $project: { _id: 0, name: 1, age: 1, hobbies: 1, city: '$city' } }])
    return { temp }
}

async function Question30() {
    /*Retrieve users who have hobbies that start with the letter 'r'.*/

    const temp = await AggregationPractice.aggregate([{ $match: { "hobbies": { $regex: 'r' } } }])
    return { temp }
}
async function myfunction() {
    /* Find users aged 30 and above.*/

    const temp = await AggregationPractice.aggregate([{
        $addFields: { hooiescnt: { $size: "$hobbies" } }
    }, { $group: { _id: null, sum: { $sum: "$hooiescnt" } } }
    ])
    return temp
}
async function Question30() {
    /*Group users by the total number of hobbies they have.*/

    const temp = await AggregationPractice.aggregate([{ $project: { _id: 0, name: 1, age: 1, city: 1, totalHobbies: { $size: "$hobbies" } } }, { $group: { _id: "$totalHobbies", 'users': { $push: "$$ROOT" } } }])
    return { temp }
}

async function Question31() {
    /*Group users by the total number of hobbies they have.*/

    const temp = await AggregationPractice.aggregate([{ $project: { _id: 0, name: 1, age: 1, city: 1, totalHobbies: { $size: "$hobbies" } } }, { $group: { _id: "$totalHobbies", 'users': { $push: "$$ROOT" } } }])
    return { temp }
}

async function Question31() {
    /*Find the users with the most hobbies.*/

    const temp = await AggregationPractice.aggregate([
        {
            $addFields: {
                hobbiesCount: { $size: "$hobbies" }
            }
        },
        {
            $sort: {
                "hobbiesCount": -1
            }
        }, {
            $group: {
                _id: null,
                maxHobbiesCount: { $first: "$hobbiesCount" },
                user: { $push: "$$ROOT" }
            }
        }, {
            $project: {
                _id: 0,
                usersWithMostHobbies: {
                    $filter: {
                        input: "$user",
                        as: "user",
                        cond: { $eq: ["$$user.hobbiesCount", "$maxHobbiesCount"] }
                    }
                }
            }
        }
    ])
    return { temp }
}

async function Question32() {
    /*Project only the users who have a name longer than 5 characters.*/

    const temp = await AggregationPractice.aggregate([{
        $match: {
            $expr: {
                $eq: [{ $strLenCP: '$name' }, 5]
            }
        }
    }
    ])
    return { temp }
}

async function Question33() {
    /*Sort users by the number of hobbies they have in descending order.*/

    const temp = await AggregationPractice.aggregate([
        {
            $addFields: { "noOfHobbies": { $size: "$hobbies" } }
        },
        {
            $sort: { "noOfHobbies": -1 }
        },
        {
            $project: { "noOfHobbies": 0 }
        }
    ])
    return { temp }
}

async function Question34() {
    /*Find users who have hobbies in common with the user with the highest age.*/



    const temp = await AggregationPractice.aggregate([
        {
            $sort: {
                age: -1
            }
        },
        { $limit: 1 },
        { $project: { _id: 1, hobbies: 1 } },
        {
            $lookup: {
                from: "aggregationpractices",
                let: { oldHobbies: "$hobbies", oldId: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$hobbies", "$$oldHobbies"] },
                                    { $ne: ["$_id", "$$oldId"] }
                                ]
                            }
                        }
                    },
                ],
                as: "usersWithSameCity"
            }
        },


    ])

    // const temp1 = await AggregationPractice.aggregate([
    //     {
    //         $sort: {
    //             age: -1
    //         }
    //     },
    //     { $limit: 1 },

    // ])

    // const temp = await AggregationPractice.aggregate([
    //     {
    //         $match: {
    //             hobbies: { $in: temp1[0].hobbies, },
    //             _id: { $ne: temp1[0]._id }
    //         }
    //     }
    // ]);
    return { temp }
}
async function Question35() {
    // Find the users who have the same city as user "Nilesh."

    const temp = await AggregationPractice.aggregate([
        { $match: { name: "Nilesh" } },
        { $project: { _id: 1, name: 1, city: 1 } },
        {
            $lookup: {
                from: "aggregationpractices",
                let: { oldCity: "$city", oldId: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$city", "$$oldCity"] },
                                    { $ne: ["$_id", "$$oldId"] }
                                ]
                            }
                        }
                    },
                ],
                as: "usersWithSameCity"
            }
        }
    ]);
    return { temp }
}

async function Question36() {
    // Retrieve users who have hobbies that are not shared by any other user.

    const temp = await AggregationPractice.aggregate([
        { $unwind: "$hobbies" },
        {
            $group: {
                _id: "$hobbies",
                count: { $sum: 1 },
                userIds: { $push: "$$ROOT" }
            }
        },
        {
            $match: { count: 1 }
        }
    ]);
    return { temp }
}


// Expert:

async function Question36() {
    // Create a pipeline that combines multiple aggregation stages to get users in a customized order.

    const temp = await AggregationPractice.aggregate([
        { $match: { age: { $gte: 18 }, hobbies: "swimming" } },

        // Stage 2: Project to include only necessary fields
        { $project: { name: 1, age: 1, hobbies: 1, registrationDate: 1 } },

        // Stage 3: Add a new field 'customOrder' based on a custom ranking logic
        {
            $addFields: {
                customOrder: {
                    $switch: {
                        branches: [
                            { case: { $eq: ["$hobbies", "reading"] }, then: 1 },
                            { case: { $in: ["swimming", "$hobbies"] }, then: 2 },
                            { case: { $gte: ["$age", 31] }, then: 3 },
                            // Add more branches based on your criteria
                        ],
                        default: 4 // Assign a default value for other cases
                    }
                }
            }
        },
        { $sort: { customOrder: 1, registrationDate: -1 } },
    ]);
    return { temp }
}

async function Question37() {
    // Perform a facet aggregation to get count and average age separately.

    const temp = await AggregationPractice.aggregate([
        {
            $facet: {
                "totalCount": [{ $count: "countOfDocs" }],
                "averageAge": [{
                    $group: { _id: null, averageAge: { $avg: "$age" } }
                }]
            }
        }

    ]);
    return { temp }
}

async function Question38() {
    // Implement a custom aggregation stage to concatenate the names of users in each city.

    const temp = await AggregationPractice.aggregate([
        {
            $group: {
                _id: "$city",
                users: {
                    $accumulator: {
                        accumulateArgs: ["$name"],
                        init: function () { return [] },
                        accumulate: function (names, name) { names.push(name); return names; },
                        merge: function (names1, names2) { return names1.concat(names2); },
                        finalize: function (names) { return names.join(', '); }
                    }
                }
            }
        }

    ]);
    return { temp }
}

async function Question39() {
    // Project only the users who have hobbies starting with the letter 'p'.

    const temp = await AggregationPractice.aggregate([
        {
            $match: {
                hobbies: {
                    $regex: /^p/i  // ^p indicates that the hobby should start with 'p', and the 'i' flag makes the match case-insensitive
                }
            }
        }

    ]);
    return { temp }
}

async function Indexing() {

    await AggregationPractice.createIndexes({ "age": 1 }) // chexk
    const data = await AggregationPractice.collection.getIndexes()
    return data
}

const AggregationFunction = async (req, res) => {
    /*Find users who have hobbies in common with the user with the highest age.*/
    const result = await myfunction()
    res.status(200).json(result);
}

module.exports = { AggregationFunction }

/*
 
$match: This stage filters the documents to pass only those that match the specified condition to the next stage in the pipeline. 

$expr: Allows the use of aggregation expressions inside the $match stage.

$eq: Compares two values for equality. In this case, it compares the result of the $mod expression to 0. 

$mod: Returns the remainder of the division of the first expression by the second 

$in: use to check value present in other array or not.

$ne: exclude perticular object when match with id

*/