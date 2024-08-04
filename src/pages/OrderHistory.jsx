import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Order from '../components/Order'

const OrderHistory = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
     
     <Order />
    </main>
    <Footer />
  </div>
  )
}

export default OrderHistory