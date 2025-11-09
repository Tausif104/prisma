import { Category, Person, Pin, Settings, Shop } from '@mui/icons-material'

export const navigationData = [
  {
    id: '1',
    label: 'Users',
    href: '/',
    icon: <Person />,
  },
  {
    id: '2',
    label: 'Products',
    href: '/products',
    icon: <Shop />,
  },
  {
    id: '3',
    label: 'Category',
    href: '/category',
    icon: <Category />,
  },
  {
    id: '4',
    label: 'Settings',
    href: '/settings',
    icon: <Settings />,
  },
  {
    id: '5',
    label: 'Blogs',
    href: '/blogs',
    icon: <Pin />,
  },
]
