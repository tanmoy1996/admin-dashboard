import * as React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'

import { Box, Tooltip } from '@mui/material'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { tokens } from 'theme'
import MemoLogo from 'assets/Logo'
import Zoom from '@mui/material/Zoom'

import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.mixins.toolbar,
}))

interface Props {
  mobileOpen: boolean
  setIsClosing: (x: boolean) => void
  setMobileOpen: (x: boolean) => void
  window?: () => Window
}

export const SideBar: React.FC<Props> = (props: Props) => {
  const { window } = props
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleDrawerClose = () => {
    props.setIsClosing(true)
    props.setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    props.setIsClosing(false)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate('/dashboard')
          }}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate('/profile')
          }}>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  )

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            background: `${colors.primary[400]}`,
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}>
        <DrawerHeader>
          <MemoLogo type="long" fill={theme.palette.mode === 'dark' ? '#fff' : '#121212'} />
        </DrawerHeader>
        {drawer}
      </Drawer>
    </Box>
  )
}

interface SideBarSmProps {
  mini: boolean
}

export const SideBarSm: React.FC<SideBarSmProps> = (props: SideBarSmProps) => {
  const { mini } = props
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate('/dashboard')
          }}>
          <Tooltip
            TransitionComponent={Zoom}
            title="Dashboard"
            placement="right"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  display: mini ? 'none' : 'block',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
                  fontSize: '14px',
                  color: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                  '& .MuiTooltip-arrow': {
                    color: theme.palette.mode === 'dark' ? 'common.white' : 'common.black',
                  },
                },
              },
            }}>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate('/profile')
          }}>
          <Tooltip
            TransitionComponent={Zoom}
            title="Profile"
            placement="right"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  display: mini ? 'none' : 'block',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
                  fontSize: '14px',
                  color: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
                  boxShadow: theme.shadows[1],
                  '& .MuiTooltip-arrow': {
                    color: theme.palette.mode === 'dark' ? 'common.white' : 'common.black',
                  },
                },
              },
            }}>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: mini ? drawerWidth : `calc(${theme.spacing(7)} + 1px)` },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="permanent"
        open={mini}
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'relative',
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            background: `${colors.primary[400]}`,
            width: mini ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
            overflowX: 'hidden',
            boxSizing: 'border-box',
            transition: mini
              ? theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                })
              : theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
          },
        }}>
        <DrawerHeader>
          <MemoLogo type={mini ? 'long' : 'short'} fill={theme.palette.mode === 'dark' ? '#fff' : '#121212'} />
        </DrawerHeader>
        {drawer}
      </Drawer>
    </Box>
  )
}
