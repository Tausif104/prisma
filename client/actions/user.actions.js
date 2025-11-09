'use server'

import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

// get users
export const getUsers = async () => {
  const data = await fetch(`${process.env.API_URL}/api/users`)
  const users = await data.json()
  return {
    users,
  }
}

// create user
export const createUser = async (formData) => {
  const name = formData.get('name')
  const email = formData.get('email')

  const data = {
    name,
    email,
  }

  const res = await fetch(`${process.env.API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const user = await res.json()

  if (user) {
    revalidatePath('/')
    redirect('/')
  }
}

// get user details
export const getUserDetails = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/users/${id}`)
  const user = await res.json()

  return {
    user,
  }
}

// delete user
export const deleteUser = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })

  const data = res.json()

  if (data) {
    revalidatePath('/')
  }
}

// update user
export const updateUser = async (prevState, formData) => {
  const id = formData.get('userId')
  const name = formData.get('name')
  const email = formData.get('email')

  const data = {
    name,
    email,
  }

  const res = await fetch(`${process.env.API_URL}/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const user = await res.json()

  if (user) {
    revalidatePath(`/${id}/edit`)
    return {
      success: true,
      msg: 'User updated successfully',
    }
  }
}
