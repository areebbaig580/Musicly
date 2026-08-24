const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


async function registerUser(req, res) {
    const { username, email, password, role = "user" } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExists) {
        res.status(409).json({
            message: "user already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password : hash,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message: "user registered successfully",
        user
    })

}

async function loginUser(req, res){

  const {username  , email , password } = req.body

  const user = userModel.findOne({
    $or: [
        {username},
        {email}
    ]
  })

  if(!user){
    res.status(401).json({
        message: "invalid credintials"
    })
  }

  const isPasswordValid = await bcrypt.compare(password ,user.password )

  if(!isPasswordValid){
    res.status(401).json({
        message: "invalid crediantals"
    })
  }

  const token = jwt.sign({
    id : user._id,
    role: user.role
  }, process.env.JWT_SECRET)

  res.cookie("token", token);

  res.status(201).json({ 
    message: "user logged in successfully",
    user
  })

}

module.exports = { registerUser, loginUser }