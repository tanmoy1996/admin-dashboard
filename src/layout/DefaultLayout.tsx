import React, {ReactNode} from 'react'
import SideBar from '../components/SideBar'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'
import { Box } from '@mui/material'
// import { AppContent, Sidebar, AppFooter, AppHeader } from '../components'

interface Props {
  children: ReactNode
}
const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box display="flex">
      <SideBar />
      <Box minHeight="100vh" display="flex" flexDirection="column" flexGrow="1">
        <AppHeader />
        <Box flexGrow="1">
        <AppContent children = {children} />
        </Box>
        <AppFooter />
      </Box>
    </Box>
  )
}

export default DefaultLayout
