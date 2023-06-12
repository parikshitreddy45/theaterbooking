let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb://127.0.0.1:27017";
//"mongodb+srv://Test:abc123@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority"
//const uri="mongodb+srv://parikshitreddy:6yYW3XqfVo4bJyqU@cluster0.tnlzcyi.mongodb.net/?retryWrites=true&w=majority"
let client = new MongoClient(mongoUrl)

async function dbConnect(){
    await client.connect()
}

let db = client.db('bookmyshowdata');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    } catch(err){
        output.push({"Error":"Error in getData"})
    }
    return output
}

async function postData(colName,data){
    let output;
    try {
       await db.collection(colName).insertOne(data)
       output = {"response":"Order placed"}
    }
    catch{
        output = {"response":"Error in postdata"}
    }
    return output
}

async function updateOrder(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    } catch(err){
        output = {"response":"Error in update data"}
    }
    return output
}

async function deleteOrder(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    } catch(err){
        output = {"response":"Error in delete data"}
    }
    return output
}

module.exports = {
    dbConnect,
    getData,
    postData,
    updateOrder,
    deleteOrder
}