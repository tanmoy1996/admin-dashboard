import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/Login'
import Error404 from './views/404'
import Error500 from './views/500'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="404" element={<Error404 />} />
          <Route path="500" element={<Error500 />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
