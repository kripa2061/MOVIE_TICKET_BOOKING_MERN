const userModel=require("../Model/userModel")
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const validator=require("validator");
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing Credential" });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
console.log("UserID" , user._id);
    // Return both token and user info
    return res.json({
      success: true,
      data: {
        user: { _id: user._id, name: user.name, email: user.email },
        token
      }
    });

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ success: false, message: "Missing Credential" });
  }

  try {
    const fetchUser = await userModel.findOne({ email });
    if (!fetchUser) {
      return res.json({ success: false, message: "User not available" });
    }

    const checkPassword = await bcrypt.compare(password, fetchUser.password);
    if (!checkPassword) {
      return res.json({ success: false, message: "Password does not match" });
    }

    const token = jwt.sign({ id: fetchUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return res.json({
      success: true,
      data: {
        user: { _id: fetchUser._id, name: fetchUser.name, email: fetchUser.email },
        token
      }
    });

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


module.exports={userRegister,Login}