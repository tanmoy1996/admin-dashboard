import React, { ReactNode, useEffect } from 'react'
import { SideBar, SideBarSm } from '../components/SideBar'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
// import AppFooter from '../components/AppFooter'
import { Box } from '@mui/material'
// import { AppContent, Sidebar, AppFooter, AppHeader } from '../components'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import { tokens } from 'theme'

interface Props {
  children: ReactNode
}
const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(true)
  const [mini, setMini] = React.useState(false)
  const [isClosing, setIsClosing] = React.useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  const handleToggleVariant = () => {
    setMini((lastValue) => !lastValue)
  }

  return (
    <Box display="flex">
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <SideBar setIsClosing={setIsClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block', position: 'relative' } }}>
        <IconButton
          onClick={handleToggleVariant}
          sx={{
            position: 'absolute',
            top: '52px',
            right: '-12px',
            zIndex: '1300',
            background: `${colors.greenAccent[700]}99`,
            width: '24px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 300ms',
            '&:hover': { scale: '1.2', background: `${colors.greenAccent[600]}` },
          }}>
          {mini ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <SideBarSm mini={mini} />
      </Box>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        flexGrow="1"
        paddingLeft="18px"
        paddingRight="6px"
        paddingTop="12px">
        <AppHeader handleDrawerToggle={handleDrawerToggle} />
        <Box flexGrow="1" paddingLeft="6px">
          <AppContent children={children} />
        </Box>
        {/* <AppFooter /> */}
      </Box>
    </Box>
  )
}

export default DefaultLayout
