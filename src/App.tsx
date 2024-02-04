import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/Login'
import Error404 from './views/404'
import Error500 from './views/500'
import Dashboard from './views/Dashboard'
import Profile from './views/Profile'

import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="404" element={<Error404 />} />
              <Route path="500" element={<Error500 />} />
              <Route path="*" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
