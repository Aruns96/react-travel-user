import React,{useEffect,useState} from 'react'
import { useParams ,useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import Modal from "./Modal"


const PlaceDetail = () => {
    const {id} = useParams()
    const history = useHistory()
    const[data,setData] = useState({})
    const [showModal, setShowModal] = useState(false);
  //  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
     let url = "https://react-pro2-default-rtdb.firebaseio.com"
    useEffect(()=>{
       async function fetchData(){
        try {
            const response = await fetch(`${url}/places/${id}.json`)
            if(response.ok){
               const dat = await response.json()
     
              
             
             setData(dat)
              
             
            }
         } catch (error) {
            console.log(error)
         }
        }
        fetchData()
    },[id])

    console.log(data)
    
  return (
    
    <div className="container mx-auto bg-white rounded-lg shadow-md p-6 flex-col ">
        <button className='bg-blue-400 text-white rounded p-2' onClick={()=>history.goBack()}>back</button>
        <h2 className="text-2xl font-bold mt-4 ">{data.pname}</h2>
        <p className="text-gray-600 mt-2">{data.price}/night</p>
        <div className='grid grid-cols-3 gap-2 mt-4'>
        <img src={data.image1} alt={data.pname} className="w-full h-48 object-cover rounded-lg" />
        <img src={data.image2} alt={data.pname} className="w-full h-48 object-cover rounded-lg" />
        <img src={data.image3} alt={data.pname} className="w-full h-48 object-cover rounded-lg" />
        </div>
     
      <p className="text-gray-600 mt-2">{data.address}</p>
     
      
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Book Now
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="w-1/3 h-screen bg-white shadow-md">
            {/* Modal content */}
            <button onClick={closeModal} className="absolute top-0 right-0 p-4 border bg-red-600 text-white">X</button>
            {/* Other modal content */}
           <div>
           
           <Modal  
        pdata={data} 
        onClose={closeModal}/>
           </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default PlaceDetail