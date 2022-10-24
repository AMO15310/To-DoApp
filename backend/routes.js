const controllers = require("./controllers");
const express = require("express");
const router = express.Router();

router.get("/activities", controllers.getUser);
router.post("/activity", controllers.postActivity);
router.delete("/activity/:id", controllers.deleteActivity);

module.exports = router;
