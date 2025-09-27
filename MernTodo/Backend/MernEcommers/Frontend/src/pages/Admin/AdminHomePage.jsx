import React from 'react'
import { Button } from 'react-bootstrap'
import AdminNavbar from '../../components/AdminComponents/AdminNavbar'
import { Link } from 'react-router-dom'


function AdminHomePage() {
  return (
    <>
    <AdminNavbar/>
    <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(145deg,rgb(156, 140, 66),rgb(215, 194, 156))',
          // justifyContent: 'center',
          // alignItems: 'center',
          padding: '20px',
          
        }}>
          <h1>Welcome Admin</h1><br />

<Button as='a' style={{ backgroundColor: '#ff6600', border: 'none' }}>
  <Link to={'/products'} style={{ color: '#fff', textDecoration: 'none' }}>Add Product</Link>
</Button>
    </div>
    
    </>
  )
}

export default AdminHomePage