'use client'

import { createProduct } from '@/actions/product.actions'
import { Button, TextField } from '@mui/material'
import { useActionState } from 'react'

const ProductCreateForm = () => {
  const initialState = {}

  const [state, action, loading] = useActionState(createProduct, initialState)
  return (
    <form action={action} className='form-wrapper'>
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
      <Button
        type='submit'
        variant='contained'
        loading={loading ? true : false}
      >
        Create
      </Button>
    </form>
  )
}

export default ProductCreateForm
