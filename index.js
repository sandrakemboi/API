import express from "express";
const app = express()


//MIDDLEWARES
app.use(express.json())// This enables one to parse JSON data into javascript object.ie enabmles conversion of json into javascript

let userList = [
    {
        id : 1,
        name : "Pedro",
        age: 19,
        marred: false,
    },
    {
        id : 2,
        name : "John",
        age: 33,
        marred: true,  
    },
    {
        id : 3,
        name : "Mary",
        age: 23,
        marred: false,
    },
]
//ROUTES
/*One can have endpoints with the same rute but of different methods  */
 app.get("/users",(req,res)=>{
       res.json(userList)
 })
 app.post("/users",(req,res)=>{
    const newUser = req.body;
    userList.push(newUser);//Since it is an array we use push to add a new user to the array
    console.log(req.body)
    res.json(userList)//Here one can check if the if the new user has been added 

 })
 
app.put("/users",(req,res)=>{
    const newName = req.body.newName
    for(let i = 0; i<userList.length; i++){
       userList[i].name = newName
    }
    res.json(userList)
})

app.delete("/users/:id",(req,res)=>{
    const id = req.params.id;
     for(let i = 0;i<userList.length; i++){
        userList.splice(i,1)
     }
     res.json(userList)
})




app.listen('3001',()=>{
    console.log("server running")
})
//add version,main which is the entry point of the project,name,license etc of project.
//To use the ECMAscript modules we have to add the type:module this treats all .JS file as modules