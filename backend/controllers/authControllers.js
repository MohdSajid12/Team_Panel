import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if(!email || !password){
        res.status(404).json({success :false , message : "Email and Password required"})
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ success: false, message: "User Not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT,
      { expiresIn: "10d" }
    );

    res
      .status(200)
      .json({ success: true, token, user: user, message: "Login Successully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const verify = async(req,res)=>{
     return res.status(200).json({success : true , user: req.user})
}
