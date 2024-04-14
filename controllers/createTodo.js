const Todo = require("../models/Todo");

exports.createTodo = async(req,res) =>{
    try{
        //extract title and desc from request body
        const {title,description} = req.body;
        //create a new todo and insert in db
        const response = await Todo.create({title,description})
        //send a success message
        res.status(200).json({
            success:true,
            data:response,
            message:"entry created successfully"
        });

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        }); 

    }
}
