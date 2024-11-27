import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const TopProducts = () => {

  // state for rendering top product data from API in the home page
  const [topproducts, setTopProducts] = useState([]);
  const navigate = useNavigate()

  // Fetching data from API
  useEffect(() => {
    const productData = async () => {
        try{
            const res = await axios.get('https://fakestoreapi.com/products')
            setTopProducts(res.data.slice(0,8))
        }catch(error){
            console.error("Items Not Found", error)
        }
    }
    productData()
    },[])

  return (
    <div className="my-10">
      {/* Top Products Title Section */}
      <div className="text-center py-8 sm:text-3xl text-2xl">
        <div className="inline-flex gap-2 items-center mb-3 ml-4">
          <p className="text-[#414141]">Our Top <span className="text-[#f21c1c]">Collection</span></p>
          <p className="w-8 sm:w-12 h-[2px] bg-gray-700"></p>
        </div>
        <p className="w-4/4 m-auto text-xs sm:text-sm md:text-base text-[#414141]">
          Have a look at our newest additions and trends. Our latest collection caters to all your needs.
        </p>
      </div>

      {/* Top Products On the Home Page */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8'>
      {topproducts.map((showTopProduct) => (
        <div key={showTopProduct.id} className='overflow-hidden rounded-lg shadow-lg sm:hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 '>
          <Link to={`/product/${showTopProduct.id}`} className='w-full h-40 sm:mb-5 px-2 rounded-lg'>
          <img src={showTopProduct.image} alt={showTopProduct.title} loading='lazy' className="sm:w-full w-[90%] h-40 sm:mb-5 px-2 rounded-lg" />
          <p className="sm:text-sm text-xs font-serif mt-2 ml-2 sm:font-mono text-[#414141] text-justify">{showTopProduct.title}</p>
          <p className="text-[#414141] font-bold mt-4 ml-2">Rs. {showTopProduct.price}</p>
          </Link>
        </div>
      ))}
      </div>
      <div className="flex justify-center mt-10">
        <button onClick={() => navigate('/exploreproducts')} className="border-gray-200 text-gray-400 border px-8 py-2 sm:px-12 sm:py-3 rounded-full shadow-lg hover:text-[#f21c1c] hover:scale-110 transition-all duration-500">
          See More
        </button>
      </div>

    </div>
  )
}

export default TopProducts;


