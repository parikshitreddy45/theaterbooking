let express = require('express');
let app = express();
let port = process.env.PORT||9210;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,getData,postData,updateOrder,deleteOrder} = require('./controller/dbcontroller')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.get('/',(req,res) => {
    res.send('Hiii From express')
})

app.get('/cities',async(req,res) => {
    let query ={};
    let collection ="cities"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/Category',async(req,res) => {
    let query= {}
    if(req.query.stateId){
        query ={state_id : Number(req.query.stateId)}
    }
    else{
        query ={}
    }
    let collection = "Category";
    let output = await getData(collection,query);
    res.send(output)
 })

 app.get('/movies',async(req,res) => {
    let query= {}
    if(req.query.TheatreId){
        query ={Theatre_id : Number(req.query.TheatreId)}
    }
    else if (req.query.MovieId){
        query ={Movie_id : Number(req.query.MovieId)}
    }
    else{
        query ={}
    }
    let collection = "movies";
    let output = await getData(collection,query);
    res.send(output)
 })

 app.get('/movielist',async(req,res) => {
    let query ={}
    let collection="movielist"
    let output = await getData(collection,query)
    res.send(output)
})

 app.get('/movieshows', async(req,res) => {
    let query = {}
   if(req.query.ShowId){
        query={Show_id: Number(req.query.ShowId)}
    }
    else if(req.query.MovieId){
        query={Movie_id: Number(req.query.MovieId)}
    }
    else{
        query = {}
    }
    let collection = "movieshows";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/details/:id',async(req,res) =>{
      let id= Number(req.params.id);
      let query ={Theatre_id:id}
      let collection ="Category";
      let output = await getData(collection,query);
      res.send(output)
})

app.get('/orders',async(req,res) =>{
    let query ={}
    if(req.query.email){
        query = {email:req.query.email}
    }
    else{
         query ={}
    }
    let collection ="orders";
    let output = await getData(collection,query);
    res.send(output)
})

app.post('/placeOrder',async(req,res) =>{
   let data = req.body;
   let collection ="orders";
   let response= await postData(collection,data)
   res.send(response)
})
   
app.put('/updateOrder',async(req,res) =>{
   let collection="orders";
   let condition = {"_id":new Mongo.ObjectId(req.body._id)}
   let data ={
    $set:{
        "status":req.body.status
    }
   }
   let output =await updateOrder(collection,condition,data)
   res.send(output)
})

app.delete('/deleteOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let output = await deleteOrder(collection,condition)
    res.send(output)
})
 
app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})