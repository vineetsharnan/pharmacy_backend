const getUsers=(req,res)=>{
    res.json({
        success:true,
        message:"All Users",
        data:[
                  {
                id: 1,
                name: "Vineet"
            },
            {
                id: 2,
                name: "Rahul"
            }
        ]
    });
}




const getUserById=(req,res)=>{
    res.json({
        id:req.params.id
    });
};

const createUser= (req,res)=>{

    res.satatus(201).json({
        message:"User created sucsessfully",
        data:req.body
    });
};

module.exports={
    getUsers,
    getUserById,
    createUser
};