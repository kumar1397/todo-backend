const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) =>{
    try{
        //extract title and desc from request body
        const {id} = req.params;
        //create a new todo and insert in db
        await Todo.findByIdAndDelete(id);
        //send a success message
        res.json({
            success:true,
            message:`Todo deleted`, 
        })

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:`server error `
        }); 

    }
}
