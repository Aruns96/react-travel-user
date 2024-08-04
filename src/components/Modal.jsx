import React, { useState } from 'react';



const Modal = ({  onClose, pdata }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [address, setAddress] = useState('');
  const[user,setUser] = useState("")

  let url = "https://react-pro2-default-rtdb.firebaseio.com"

  const handleSubmit = async(e) => {
    e.preventDefault();
   
      let bookingData = {
        pname:pdata.pname,
        checkIn:checkIn,
        checkOut:checkOut,
        guests:guests,
        address:address,
        image:pdata.image1,
        price:pdata.price,
        user:user,
        status:"pending"
      }
      try {
        const response = await fetch(`${url}/booking.json`,
            {
                method:"POST",
                body:JSON.stringify(bookingData)
            }

        )
       if(response.ok){
        
        setCheckIn("")
        setCheckOut("")
        setGuests("")
        setAddress("")
        setUser("")
        

        //getting place data function
      

        console.log("data submitted sucessfully",response)

       }

        
      } catch (error) {
        console.log(error)
      }
    
    onClose()
  };

  

  return (
    
   
     <div className="  flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book </h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block mb-2">Name of Person</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full p-2 border rounded"
             
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Check-in Date</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Check-out Date</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Number of Guests</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-2 border rounded"
              min="1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            
            <button
           
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
     </div> 
    
  );
};

export default Modal;