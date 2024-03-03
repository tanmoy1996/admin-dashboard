import React from 'react'
import { Box, useTheme, InputBase } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { tokens } from 'theme'
import IconButton from '@mui/material/IconButton'

export const GlobalSearchSm: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      borderRadius="3px"
      width="500px"
      sx={{
        backgroundColor: colors.primary[400],
        display: { xs: 'none', sm: 'flex' },
      }}>
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
    </Box>
  )
}

export const GlobalSearch: React.FC = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <IconButton
      sx={{
        display: { xs: 'block', sm: 'none' },
      }}>
      <SearchOutlinedIcon />
    </IconButton>
  )
}
