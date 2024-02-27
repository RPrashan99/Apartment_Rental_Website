import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SearchPage from './pages/Search/SearchPage'
import PurchasePage from './pages/Purchase/PurchasePage'
import HistoryPage from './pages/History/HistoryPage'
import AdminPage from './pages/Admin/AdminPage'
import AddPage from './pages/Add/AddPage'

function App() {

  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/searchPage' element={<SearchPage/>}></Route>
          <Route path='/searchPage/search/:searchTerm' element={<SearchPage/>}></Route>
          <Route path='/purchase/:id' element={<PurchasePage/>}></Route>
          <Route path='/history' element = {<HistoryPage/>}></Route>
          <Route path='/history/:userId' element = {<HistoryPage/>}></Route>
          <Route path='/admin' element = {<AdminPage/>}></Route>
          <Route path='/admin/delete' element = {<AdminPage/>}></Route>
          <Route path='/add' element = {<AddPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
