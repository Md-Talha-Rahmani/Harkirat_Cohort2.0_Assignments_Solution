const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
const { User,Course } = require("../db/index");

// User Routes
router.post('/signup', async(req,res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    const user=await User.create({
        username: username,
        password: password
    })
res.status(200).json({
    msg: "User created successfully"
    })
});

router.post('/signin', async(req, res)=>{
    const user=await User.findOne({
        username:req.body.username
    })
    if(user) {
        const token=jwt.sign({
            username:req.body.username
        },JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Invalid credentials"
        })
    }
})

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({})
    res.json({
        courses:response
     })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.username;
    console.log(username);
    const courseId = req.params.courseId;
    try {
        await User.updateOne({
            username:username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        });
    } catch(err) {
        console.log(err);
    }
    res.json({
        msg:"Course purchased successfully"
    });
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({
        username:req.username
    });
    //console.log(user.purchasedCourses);
    const courses=await Course.find({
        _id:{$in:user.purchasedCourses}
    });
    res.json({
        courses:courses
    })
});

module.exports = router