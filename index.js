const express= require('express')
const app = express()
const format= require('date-format')
const port= 5000

app.get('/', (req, res)=>{
    res.status(202).send('hello from shubham')
})

app.get('/api/v1/facebook', (req, res)=>{
    res.status(200).json({"username":"shubhamjadhav190@gmail.com",'followers':"200","follows":"500",'date':format.asString('hh:mm:ss',new Date)})
})
app.get('/api/v1/instagram', (req, res)=>{
    res.status(200).json({"username":"tom2mavrick",'followers':"300","follows":"400",'date':format.asString('hh:mm:ss',new Date) })
})
app.get('/api/v1/linkedin', (req, res)=>{
    res.status(200).json({"username":"shubhamjadhav190@gmail.com",'followers':"2000","follows":"700",'date':format.asString('hh:mm:ss',new Date)})
})

app.get('/api/:name', (req, res)=>{
    res.status(200).json({'params':req.params.name})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })