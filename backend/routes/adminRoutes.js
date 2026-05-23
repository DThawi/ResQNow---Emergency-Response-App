const express = require("express")
const router = express.Router();
const adminController = require("../controllers/adminController");

const { verifyToken } = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

// Admin verifies responder
router.put(
  "/verify-responder/:userId",
  verifyToken,
  allowRoles("Admin"),
  adminController.verifyResponder
);

// Admin gets all responders
router.get(
  "/responders",
  verifyToken,
  allowRoles("Admin"),
  adminController.getResponders
);

module.exports = router;
