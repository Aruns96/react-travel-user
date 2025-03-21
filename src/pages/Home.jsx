import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import ListingsPage from '../components/ListingPage'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
     <ListingsPage />
    
    </main>
    <Footer />
  </div>
  )
}

export default Home