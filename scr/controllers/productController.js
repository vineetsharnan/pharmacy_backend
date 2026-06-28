const getProducts=(req,res)=>{
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
    res.status(200).json(products);
};



const getProductsById=(req,res)=>{
        const id=req.params.id;

    res.status(200).json({
        message:"Product found",
        productsId:id
    });
};


const createProduct=(req,res)=>{
       const product=req.body;

    res.status(201).json({
        message:"Product created successfully",
        data:product
    });
};

const updateProduct=(req,res)=>{
       res.status(200).json({
        message:"Product updated sucessfully",
         id:req.params.id,
         data:req.body 
    });
};


const deleteProduct=(req,res)=>{
       res.status(200).json({
        message:"Deleted Sucsessfully",
        id:req.params.id
    });
};




module.exports={
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct

};