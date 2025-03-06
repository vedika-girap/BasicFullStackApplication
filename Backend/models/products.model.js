import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
},{
    timestamps:true//created and updated at
});

const Product =mongoose.model('Product',productShema);

export default Product;