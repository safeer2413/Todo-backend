import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHomePage from '../../pages/Admin/AdminHomePage'
import AdminProductsPage from '../../pages/Admin/AdminProductsPage'
import AdminAddproduct from '../../pages/Admin/AdminAddproduct'

function AdminNavigator() {
    return (
        <>
            <Routes>

                <Route path='/' element={<AdminHomePage />} />
                <Route path='/products' element={<AdminProductsPage/>} />
                <Route path='/addproduct' element={<AdminAddproduct/>} />

            </Routes>
        </>
    )
}

export default AdminNavigator