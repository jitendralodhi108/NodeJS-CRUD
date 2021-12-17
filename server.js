const express = require('express')

// this would be the name in the databsee 
const url = 'mongodb://localhost/dbemployee'



const mongose = require ('mongoose')
const app = express ()



// swagger ------------------
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerJSDocs = YAML.load("./api.yml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
// ------------------ 

mongose.connect(url,{useNewUrlParser:true})
const con = mongose.connection


// Mongodb connection confirmation 
con.on('open',()=>{
    console.log("Connected .....!")
})
app.use(express.json())



const Router = require('./routers/crud')
app.use('/crud',Router)


app.listen(8000 , () =>{
    console.log("listening at port 8000")
})
 