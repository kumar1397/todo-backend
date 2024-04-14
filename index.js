
const express = require("express")
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//import routes for todo app
const todoRoutes = require("./routes/todo");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

//connect to database
const dbConnect = require('./config/database')
dbConnect(); 

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`)
})
