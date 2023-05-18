
import express from 'express'
const router = express.Router()

import {
    submitIssue,
    getIssues
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(submitIssue)
router.route('/all').get(protect, admin, getIssues)

export default router
