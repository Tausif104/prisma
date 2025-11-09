'use client'

import { AppBar, Toolbar, Typography } from '@mui/material'

const AppBarComponent = () => {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant='h6' noWrap component='div'>
          Prisma ORM
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent
