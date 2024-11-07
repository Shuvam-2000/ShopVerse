import { useState } from "react";
import Testimonial from "../data/Testiomonal.jsx";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonals = () => {
  const [customerTestimonal, setCustomerTestimonal] = useState(Testimonial);

  // slider for the testimonials 
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="text-center py-16 px-4 font-mono text-[#414141]">
      <h2 className="text-xl sm:text-3xl font-medium mb-2 sm:tracking-wide">
        Real Stories, <span className="text-[#f21c1c]">Real Impact</span>
      </h2>
      <p className="w-4/4 m-auto text-xs sm:text-sm md:text-base text-[#414141]">
        Hear Directly from Our Happy Clients
      </p>
      {/* Adding the Slider component */}
      <Slider {...settings}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8'>
          {
            customerTestimonal.map((customerReview) => (
              <div key={customerReview.id} className="overflow-hidden rounded-lg shadow-lg">

              </div>
            ))
          }
        </div>
      </Slider>
    </div>
  );
}

export default Testimonals;
