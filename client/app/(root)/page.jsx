import { getUsers } from '@/actions/user.actions'

import DataTableUsers from './_components/datatable-users'
import { Button } from '@mui/material'
import Link from 'next/link'

const UserPage = async () => {
  const users = await getUsers()

  return (
    <>
      <div className='page-header'>
        <h1 className='page-heading'>Users</h1>
        <Button variant='contained'>
          <Link href='/create'>Create User</Link>
        </Button>
      </div>
      <DataTableUsers data={users.users} />
    </>
  )
}

export default UserPage
