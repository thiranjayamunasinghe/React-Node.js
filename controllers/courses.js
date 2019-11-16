const express = require('express');
const mongoose = require('mongoose');
const CourseModel = mongoose.model('Course');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get("/list", checkAuth, (req, res) => {

    // var course = new CourseModel();
    // course.courseName = "NodeJs";
    // course.courseId = "2";
    // course.save();


    CourseModel.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.status(200).json({
                courses: docs
            })
        }
        else {
            res.send("Error")
        }
    })
});

module.exports = router