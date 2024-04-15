const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

//get all media
router.get("/all", categoryController.getAll);

 //post create new media
router.post("/create", categoryController.create);

//post create new media
router.put("/update/:id", categoryController.update);

router.delete("/delete/:id", categoryController.delete);

module.exports = router;