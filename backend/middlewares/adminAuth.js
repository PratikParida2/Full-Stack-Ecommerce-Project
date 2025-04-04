import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers;
        console.log(token);
        // console.log(req.cookies);        
        if(!token)
        {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        if(decodedToken!=process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
        {
            return res.status(401).json({ message: 'Unauthorized' })
        } 
        next()
    } catch (error) {
        console.log(error);
        
        res.status(401).json({ message: 'Unauthorized' })
    }
}
export default adminAuth