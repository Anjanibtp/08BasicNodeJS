var express = require('express');
var app = express();
app.listen(3001);
// Adding a middleware which is provided by express itself
app.use(express.json());
//Middleware to serve static file content webapp which is having my FIORI app
app.use("/",express.static("webapp/"));
// Implement first microservice at end point blank /
app.get("/", (req, res) => {
 res.send("Welcome to NodeJS");
});
this.aVendors = [{
  "id": "1",
  "firstName": "Mathias",
  "lastName": "Georgy",
  "companyName": "SAP Labs",
  "website": "sap.com",
  "emailId": "mathias.sap@sap.com",
  "gstNumber": "1485679"
},
{
  "id": "2",
  "firstName": "Mallesa",
  "lastName": "Ostwick",
  "companyName": "Anubhav Trainings",
  "website": "anubhavtrainings.com",
  "emailId": "mallesa.sap@anubhavtrainings.com",
  "gstNumber": "14855678"
},
{
  "id": "3",
  "firstName": "Iris",
  "lastName": "Gosh",
  "companyName": "Sony Labs",
  "website": "sony.com",
  "emailId": "iris.sap@sony.com",
  "gstNumber": "56756789"
},
{
  "id": "4",
  "firstName": "Napolean",
  "lastName": "Gupta",
  "companyName": "IBM",
  "website": "ibm.com",
  "emailId": "napolean.sap@ibm.com",
  "gstNumber": "6784379"
}];
app.get("/vendors",(req,res) => {
    res.json(this.aVendors);
});
app.get("/vendors/:id",(req,res) => {
var foundVendor = this.aVendors.find(function(element){
  return element.id === req.params.id;
});

typeof(foundVendor) !== undefined ? res.send(foundVendor) : res.send({
  "message": "The vendor is not found"
});
});
app.get("/index.html", (req,res) => {
  res.sendFile(__dirname + '/webapp/index.html')
});
// app.get("/Component.js", (req,res) => {
//   res.sendFile(__dirname + '/webapp/Component.js')
// });
// app.get("/mainfest.json", (req,res) => {
//   res.sendFile(__dirname + '/webapp/manifest.json')
// });
app.post("/vendors",(req,res) => {
  var postRequestData = req.body;
  var uuid4 = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
    function(c){
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8 );
      return v.toString(16);
   } );
  }
  postRequestData.id = uuid4();
  res.json(postRequestData);
})

console.log("Your Mocroservice is running @ http://localhost:3001");

