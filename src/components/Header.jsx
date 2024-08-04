import React ,{useState}from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Order from "./Order"


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  //  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BookMyHotel</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search hotels..."
              className="py-1 px-3 pr-8 rounded text-black"
            />
            <FaSearch className="absolute right-2 top-2 text-gray-500" />
          </div>
          <button onClick={openModal}><FaShoppingCart className="text-xl cursor-pointer" /></button>
          {showModal && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="w-1/3 h-screen bg-white shadow-md">
            {/* Modal content */}
            <button onClick={closeModal} className="absolute top-0 right-0 p-4 border bg-red-600 text-white">X</button>
            {/* Other modal content */}
           <div>
           
           <Order  />
           </div>
            
          </div>
        </div>
      )}
          <FaUser className="text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header