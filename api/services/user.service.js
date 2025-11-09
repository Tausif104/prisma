import { prisma } from '../lib/prisma.js'

// create new user
export const createUserService = async (data) => {
  const { name, email } = data

  const existing = await prisma.user.findUnique({ where: { email: email } })

  if (existing) throw new Error('User already exist')

  const newUser = await prisma.user.create({ data: { name, email } })

  return newUser
}

// get all users
export const getAllUsersService = async () => {
  const users = await prisma.user.findMany()
  return users
}

// delete user
export const deleteUserService = async (id) => {
  const user = await prisma.user.findUnique({ where: { id: id } })

  if (user) {
    const deletedUser = await prisma.user.delete({ where: { id: id } })
    return deletedUser
  }
}

// update user
export const updateUserService = async (id, data) => {
  const exists = await prisma.user.findUnique({ where: { id: id } })

  if (exists) {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: { email: data.email, name: data.name },
    })

    return updatedUser
  }
}

export const getUserDetailsService = async (id) => {
  const user = await prisma.user.findUnique({ where: { id: id } })

  if (user) {
    return user
  }
}
