import express from 'express'
import { addToCart,getCartItems,updateCartItem } from '../controllers/cartController'
const cartRouter=express.Router()
cartRouter.post('/add',addToCart);
cartRouter.get('/get',getCartItems);
cartRouter.post('/update',updateCartItem);
export default cartRouter;