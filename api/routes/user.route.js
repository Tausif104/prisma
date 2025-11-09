import express from 'express'
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  getUserDetailsController,
  updateUserController,
} from '../controllers/user.controller.js'

const router = express.Router()

router.post('/', createUserController)
router.get('/', getAllUserController)
router.delete('/:id', deleteUserController)
router.put('/:id', updateUserController)
router.get('/:id', getUserDetailsController)

export default router
