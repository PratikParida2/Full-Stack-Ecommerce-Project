import productModel from "../models/productModel.js";
const addProduct = async (req, res) => {
    console.log("Product Created");
    try {
        const { name, description, price, imageUrl, category, subCategory, sizes } =
        req.body;
        const newProduct = new productModel({
        name,
        description,
        price,
        imageUrl,
        category,
        subCategory,
        sizes,
        });
        await newProduct.save();
        res.status(201).json("Product Created Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json("Product Not Found");
        } else {
            res.status(200).json("Product Deleted Successfully");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const singleProduct=(req,res)=>
{
    
}
export { addProduct, getAllProducts,singleProduct,deleteProduct }