# Mongodb 

## Explain mongodb and its features.
- It is open-source document oriented data base, It is used to store large scale data.
- **It is schemaless database**:
      -  Single collection can hold multiple types of document. Each document can content different no. of fields, size.
      -  Its don't required rigid, predefined schema like relational database.
- Document oriented: all data stores in document format in key value pair which is more flexible than RDBMS.
- Indexing: Indexing used to perform optimised search operations. we can get data more faster than usual.
- Scalability: It can be horizontally scalable.
- Replication: It creates multiple copies of data.

## How does Mongodb stores data ?
- It store data in binary encoded format ie BSON.(Binary json)
- It is designed to be lightweight and store an retrieve data efficiently.


## Difference between mongodb and mysql?

| Aspect         | MongoDB                                       | MySQL                                      |
|----------------|-----------------------------------------------|--------------------------------------------|
| Data Model     | Document-oriented (NoSQL)                    | Relational (SQL)                           |
| Schema         | Dynamic schema; no predefined schema required| Static schema; predefined schema required  |
| Query Language | MongoDB Query Language (MQL)                 | Structured Query Language (SQL)            |
| Scalability    | Horizontally scalable; sharding supported    | Vertically scalable; sharding possible     |
| Joins          | No support for joins; data denormalization   | Supports joins between related tables      |
| Use Cases      | Big Data, real-time analytics, flexible data models | Traditional web applications, structured data |
| Examples       | Social media analytics, IoT, content management | E-commerce, banking, inventory management |


## What are the different data models in mongodb ?
1. Embedded Data Model
  - It containt all related data in single document.
```jsx
{
	_id: ,
	Emp_ID: "10025AE336"
	Personal_details:{
		First_Name: "Radhika",
		Last_Name: "Sharma",
		Date_Of_Birth: "1995-09-26"
	},
	Contact: {
		e-mail: "radhika_sharma.123@gmail.com",
		phone: "9848022338"
	},
	Address: {
		city: "Hyderabad",
		Area: "Madapur",
		State: "Telangana"
	}
}
```
2. Normalised Model
  - It can have sub docuents in the original document.

```jsx
{
	_id: <ObjectId101>,
	Emp_ID: "10025AE336"
}
Personal_details:

{
	_id: <ObjectId102>,
	empDocID: " ObjectId101",
	First_Name: "Radhika",
	Last_Name: "Sharma",
	Date_Of_Birth: "1995-09-26"
}
Contact:

{
	_id: <ObjectId103>,
	empDocID: " ObjectId101",
	e-mail: "radhika_sharma.123@gmail.com",
	phone: "9848022338"
}
Address:

{
	_id: <ObjectId104>,
	empDocID: " ObjectId101",
	city: "Hyderabad",
	Area: "Madapur",
	State: "Telangana"
}
```

## indexing
- When we create indexing, database creates separates data structure that stores indexed field and pointer which refers to original document.
- When searching any document in collection we don`t need to check each document one by one. searching query search this in indexed object and this indexed object returns related document as response.
- Useful to get data faster. 

**Types:**
1. Single Field index. AggregationQuestionPracticeSchema.createIndexes({ name: 1 })
2. compound index. AggregationQuestionPracticeSchema.createIndexes({name:1, age:-1})
3. Text index. // AggregationQuestionPracticeSchema.createIndexes({ name:"text" })

## What is mongodb REPLICATION and SHARDING ?
Both used for increasing scalability.
### REPLICATION:
- It create multiple copies of data across the multiple servers.
- It can be done by replica set, which consists multiple mongodb instatces. Each instance contain copy of data.
- One of this node is acts as a primary node, which handles all read and write operations. other nodes acts as secondary nodes.
- If primary node fails then. one of the secondary node automatically becomes a primary node.

## Sharding:
- It divides data across multiple servers to distribute storage and workload. for horizontal scaling.
- It is achieved by divides data in the form of chunk on the basis of shad key.
- Each shard store subset of data.

##  What is meant by _id fields in Mongodb?
- It special field in every document, and it serves as primary key.
- It is used to uniquely identify document.
- Mongodb automatically generated this field when haven't provided.

## How does mongodb creates ObjectID field?
- **Timestamp**: first 4 bytes of id is represent timestamp.
- **Machine identifier**: next 3 bytes represents identifier of machine on which it generated.
- **Process Identifier**: Next 2 bytes are represents a process itentifies who genarates objectId.
- **Counter**: final 3 bytes represents counter value, which is incremented for each objectId creation.

## What is the role of profiler in MongoDB ?
- It collects all detailed information about database commands exicuting agains current monodb instance.

## Can we create own functions in mongodb aggregation pipeline ?
- $function and $accumulator.

## What are docuements in mongodb?
- document is basic unit of storage simillar to row in relational database.
- It contains field value pare to store value.
- each field has unique name.

## What are Collection in mongodb?
- It is grouping of mongodb collection, it is similler to table in relational database.
- It can contents multiple collections.

##  What is difference between primary and secondary key in mongodb ?
**Primary key:**
- _id is serves as a primary key. It is automatially indexed.
- _id is immutable, we can not change it once document creation.

**Secondary Key:**
- It is reffers to indexed key which is used for serching purpose.
- It is not necessory to be unique in collection.

## What is difference between join and lookup in mongodb
**Join:**
- In relational database like sql join used to combine data from two or more database
- It can content multiple joins like left, right, outer
**lookup:**
- It is used to perform left outer join between two collections of same database.

## What is NameSpaces in mongodb ?

## What is the use of pretty method in mongodb ?
- method is used to format the output of queries and operations in a more human-readable and visually appealing format. 


## What is the use of $set in mongodb ?

## Difference between drop and remove ?
- drop collection   eg db.collection.drop()
- remove documents  eg db.collection.remove({ age: { $gte: 18 } });  deprecated

## How to rename collection ?
db.collection.renameCollection("newCollectionName")




