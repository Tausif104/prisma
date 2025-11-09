'use client'

import { navigationData } from '@/data/navigation'

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DrawerComponent = () => {
  const drawerWidth = 240

  const pathname = usePathname()

  console.log(pathname)
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {navigationData.map((item) => (
            <Link key={item.id} href={item.href}>
              <ListItem disablePadding>
                <ListItemButton
                  className={pathname === item.href && 'nav-active'}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default DrawerComponent
