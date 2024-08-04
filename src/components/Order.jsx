import React, { useEffect,useState } from 'react'
import ScrollableContainer from './ScrollableContainer'

const Order = () => {
    let url = "https://react-pro2-default-rtdb.firebaseio.com"
   const[bookings,setBookings] = useState([])

  const fetchData =async ()=>{
    try {
       const response = await fetch(`${url}/booking.json`)
       if(response.ok){
          const fetchedData = await response.json()

          let arr = [];
          for (let key in fetchedData) {
          
           arr.push({
             id: key,
             pname:fetchedData[key].pname,
             checkIn:fetchedData[key].checkIn,
             checkOut:fetchedData[key].checkOut,
             guests:fetchedData[key].guests,
             address:fetchedData[key].address,
             status:fetchedData[key].status,
             image:fetchedData[key].image,
             price:fetchedData[key].price,
             user:fetchedData[key].user
           });
         }
         console.log(arr)
         setBookings(arr)
        
       }
    } catch (error) {
       console.log(error)
    }
}
useEffect(()=>{
    fetchData()
},[])
console.log(bookings)
  return (
    <ScrollableContainer>
    <div className="  flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
      <h1 className="text-3xl text-black font-bold mb-6">Orders</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid gap-1">
          {bookings.map((booking, index) => (
            <div key={index} className=" border p-5 rounded-lg overflow-hidden shadow-lg">
                <h3 className="text-gray-600 mb-2">Hotel : {booking.pname}</h3>
              <img src={booking.image} alt={booking.pname} className="w-20 h-20 object-cover" />
             
                <h3 className="text-gray-600 mb-2">Name : {booking.user}</h3>
                <p className="text-gray-600 mb-2">Address : {booking.address}</p>
                <p className="font-bold text-gray-600 mb-2">Price : {booking.price} per night</p>
                <p className="mb-1 text-gray-600">Check-in : {booking.checkIn}</p>
                <p className="mb-1 text-gray-600">Check-out : {booking.checkOut}</p>
                <p className="mb-1 text-gray-600">Guests : {booking.guests}</p>
                <p className="mb-2 text-gray-600">Status : <span className="font-semibold">{booking.status}</span></p>
               
             
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </ScrollableContainer>
  )
}

export default Order
