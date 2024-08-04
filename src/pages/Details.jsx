import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PlaceDetail from '../components/PlaceDetail'

const Details = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
    <PlaceDetail />
    </main>
    <Footer />
  </div>
  )
}

export default Details