const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/element_tramo/index");


router.get("", controller.getAllElementTramo) //api
router.get("/:id", controller.getElementTramo) //api
router.post("", controller.createElementTramo) //api
router.put("", controller.updateElementTramo) //api
router.delete("",controller.deleteElementTramo)

module.exports = router