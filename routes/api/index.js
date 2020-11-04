const { Router } = require("express")
const router = Router()

router.use("/anexe", require("./anexe/index"))

router.use("/punto_ciclovia", require("./punto_ciclovia/index"))
module.exports = router;