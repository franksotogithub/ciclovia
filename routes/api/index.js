
const { Router } = require("express")
const router = Router()
const {authenticateJwt } =require("../../midleware/index")



router.use("/anexe",authenticateJwt, require("./anexe/index"))

router.use("/punto_ciclovia", require("./punto_ciclovia/index"))
router.use("/usuario", require("./usuario/index"))

router.use("/via", require("./via/index"))

router.use("/auth", require("./auth/index"))
module.exports = router;




