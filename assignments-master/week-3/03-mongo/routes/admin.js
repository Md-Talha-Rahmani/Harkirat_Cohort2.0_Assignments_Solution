const { Router, response } = require("express");
const { Admin,Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username: username,
        password: password
    })
   .then(function(value){
        res.status(201).json({
            msg : "Admin created successfully"
        })
    })
   .catch
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse= await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    console.log(newCourse);
    res.json({
        msg:"Course created successfully",courseId: newCourse._id
    })
   
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
        res.json({
            courses:response
         })
});

module.exports = router;