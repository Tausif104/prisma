import express from 'express'
import {
  createProductController,
  deleteProductController,
  getProductListController,
  updateProductController,
} from '../controllers/product.controller.js'

const router = express.Router()

router.post('/', createProductController)
router.get('/', getProductListController)
router.put('/:id', updateProductController)
router.delete('/:id', deleteProductController)

export default router
