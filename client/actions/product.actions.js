'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const getProducts = async () => {
  const res = await fetch(`${process.env.API_URL}/api/products`)
  const products = await res.json()
  return {
    products,
  }
}

export const createProduct = async (prevState, formData) => {
  const img = formData.get('img')
  const name = formData.get('name')
  const description = formData.get('description')
  const price = formData.get('price')

  const data = {
    img,
    name,
    description,
    price: Number(price),
  }

  console.log(data)

  const res = await fetch(`${process.env.API_URL}/api/products`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const product = await res.json()

  console.log(product)

  if (product) {
    revalidatePath('/products')
    redirect('/products')
  }
}

export const deleteProduct = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })

  const product = await res.json()

  if (product) {
    revalidatePath('/products')
  }
}
