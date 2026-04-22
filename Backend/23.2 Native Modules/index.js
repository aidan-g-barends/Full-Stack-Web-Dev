const fs = require("fs");

//fs.writeFile("message.txt", "Hello from Node.js!" , (err) => {
 //   if (err) {
   //     console.error("Error writing to file:", err);
    //} else {
      //  console.log("File written successfully!");
    //}
//});

fs.readFile("message.txt","utf-8", (err,data) =>{
    if (err) throw err;
    console.log(data);
});