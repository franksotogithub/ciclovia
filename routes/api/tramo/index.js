const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/tramo/index");


router.get("", controller.getAllTramo) //api
router.get("/:id", controller.getTramo) //api
router.put("/:id", controller.updateTramo) //api

module.exports = router