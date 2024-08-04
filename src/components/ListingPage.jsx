import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ListingsPage = () => {
  const [categories, setCategories] = useState(['All']);
  const [listings, setListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState(50000);
  const [sliderIndex, setSliderIndex] = useState(0);
  let url = "https://react-pro2-default-rtdb.firebaseio.com"
  const fetchData =async ()=>{
    try {
       const response = await fetch(`${url}/places.json`)
       if(response.ok){
          const fetchedData = await response.json()

          let arr = [];
          for (let key in fetchedData) {
           arr.push({
             id: key,
             pname:fetchedData[key].pname,
             price:fetchedData[key].price,
             address:fetchedData[key].address,
             image1:fetchedData[key].image1,
             image2:fetchedData[key].image2,
             image3:fetchedData[key].image3,
             category:fetchedData[key].category,
             available:fetchedData[key].available,
             date:fetchedData[key].date,
           });
         }
         //console.log(arr)
         setListings(arr)
        
       }
    } catch (error) {
       console.log(error)
    }
}
  const fetchCategory = async()=>{
    try {
        const response = await fetch(`${url}/categories.json`)
        if(response.ok){
            const fetchedCategories = await response.json();
           // console.log(fetchedCategories)

           let arr=[]
            for (let key in fetchedCategories) {
                arr.push(fetchedCategories[key]);
              }
              setCategories(['All', ...arr]);
              
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchCategory()
    fetchData()
  }, []);

   const availableLists = listings.filter(list=>list.available===true)

   console.log(availableLists)

  const filteredListings = availableLists.filter(listing => 
    (selectedCategory === 'All' || listing.category === selectedCategory) &&
    listing.price <= priceFilter
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSliderMove = (direction) => {
    if (direction === 'left') {
      setSliderIndex(Math.max(0, sliderIndex - 1));
    } else {
      setSliderIndex(Math.min(categories.length - 3, sliderIndex + 1));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative flex items-center mb-8">
        <button 
          onClick={() => handleSliderMove('left')} 
          className="absolute -left-8 z-10 bg-white rounded-full p-2 shadow"
        >
          <FaChevronLeft />
        </button>
        <div className="flex overflow-hidden">
          {categories.slice(sliderIndex, sliderIndex + 3).map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <button 
          onClick={() => handleSliderMove('right')} 
          className="absolute right-0 z-10 bg-white rounded-full p-2 shadow"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="mb-8">
        <label htmlFor="price-filter" className="block mb-2">
          Max Price: {priceFilter}
        </label>
        <input
          type="range"
          id="price-filter"
          min="0"
          max="5000"
          value={priceFilter}
          onChange={(e) => setPriceFilter(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1">
        {filteredListings.map(listing => (
            
          <div key={listing.id} className="border rounded p-4 shadow ">
            <Link to={`/${listing.id}`}>
           <div className='flex justify-between items-center'>
            <h3 className="text-lg font-semibold">{listing.pname}</h3>
           
           
            <p>Category: {listing.category}</p>
           
           
            <p>Price: {listing.price}/night</p>
            
           
            <img src={listing.image1} alt={listing.pname}/>
            </div>
            </Link>
          </div>
          
      
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;