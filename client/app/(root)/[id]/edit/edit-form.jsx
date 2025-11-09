'use client'

import { useState, useActionState, useEffect } from 'react'
import { Button, Snackbar, TextField } from '@mui/material'
import { updateUser } from '@/actions/user.actions'

const EditUserForm = ({ user }) => {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [open, setOpen] = useState(false)

  const initialState = {
    success: false,
    msg: '',
  }

  const [state, action, loading] = useActionState(updateUser, initialState)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (state.msg) {
      setOpen(true)
      state.success = false
    }
  }, [state.success])

  return (
    <form action={action} className='form-wrapper'>
      <input type='hidden' name='userId' value={user.id} />
      <TextField
        name='name'
        label='Name'
        variant='outlined'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        name='email'
        label='Email'
        variant='outlined'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        loading={loading ? true : false}
        type='submit'
        variant='contained'
      >
        Update
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={state.msg}
      />
    </form>
  )
}

export default EditUserForm
