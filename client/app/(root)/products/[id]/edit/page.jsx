import ProductEditForm from './product-edit-form'

const EditProduct = async ({ params }) => {
  const { id } = await params

  return (
    <>
      <div className='create-user-form'>
        <h1>Edit Product</h1>
        <ProductEditForm />
      </div>
    </>
  )
}

export default EditProduct
