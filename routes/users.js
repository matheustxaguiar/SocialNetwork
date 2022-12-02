const router = require("express").Router();
router.get("/", (req, res)=>{
    res.send("aaaaaaa route")
});

module.exports = router