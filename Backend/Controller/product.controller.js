import mongoose from "mongoose";
import Product from "../models/products.model.js";

export const getProducts = async (req, res)=>{
    try {
        const products= await Product.find({});
        res.status(200).json({sucess:true,data:products});
    } catch (error) {
        console.log("Error in metching products",error.message)
        res.status(500).json({sucess:false,message:"No products found.create products and ttry again."});
    }
};

export const updateProduct= async (req, res)=>{
    const {id}= req.params;
    const product=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess:false,message:"Invalid product ID"});
    }

    try {
        const updatedProduct =await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({sucess:true,data:updatedProduct});
    } catch (error) {
        res.status(500).json({sucess:false,message:"Server Error"});
        
    }
};

export const createProduct= async (req, res)=>{
    const product =req.body;//user will send this data to server

    if(!product.name||!product.price||!product.image){
        return res.status(400).json({sucess:false, message:"Please provide all requied details"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({sucess:true,data:newProduct,message:"new product created."});
    }catch(error){
        console.error("Error in creating product:",error.message);
        res.status(500).json({sucess:false,message:"Server error."});
    }
};

export const deleteProduct= async (req,res)=>{
    const {id} = req.params;
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess:true, message:`Sucessfully deleted product ${id}`});
    }catch(error){
        console.error("Error in deleting product:",error.message);
        res.status(404).json({sucess:false,message:"Product not found:("});   
    }
};