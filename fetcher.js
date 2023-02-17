const request = require('request');
const fs = require('fs');

const commandLineInput = process.argv.splice(2);
const url = commandLineInput[0];
const localFilePath = commandLineInput[1];
request(url, (error, response, body) => {

  
  fs.writeFile(localFilePath, body, error, (() => { 
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    }
    const bytes = fs.statSync(localFilePath).size
    console.log(`Downloaded and saved ${bytes} bytes to ${localFilePath}`)


    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  }));
});



