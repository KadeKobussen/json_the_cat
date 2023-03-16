const request = require('request');

let url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;
request(url, (error, response, body)=>{
  if (error !== null) {
    console.log(error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('breed not found');
  } else {
    console.log(data[0].description);
  }
});

