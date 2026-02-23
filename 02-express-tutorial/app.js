const express = require('express')
const app = express()
const path = require('path');


//setup static and middleware
app.use(express.static('./importantResources'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
})

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})