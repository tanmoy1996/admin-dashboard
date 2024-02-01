import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

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
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
