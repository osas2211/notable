const express = require("express")
const userControls = require("../controllers")
const router = express.Router()
const auth = require("../../../middlewares/auth")
const multer = require("multer")
const cloudinaryStorage = require("../../../utils/cloudinary_setup")
const upload = multer({ storage: cloudinaryStorage("notes_profile_images") })

router.post("/signup", userControls.signUp)
router.post("/signin", userControls.signIn)
router.get("/:userID", userControls.getUser)
router.put(
  "/update-profile",
  auth,
  upload.single("image"),
  userControls.updateProfile
)

module.exports = router
