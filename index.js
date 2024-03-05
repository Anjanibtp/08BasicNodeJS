var express = require('express');
var app = express();
app.listen(3001);
// Implement first microservice at end point blank /
app.get("/", (req, res) => {
 res.send("Welcome to NodeJS");
});
app.get("/vendors",(req,res) => {
    res.json({
        "empTable" : [
          {
            "empId" : 1000001,
            "empName" : "Anjani Bandla",
            "salary" : 5000,
            "currency": "USD"
          },
          {
            "empId" : 1000002,
            "empName" : "Lavanya Gupta",
            "salary" : 8000,
            "currency": "JPJ"
          },
          {
            "empId" : 1000003,
            "empName" : "Sam Prabhu",
            "salary" : 10000,
            "currency": "EUR"
          }
        ],
        "cities": [
          {
            "cityName":"Jaipur",
            "state":"Rajasthan"
          },
          {
            "cityName":"Bangalore",
            "state":"Karnataka"
          },
          {
            "cityName":"Detroit",
            "state":"Michigan"
          },
          {
            "cityName":"Mumbai",
            "state":"Maharashtra"
          }
      
        ],
        "gender":{
        "M":"Male",
        "F":"Female"
        }
      })
})
console.log("Your Mocroservice is running @ http://localhost:3001");

