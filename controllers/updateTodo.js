const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) =>{
    try{
        //extract title and desc from request body
        const {id} = req.params;
        const {title,description} = req.body;
        //create a new todo and insert in db
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description, updatedAt:Date.now()},
        )
        //send a success message
        res.status(200).json({
            success:true,
            data:todo,
            message:"updated successfully"
        });

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
