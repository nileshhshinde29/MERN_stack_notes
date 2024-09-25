[
    { "_id": 1, "name": "John", "age": 25, "city": "New York", "hobbies": ["reading", "running"] },
    { "_id": 2, "name": "Alice", "age": 30, "city": "Los Angeles", "hobbies": ["swimming", "painting"] },
    { "_id": 3, "name": "Bob", "age": 22, "city": "Chicago", "hobbies": ["coding", "gaming"] },
    { "_id": 4, "name": "Eve", "age": 35, "city": "San Francisco", "hobbies": ["hiking", "photography"] },
    { "_id": 5, "name": "Charlie", "age": 28, "city": "Seattle", "hobbies": ["cooking", "traveling"] },
    { "_id": 6, "name": "David", "age": 26, "city": "New York", "hobbies": ["gardening", "movies"] },
    { "_id": 7, "name": "Fiona", "age": 32, "city": "Los Angeles", "hobbies": ["yoga", "music"] },
    { "_id": 8, "name": "Gary", "age": 27, "city": "Chicago", "hobbies": ["cycling", "writing"] },
    { "_id": 9, "name": "Helen", "age": 31, "city": "San Francisco", "hobbies": ["drawing", "volunteering"] },
    { "_id": 10, "name": "Ivy", "age": 29, "city": "Seattle", "hobbies": ["skiing", "dancing"] }
]

Easy:
Retrieve all documents from the "users" collection.
Retrieve the users sorted by age in ascending order.
Find users aged 30 and above.
Count the total number of users.
Find the user with the highest age.
Retrieve only the names of all users.
Retrieve the hobbies of the user with the lowest age.
Find users who enjoy both "reading" and "running" as hobbies.
Count the total number of hobbies across all users.
Find users whose names contain the letter 'a'.
Sort users by city and then by age in descending order.
Find the youngest user.
Retrieve users who have at least one hobby.
Count the number of users in each city.
Find users whose age is an even number.

    Intermediate:
Calculate the average age of users.
Find users older than the average age.
Project only the names and ages of users.
Group users by city and find the average age in each city.
Find the second oldest user.
Limit the result to 3 users.
Find users whose names start with the letter 'A'.
Group users by age and count the number of users in each age group.
Retrieve users who have the hobby "traveling."
Count the number of unique cities in the dataset.
Find users aged between 25 and 30.
Sort users by the number of hobbies they have in ascending order.
Find users who have more than two hobbies.
Project only the users' names and their first hobby.
Group users by the first letter of their name and count the number of users in each group.

    Advanced:
Find the user with the highest age in each city.
Calculate the sum of ages for all users.
Find users whose age is a prime number.
Unwind the array of cities, creating a document for each city a user is associated with.
Find the users with ages between the second and third quartiles.
Retrieve users who have hobbies that start with the letter 'r'.
Group users by the total number of hobbies they have.
Find the users with the most hobbies.
Project only the users who have a name longer than 5 characters.
Sort users by the number of hobbies they have in descending order.
Find users who have hobbies in common with the user with the highest age.
Find the users who have the same hobbies as user "Alice."
Group users by the combination of their city and age.
Find users who have at least one hobby in common with the user with the lowest age.
Retrieve users who have hobbies that are not shared by any other user.

    Expert:
Create a pipeline that combines multiple aggregation stages to get users in a customized order.
Perform a facet aggregation to get count and average age separately.
Implement a custom aggregation stage to concatenate the names of users in each city.
Find the median age of users.
Project only the users who have hobbies starting with the letter 'p'.
Group users by the length of their name and find the average age in each group.
Find users who have all unique hobbies.
Calculate the average number of hobbies across all users.
Retrieve users who have the same hobbies as user "Charlie."
Find the users with the most common hobbies.
Group users by their age modulo 5 and find the average age in each group.
Find the users who have the highest number of common hobbies with the user with the lowest age.
Project only the users who have at least three hobbies.
Find the users with the most common hobbies in each city.
Group users by the number of unique hobbies they have.

    Master:
Find users who have hobbies that are not shared by any user in the same city.
Create a pipeline that calculates the cumulative sum of ages for users in each city.
Perform a facet aggregation to get the count and average age for each hobby.
Implement a custom aggregation stage to find the users with the highest number of common hobbies with each other.
Find the users who have the most hobbies in common with the user with the lowest age.
Calculate the standard deviation of ages for all users.
Project only the users who have an odd number of hobbies.
Find the users who have at least two hobbies in common with the user with the highest age.
Group users by the total number of characters in their name.
Find the users with the most common hobbies who are not from the same city.
Retrieve users who have the same set of hobbies as user "Eve."
Find users who have at least one hobby in common with users aged 30 and above.
Calculate the range of ages for each city.
Find the users who have a hobby in common with the user with the lowest age and the highest age.
Project only the users who have a unique combination of name and city.