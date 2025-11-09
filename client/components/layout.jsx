'use client'

import AppBarComponent from '@/app/(root)/_components/appbar'
import DrawerComponent from '@/app/(root)/_components/drawer'
import { Box, CssBaseline, Toolbar } from '@mui/material'

const DashboardWrapper = ({ children }) => {
  return (
    <Box style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent />
      <DrawerComponent />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default DashboardWrapper
