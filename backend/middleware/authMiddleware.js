import jwt  from 'jsonwebtoken'
import User from '../models/User.js';

 const verifyUser = async (req ,res,next) =>{
      try{
          const token = req.headers.authorization?.split(' ')[1];
          if(!token){
            res.status(404).json({success : false , message : "Token not provided"});
          }
          const decoded = jwt.verify(token  , process.env.JWT)
          if(!decoded){
            return res.status(401).json({ success: false, message: "Token invalid" });
          }
          const user = await User.findById({_id: decoded._id}).select('-password')
          if(!user){
            return res.status(404).json({success :false , message : "User not found"});
          }
          req.user = user;
          next();
      }
      
      catch(error){
        // return res.status(500).json({ success: false, message: "Server error" });
        console.log(error)
      }
}

export default verifyUser;