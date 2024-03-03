import { Box } from '@mui/material'
import React from 'react'
import { GlobalSearchSm, GlobalSearch } from './AppHeader/GlobalSearch'
import { Notification } from './AppHeader/Notification'
import { ToggleMode } from './AppHeader/ToggleMode'
import { Profile } from './AppHeader/Profile'
import { Settings } from './AppHeader/Settings'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

interface Props {
  handleDrawerToggle: () => void
}

const AppHeader: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Box>
      <GlobalSearchSm />
      <Box display="flex" gap="6px" alignItems="center">
        <GlobalSearch />
        <ToggleMode />
        <Notification />
        <Settings />
        <Profile />
      </Box>
    </Box>
  )
}

export default AppHeader
