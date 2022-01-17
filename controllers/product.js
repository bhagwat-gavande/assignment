const models = require('../models')

exports.addProduct = async(req,res)=>{
    try {
    const {categoryName,productName,description,price, productImage} = req.body
    const productData = await models.product.create({ categoryName, productName, description, price, productImage});
    if(!productData){
        res.status(400).json({message:"Product Not Created"});
    }
    else{
        res.status(201).json({message:"Product Created", productData})
    }
} catch (error) {
     console.log(error)   
}
};

exports.getProduct = async(req,res)=>{
    const productData = await models.product.findAll({ where :{ isActive : true}});
    if(!productData){
        res.status(404).json({message:"Product Not Found"});
    }
    else{
        res.status(200).json({message:"Product Data" , productData})
    }
};

// Get Product By Id
exports.getProductById = async(req,res)=>{
    const id = req.params.id;
    const productData = await models.product.findOne({ where :{id, isActive : true}});
    if(!productData){
        res.status(404).json({message:"Product Not Found"});
    }
    else{
        res.status(200).json({message:"Product Data" , productData})
    }
};

exports.updateProduct = async(req,res)=>{
    const id = req.params.id;
    const {category,productName,description,price, productImage} = req.body
    const productData = await models.product.updateProduct(id,category,productName,description,price, productImage)
    if (!productData){
        res.status(404).json({message:"Product Not Found"});
    }
    else{
        res.status(200).json({message:"Product Update Successfully",productData});
    }
};

exports.removeProduct = async(req,res)=>{
    const id = req.params.id;
    const deleteProduct = await models.product.update({isActive:false},{where:{id, isActive:true}});
    if(!deleteProduct){
        res.status(404).json({message:"Product Not Found"});
    }
    else{
        res.status(200).json({message:"Product Delete Successfully"});
    }
};