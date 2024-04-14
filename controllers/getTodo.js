const Todo = require("../models/Todo");

exports.getTodo = async(req,res) =>{
    try{
        //fetch all the data items from database
        const todos = await Todo.find({});
        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched"
        })

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"server error",
        })
    }
}
exports.getTodobyId = async(req,res) =>{
    try{
        //fetch all the data items from database
        const id = req.params.id;
        const todos = await Todo.findById({_id:id});
        //response
        if (!todos){
            return res.status(404).json({
                success:false,
                message: "no data found with given id",
            })
        }
        res.status(200).json({
            success:true,
            data:todos,
            message:`Todo  ${id} data is fetched`
        })  

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"server error",
        })
    }
}
