import {
  createProductService,
  getProductListService,
  updateProductService,
  deleteProductService,
} from '../services/product.service.js'

export const createProductController = async (req, res) => {
  try {
    const product = await createProductService(req.body)
    res.status(200).json(product)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getProductListController = async (req, res) => {
  try {
    const products = await getProductListService()
    res.status(200).json(products)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const updateProductController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const product = await updateProductService(id, data)
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteProductController = async (req, res) => {
  try {
    const id = req.params.id
    const deletedProduct = await deleteProductService(id)

    if (deletedProduct) {
      res.status(200).json(deletedProduct)
    }
  } catch (error) {
    res.status(400).json(error)
  }
}
