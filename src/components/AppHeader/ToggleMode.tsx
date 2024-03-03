import React, { useContext } from 'react'
import { ColorModeContext } from '../../theme'
import { useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

export const ToggleMode: React.FC = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const handleClick = () => {
    console.log('clicked')
    colorMode.toggleColorMode()
  }

  return (
    <IconButton aria-label="theme-toggler" onClick={handleClick}>
      {theme.palette.mode === 'light' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  )
}
