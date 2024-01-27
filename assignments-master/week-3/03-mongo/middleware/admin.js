const { Admin } = require('../db/index');
// Middleware for handling auth
const adminMiddleware=async (req, res, next)=> {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    //Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    try {
        const admin=await Admin.findOne({
        username:username,
        password:password
    })
        if(admin) {
            next();
        } else {
            res.status(401).json({
                msg : "Admin doesn't exist"
            });
        }
    }catch (err) {
        console.log(err);
        res.status(401).json({
            msg : "Internal Server Error"
        });
    }
};

module.exports = adminMiddleware;