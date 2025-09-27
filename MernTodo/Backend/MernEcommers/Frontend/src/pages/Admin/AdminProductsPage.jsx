import React from 'react'
import AdminNavbar from '../../components/AdminComponents/AdminNavbar'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function AdminProductsPage() {

    const navigate = useNavigate();

    return (
        <>
            <AdminNavbar />
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))',
                padding: '20px',
            }}>
                <h1>Admin Products</h1>
                <Button onClick={()=>navigate('/addproduct')}>Add Product</Button>
            </div>

        </>
    )
}

export default AdminProductsPage