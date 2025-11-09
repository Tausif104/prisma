import { getUsers } from '@/actions/user.actions'
import { Button } from '@mui/material'
import Link from 'next/link'
import { getProducts } from '@/actions/product.actions'
import DataTableProducts from './_components/datatable-products'

const ProductPage = async () => {
  const products = await getProducts()

  return (
    <>
      <div className='page-header'>
        <h1 className='page-heading'>Products</h1>
        <Button variant='contained'>
          <Link href='/products/create'>Create Product</Link>
        </Button>
      </div>
      <DataTableProducts data={products.products} />
    </>
  )
}

export default ProductPage
