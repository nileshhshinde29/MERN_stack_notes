# Mongodb 

## Explain mongodb and its features.
- It is opensource document oriented data base, It is used to store large scale data.
- **It is schemaless database**:
      -  Single collection can hold multiple types of document. Each document can content different no. of fields, size.
      -  Its dont required rigid, predefined schema like reletional database.
- Document oriented: all data stores in document format in key value pair which is more flexible than RDBMS.
- Indexing: Indexing used to perform optimised search operations. we can get data more faster than usval.
- Scalability: It can be horizontally scalable.
- Replication: It creates multiple copies of data.

## How does Mongodb stores data ?
- It store data in binary incoded format ie BSON.(Binary json)
- It is designed to be lightweight and store an retrive data efficiently.


## Difference betweeen mongodb and mysql?

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
### REPLICATION



