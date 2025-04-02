import express from 'express'
import { addProduct, getAllProducts,singleProduct,deleteProduct } from '../controllers/productController.js'
const productRouter=express.Router();
productRouter.post('/add',addProduct);
productRouter.post('/remove',deleteProduct);
productRouter.post('/single',singleProduct);

export default productRouter;