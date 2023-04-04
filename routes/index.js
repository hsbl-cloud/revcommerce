const router  = require("express").Router()

router.get('/', (req,res) => {
    res.status(200).json({
        microservice : "revcommerce",
        version : '1.0.0',
        status : 'Ready'
    })
})




module.exports = router