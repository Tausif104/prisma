import { getUserDetails } from '@/actions/user.actions'
import EditUserForm from './edit-form'

const EditUserPage = async ({ params }) => {
  const { id } = await params

  const { user } = await getUserDetails(id)

  return (
    <>
      <div className='create-user-form'>
        <h1>Edit User</h1>
        <EditUserForm user={user} />
      </div>
    </>
  )
}

export default EditUserPage
