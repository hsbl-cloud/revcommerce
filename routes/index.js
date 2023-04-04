const router  = require("express").Router()

router.get('/', (req,res) => {
    res.status(200).json({
        microservice : "Identity",
        status : 'Ready'
    })
})




module.exports = router