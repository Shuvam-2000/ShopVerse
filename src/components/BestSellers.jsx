import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TopProducts = () => {

  // state for rendering best selling product from API in the home page
  const [bestproducts, setBestProducts] = useState([]);

  // Fetching data from API
  useEffect(() => {
    const bestSellers = async () => {
        try{
            const res = await axios.get('https://fakestoreapi.com/products')
            setBestProducts(res.data.slice(0,4))
        }catch(error){
            console.error("Items Not Found", error)
        }
    }
    bestSellers()
    },[])

  return (
    <div className="my-10">
      {/* Top Products Title Section */}
      <div className="text-center py-8 sm:text-3xl text-2xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-[#414141]">Our Best <span className="text-[#f21c1c]">Sellers</span></p>
          <p className="w-8 sm:w-12 h-[2px] bg-gray-700"></p>
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#414141]">
          Have a look at our best sellers and trends. Our latest collection caters to all your needs.
        </p>
      </div>

      {/* Top Products On the Home Page */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8'>
      {bestproducts.map((showBestProduct) => (
        <div key={showBestProduct.id} className='overflow-hidden rounded-lg shadow sm:hover:scale-110 duration-500 transition ease-in-out'>
          <Link to={`/product/${showBestProduct.id}`} className='w-full h-40 sm:mb-5 px-2 rounded-lg'>
          <img src={showBestProduct.image} alt={showBestProduct.title} className="sm:w-full w-[90%] h-40 sm:mb-5 px-2 rounded-lg" />
          <p className="sm:text-sm text-xs font-serif mt-2 ml-2 sm:font-mono text-[#414141]">{showBestProduct.title}</p>
          <p className="text-[#414141] font-bold mt-4 ml-2">Rs. {showBestProduct.price}</p>
          </Link>
        </div>
      ))}
      </div>

    </div>
  )
}

export default TopProducts;



