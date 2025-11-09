'use client'

import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import Link from 'next/link'
import { deleteProduct } from '@/actions/product.actions'

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <div className='image-wrapper-col'>
        <img
          src={params.value}
          alt={params.row.name}
          style={{
            width: 50,
            height: 30,
            objectFit: 'cover',
            borderRadius: 4,
          }}
        />
      </div>
    ),
  },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'createdAt', headerName: 'Craeated At', width: 250 },
  { field: 'updatedAt', headerName: 'Updated At', width: 250 },
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    sortable: false,
    renderCell: (params) => (
      <>
        <Link href={`/products/${params.row.id}/edit`}>
          <Button
            variant='contained'
            color='primary'
            size='small'
            sx={{ mr: 1 }}
          >
            <Edit />
          </Button>
        </Link>
        <Button
          variant='contained'
          color='error'
          size='small'
          onClick={() => handleDelete(params.row.id)}
        >
          <Delete />
        </Button>
      </>
    ),
  },
]

const paginationModel = { page: 0, pageSize: 10 }

const handleDelete = async (id) => {
  await deleteProduct(id)
}

export default function DataTableProducts({ data }) {
  return (
    <Paper sx={{ height: 'auto', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )
}
