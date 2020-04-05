const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

const bikes = [
    {id:0, name: "MONARK ZEROOOO"},
    {id:1, name: "Devinci maade with love"},
    {id:2, name: "YT the brand of the goat"},
    {id:3, name: "Santa Cruz the expensive yet better one"},
    {id:4, name: "transition willy prooo"},
    {id:5, name: "specialized - test the best"},
    {id:6, name: "giant good ol reliable"},
    {id:7, name: "pivot chivot"},
    {id:8, name: "trek good looking bikee"},
    {id:9, name: "yeti pricey"}
    ];  

app.listen(8000, () => {
  console.log("server started");
});

app.route('/api/bikes').get((request, response) => {
    response.send({bikes});   
});

app.route('/api/bikes/:id').get((request, response) => {
    const requestedBikeId = + request.params['id'];
    let returnBikes = bikes.filter(bike => bike.id === requestedBikeId );
    if (returnBikes.length === 1)
      response.send(returnBikes[0]);
    else 
      response.status(404).send(request.params);
});