const { extname } = require('path');
const path = require('path');

//Base File Name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path,extname(__filename));

//Create Path Object 
console.log(path.parse(__filename).base);