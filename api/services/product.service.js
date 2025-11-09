import { prisma } from '../lib/prisma.js'

// create product
export const createProductService = async (data) => {
  const { img, name, description, price } = data

  const product = {
    img,
    name,
    description,
    price: Number(price),
  }

  const newProduct = await prisma.product.create({ data: product })

  return newProduct
}

// get all products
export const getProductListService = async () => {
  const products = await prisma.product.findMany()

  return products
}

// edit single product
export const updateProductService = async (id, data) => {
  const existed = await prisma.product.findUnique({ where: { id: Number(id) } })

  const { img, name, description, price } = data

  const product = {
    img,
    name,
    description,
    price: Number(price),
  }

  if (existed) {
    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: product,
    })

    return updatedProduct
  }
}

// delete product service
export const deleteProductService = async (id) => {
  const product = await prisma.product.delete({ where: { id: Number(id) } })

  return product
}
