const express = require('express')
const router = express.Router();
const { signout, signup, signin } = require('../controllers/auth')
const { check, validationResult } = require('express-validator');

router.get("/signout", signout);
router.post("/signup", [
    check("name", "Name should be atleast 3 Char").isLength({ min: 5 }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be atleast 3 Char").isLength({ min: 5 })
], signup);
router.post("/signin", signin);
module.exports = router;