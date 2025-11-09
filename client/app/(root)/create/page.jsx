import { TextField, Button } from '@mui/material'
import { createUser } from '@/actions/user.actions'

const CreateUserPage = () => {
  return (
    <>
      <div className='create-user-form'>
        <h1>Create User</h1>
        <form action={createUser} className='form-wrapper'>
          <TextField required name='name' label='Name' variant='outlined' />
          <TextField required name='email' label='Email' variant='outlined' />
          <Button type='submit' variant='contained'>
            Create
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateUserPage
