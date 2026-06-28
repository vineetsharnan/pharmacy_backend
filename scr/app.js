const express=require('express');
const app=express();


app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Welcome to Pharmacy Backend  ");
});

//--------------------------------------------Get------------------------------------

app.get('/products',(req,res)=>{

    const category=req.query.category;
    const products=[
        {
            id:1,
            name:"Crosin 650",
            price:35,
            category:category
        },{
            id:2,
            name:"Dolo 650",
            price:40,
            category:category        }
    ];
    res.json(products);
});

app.get("/products/:id",(req,res)=>{

    const id=req.params.id;

    res.status(200).json({
        message:"Product found",
        productsId:id
    });
});

//--------------------------------------------Get End------------------------------------



//--------------------------------------------POST------------------------------------

app.post("/products", (req,res)=>{

    const product=req.body;

    res.status(201).json({
        message:"Product created successfully",
        data:product
    });

});

//--------------------------------------------POST End------------------------------------

//--------------------------------------------PUT------------------------------------

app.put("/products/:id",(req,res)=>{

    res.status(200).json({
        message:"Product updated sucessfully",
         id:req.params.id,
         data:req.body 
    });
});
//--------------------------------------------PUT End------------------------------------

//--------------------------------------------Delete------------------------------------

app.delete("/products/:id", (req,res)=>{


    res.status(200).json({
        message:"Deleted Sucsessfully",
        id:req.params.id
    });


});


//--------------------------------------------Delete End------------------------------------



module.exports=app;

