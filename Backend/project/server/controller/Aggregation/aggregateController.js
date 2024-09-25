
const AggregateDB = require('../model/aggrigationSchema')

const queriesPrectice = async (req, res) => {

}
const aggregateFunction = async (req, res) => {
    try {
        /* const categories = await AggregateDB.aggregate([{
            $match: {
                // gender: "male"
                

            }
        },
        
        ]) */

        const categories = await AggregateDB.aggregate([
            // {$group: { _id: "$age", names: { $push: "$name" } }}  //group creates a group based on given property.
            // {$group: { _id: "$age", wholeDoc: { $push: "$$ROOT" } }  // $$ROOT is generally use for push whole document
            // { $match: { gender: 'female' } }, { $group: { _id: '$age', countOfNumberOfFieldS: { $sum: -1 } }, }, { $sort: { countOfNumberOfFieldS: 1 } }, { $group: { _id: null, maxGroup: { $max: "$countOfNumberOfFieldS" } } }
            // { $group: { _id: "$age", tags: { $push: '$tags' } } }, { $unwind: "$tags" } // unwind used to unwind nested array in single array
            // { $group: { _id: null, averageAge: { $avg: "$age" } } } // group id null groups all object
            // { $group: { _id: null, count: { $sum: { $size: { $ifNull: ["$tags", []] } } } } } // if null is used when fields absents.
            // { $unwind: "$tags" }, { $group: { _id: null, allTags: { /* $push */ $addToSet: "$tags" }, count: { $sum: 1 } } }, // add to set is used for remove repeated elements from array.
            /* {
                $group: {
                    _id: null,
                    avgScore: {
                        $push: {
                            $avg: {
                                $filter: {
                                    input: "$score",
                                    as: "score",
                                    cond: { $gt: ["$age", 20] }
                                }
                            }
                        }
                    }
                }
            } */
            /* {
                $project: {  // $project is used to reshape the document
                    _id: 0,
                    marksPlusAge: { $add: ["$index", "$age"] },
                    result: { $slice: ["$score", 1, 2] },
                    name: 'hello'
                }
            } */

            /*  {
                 $group: {
                     _id: null,
                     count: { $sum: 1 },
                     result: { $push: "$$ROOT" },
                 }
             },
             {
                 $addFields: {
                     page: 1,
                     totalPages: { $divide: ["$count", 3] }
                 }
             }, */

        ])

        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json(error);
    }


    // console.log(req.user);
    // const contacts = await Contact.find()
    // res.status(200).json(contacts);
}

module.exports = { aggregateFunction, queriesPrectice }



/* 

db.students.insertMany([
  { id: 1, name: 'Ryan', gender: 'M',marks:20,age:22,amount:22,np:2, },
  { id: 2, name: 'Joanna', gender: 'F',marks:40,age:21,amount:10,np:2},
  { id: 3, name: 'puskraj', gender: 'M',marks:50,age:18 ,amount:15,np:3},
  { id: 4, name: 'puskraj', gender: 'M',marks:60,age:20 ,amount:10,np:3}
]);
//-----------addition of two field within same document---
db.students.aggregate([
    {$project:{
        _id:0,
        marksAge:{$add:["$marks", "$age"]}
    }}
    ])
//------------------------multiply-------
db.students.aggregate([
    {$project:{
        name:1,
        totoalPrice:{$multiply:["$amount", "$np"]}
    }}
    ])
//-----------------get count of all document-----------
db.students.aggregate([
   { $group:{
      _id:"$null",
     count:{$sum:1}
    }}
    ])
//--------------addition of field value in ------------
    db.students.aggregate([
   { $group:{
     _id:null,
     marks:{$sum:"$marks"}
    }}
    ])
//---------------pagination using aggregation------
 db.students.aggregate([
   { $group:{
      _id:null,
      count:{$sum:1},
      result:{$push:"$$ROOT"},
    }
   },
   {
       $addFields:{
           page:1,
           totalPages:{ $divide: [ "$count", 3 ] }
       }
   },
  { $project:{
       _id:0,
       result:{$slice:["$result",1,2]},
       page:1,
       totalPages:1
   }}
    ])
//--------------------pagination----
db.students.find({}).skip(2).limit(1)
//-------find count of pushkraj-----------------
db.students.aggregate(
     [ { $match : { name : "puskraj" } },
     {
         $group:{
             _id:"$name",
              count:{$sum:1}
         }
     }]
    )
//---------------find count of pushkraj--------------------------
db.students.find({name:'puskraj'}).count()*/