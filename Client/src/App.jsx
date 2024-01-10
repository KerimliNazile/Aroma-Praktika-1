import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Layout/MainLayout/main'
import Blog from './Pages/BlogPage/blog'
import Contact from './Pages/ContactPage/contact'
import Home from './Pages/HomePage/home'
import Pages from './Pages/PagesPage/pages'
import Shop from './Pages/ShopPage/shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/pages' element={<Pages />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App





