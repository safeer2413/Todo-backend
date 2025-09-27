import mongoose from "mongoose";


const productSchema = mongoose.Schema({
      productName : {
        type : String,
        required: true
      },
      brand : {
        type : String,
        required: true
      },
      og_price : {
        type : String,
        required: true
      },
      offer_price : {
        type : String,
        required: true
      },
      stock : {
        type : String,
        required: true
      },
      description : {
        type : String,
        required: true
      },
      productImage : {
        type : String,
        required: true
      }
})


const Products = mongoose.model('products', productSchema)

export default Products