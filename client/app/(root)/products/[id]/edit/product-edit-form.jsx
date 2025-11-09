import { Button, TextField } from '@mui/material'

const ProductEditForm = () => {
  return (
    <>
      <form action='' className='form-wrapper'>
        <TextField required name='img' label='Image Url' variant='outlined' />
        <TextField required name='name' label='Name' variant='outlined' />
        <TextField
          multiline
          required
          name='description'
          label='Description'
          variant='outlined'
          rows={4}
        />
        <TextField required name='price' label='Price' variant='outlined' />
        <Button type='submit' variant='contained'>
          Update
        </Button>
      </form>
    </>
  )
}

export default ProductEditForm
