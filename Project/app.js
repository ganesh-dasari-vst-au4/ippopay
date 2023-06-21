const express = require("express");
 require("./database");
 const cors = require("cors");
const app = express()

app.use(express.json());
app.use(cors());

app.use('/',require('./routes/users'))

app.listen('3020',()=>{
    console.log('Server running')
})