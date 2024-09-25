const path = require("path");

console.log(__filename); /* /home/am-pc-63/NHS/React/react_Interview_notes_prectice/myNotes/notes/mission 2024/Core node js/Path module/Index.js*/
console.log(__dirname);  /*/home/am-pc-63/NHS/React/react_Interview_notes_prectice/myNotes/notes/mission 2024/Core node js/Path module */

console.log(path.basename(__filename)); //Index.js
console.log(path.basename(__dirname));  //Path module

console.log(path.extname(__filename));  //.js
console.log(path.extname(__dirname));   // ' '


console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));      // Check it is absolute path or not.
console.log(path.isAbsolute("./data.json"));   // Check it is relative path or not.

console.log(path.join("folder1", "folder2", "index.html")); //folder1/folder2/index.html