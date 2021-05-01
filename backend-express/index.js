const express = require("express");
//const bodyParser = require('body-parser');
// const request = require("request");
//const https = require("https")
const cors = require('cors')
//var request = require('superagent');

const app = express();
app.use(cors())



const Mailchimp = require("mailchimp-api-v3")
require("dotenv").config({ path: __dirname + "/variables.env"});

const mcApiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;

exports.handler = async (event, context, callback) => {
  try {
    const mailchimp = new Mailchimp(mcApiKey);
    return mailchimp.post(`lists/${listId}/members`, {
      email_address: event.queryStringParameters.email,
      status: "subscribed"
    }).then(res => {
      console.log('Success!', res.email_address)
      return {
        statusCode: 200,
        body: JSON.stringify({msg: `Thank you! The email ${res.email_address} has been added to our mailing list.`})
      }
    }).catch(err => {
      console.log(err.message)
      return {
        statusCode: 500,
        body: JSON.stringify({msg: err.message})
      }
    })
  } catch (err) {
    console.log(err.message)
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
};


//  app.use(bodyParser.urlencoded({extended:true}))

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/")
// })


// app.post("/MembersAdd", function(req, res){
  
//   const email = req.body.email;

//   const data = {
//     members:[{
//       email_address: email,
//       status:"subscribed",
//       merge_fields:{
//         FNAME:email
//       }
//     }]
//   }

//   const jsonData = JSON.stringify(data)
//   const url = "https://us1.api.mailchimp.com/3.0/lists/e09494d4a6";

//   const options = {
//     method: "POST",
//     auth:"usoro: ccb89bd5a747b4564fff29ee87b494f9-us1"
//   }

//   const request = https.request(url, options, function(response) {
//     response.on("data", function(data){
//       console.log(JSON.parse(data))
//     })
//   })

//   request.write(jsonData);
//   request.end()
// })



app.listen(5000, function() {
  console.log("express listening on port 5000")

})
