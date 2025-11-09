import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserDetailsService,
  updateUserService,
} from '../services/user.service.js'

export const createUserController = async (req, res) => {
  try {
    const newUser = await createUserService(req.body)
    res.status(201).json({ msg: 'User created', user: newUser })
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getAllUserController = async (req, res) => {
  try {
    const users = await getAllUsersService()
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const deleteUserController = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deletedUser = await deleteUserService(id)
    res.status(200).json({ msg: 'User deleted', user: deletedUser })
  } catch (error) {
    res.status(404).json(error)
  }
}

export const updateUserController = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await updateUserService(id, req.body)
    if (user) {
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(404).json(error)
  }
}

export const getUserDetailsController = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const user = await getUserDetailsService(id)
    if (user) {
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(404).json(error)
  }
}
