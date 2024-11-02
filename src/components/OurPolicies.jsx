import exchange_icon from "../assets/exchange_icon.png";
import quality_icon from "../assets/quality_icon.png";
import support_img from "../assets/support_img.png";

const OurPolicies = () => {
    return (
        <div className="text-center py-16 px-4 font-mono text-[#414141]">
            {/* Heading*/}
            <h2 className="text-2xl sm:text-3xl font-medium mb-2 sm:tracking-wide">Our <span className="text-[#f21c1c]">Policies</span></h2>
            <p className="text-sm sm:text-base text-gray-500 mb-10 sm:tracking-wide">
                Discover our commitment to quality, convenience, and support
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-4">
                {/* Exchange Items */}
                <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer w-60 mx-auto sm:mx-0">
                    <img src={exchange_icon} alt="exchange icon" className="w-12 mb-4" />
                    <p className="font-semibold mb-2">Flexible Exchange Terms</p>
                    <p className="text-gray-500 hover:text-[#414141]">Hassle-Free Exchange</p>
                </div>

                {/* Return Policy */}
                <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer w-60 mx-auto sm:mx-0">
                    <img src={quality_icon} alt="quality icon" className="w-12 mb-4" />
                    <p className="font-semibold mb-2">7-Days Return Policy</p>
                    <p className="text-gray-500 hover:text-[#414141]">Shop with Confidence: 7-Day Returns</p>
                </div>

                {/* Customer Support */}
                <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-100 cursor-pointer w-60 mx-auto sm:mx-0">
                    <img src={support_img} alt="support icon" className="w-11 mb-4" />
                    <p className="font-semibold mb-2">Best Customer Support</p>
                    <p className="text-gray-500 hover:text-[#414141]">Round-the-Clock Customer Assistance</p>
                </div>
            </div>
        </div>
    );
};

export default OurPolicies;
