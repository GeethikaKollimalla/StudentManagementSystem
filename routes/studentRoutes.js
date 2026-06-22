const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/register", async (req, res) => {
  try {

    const { name, email, department, year, password } = req.body;
    if (
      !name ||
      !email ||
      !department ||
      !year ||
      !password
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const student = await Student.create(req.body);

    res.json(student);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
router.delete("/students/:id", async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            message: "Student Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});
module.exports = router;