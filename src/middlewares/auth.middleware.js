const jwt = require("jsonwebtoken")

function authArtist(req , res , next){
    
        const token =  req.cookies.token;
    
        if(!token){
            return res.status(401).json({message:"Invalid user"})
        }
    
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
            if(decoded.role!=="artist"){
                return res.status(401).json({message: "Unauthosised user"});
            }
            req.user = decoded;
            
        }catch(err){
            return res.status(401).json({message : "unauthorised access"})
        }

        next()
} 

module.exports = authArtist