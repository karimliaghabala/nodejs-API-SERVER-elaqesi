const express = require("express");
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(cors())
let product = [
    {
        "id": "1",
        "name":"Apple",
        "price":"500"
    },    {
        "id": "2",
        "name":"Samsung",
        "price":"800"
    },
    {
        "id": "3",
        "name":"Xiomi",
        "price":"540000"
    }
]

app.get("/",(req,res)=>{
    res.send(product);
})
app.get("/product/:id",(req,res)=>{
    res.send(JSON.stringify(product.find(item=>item.id==req.params.id)))
    if(item){
        res.send(item)
    }else{
        res.status(404).json
    }
})
app.put("/product/:id",(req,res)=>{
    paramsId = +req.params.id
    const itemIndex = product.findIndex(item=>item.id==paramsId)
    if(itemIndex !== -1){
        product[itemIndex]= {...req.body}
        res.send(product[itemIndex])
    }else{
        res.status(404).json()
    }
})
app.post("/products",(req,res)=>{
    res.send(req.body)
    console.log(req.body)
    product.push(req.body)
})
app.delete("/product/:id",(req,res)=>{
    product = product.filter(item=>item.id != req.params.id)
    res.send(product)
})

app.listen(3000,()=>{
    console.log("Server Loading...")
})