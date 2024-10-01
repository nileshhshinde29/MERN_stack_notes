Find the Maximum Product of Two Elements in an Array

Given an array of integers, find the maximum product of any two elements in the array.
Example: Input: [1, 5, 3, 2, 8] → Output: 40 (i.e., 8 * 5)
Rotate Array

Write a function that removes duplicates from a given array.
Example: Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]
Find Common Elements in Two Arrays

Write a function to find all common elements in two given arrays.
Example: Input: [1, 2, 3, 4], [3, 4, 5, 6] → Output: [3, 4]
Find the Intersection of Three Sorted Arrays

Given three sorted arrays, find their intersection.
Example: Input: [1, 2, 3], [2, 3, 4], [3, 4, 5] → Output: [3]

-Move Zeroes to the End
Write a function that moves all zeroes in an array to the end while keeping the relative order of non-zero elements.
Example: Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]


-Write a function to check whether a given string is a palindrome.
Example: Input: "madam" → Output: true


-Find the First Non-Repeating Character in a String
Write a function to find the first non-repeating character in a string.
Example: Input: "swiss" → Output: "w"


Check if Two Strings are Anagrams
Write a function that checks if two strings are anagrams of each other.
Example: Input: "listen", "silent" → Output: true

Find the Longest Common Prefix
Given an array of strings, find the longest common prefix among them.
Example: Input: ["flower", "flow", "flight"] → Output: "fl"

Count the Number of Vowels in a String
Write a function to count the number of vowels in a given string.
Example: Input: "hello" → Output: 2

Longest Palindromic Substring
Write a function that finds the longest palindromic substring in a given string.
Example: Input: "babad" → Output: "bab"

Write a function that returns the contiguous subarray with the maximum sum.
Example: Input: [-2,1,-3,4,-1,2,1,-5,4] → Output: 6 (from [4, -1, 2, 1])

Write a function that finds all pairs of numbers in an array that sum to a specific value.
Example: Input: arr = [1, 2, 3, 4, 5], target = 6 → Output: [[1, 5], [2, 4]]

"I love programming" → Output: "programming love I"

"aabcccccaaa" → Output: "a2b1c5a3"

"abcabcbb" → Output: 3 (substring "abc") non repeating char

"abcdef" → Output: true

Write a function to find the smallest subarray whose sum is greater than or equal to a given number.
Example: Input: arr = [1, 4, 45, 6, 0, 19], x = 51 → Output: 3 (subarray [4, 45, 6])

eg-input - east output - ast
input - proceed output - prd

## Question 21: Can you write a function in JavaScript to rename a specific property in an object?
const renameProperty = (obj, oldName, newName) => ({ ...obj, [newName]: obj[oldName], ...(delete obj[oldName], obj) });

## const people = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Alice', age: 28 },
];

const result = groupByProperty(people, 'name');
// result: { 'Alice': [ { id: 1, name: 'Alice', age: 25 }, { id: 3, name: 'Alice', age: 28 } ],
//           'Bob': [ { id: 2, name: 'Bob', age: 30 } ] }

