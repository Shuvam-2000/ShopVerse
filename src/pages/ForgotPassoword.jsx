import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-lg m-auto mt-14 gap-4 text-gray-700 border border-gray-300 rounded-lg shadow-lg p-6">
      <div className="flex flex-col items-center mb-4">
        <p className="font-mono text-xl sm:text-3xl text-center">Change Your Password</p>
        <hr className="border-none h-[2px] w-10 bg-gray-800 mt-2" />
      </div>
      <input
        type="password"
        className="w-full px-4 py-2 text-xs border border-gray-400 rounded-lg mt-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Enter New Password"
      />
      <input
        type="password"
        className="w-full px-4 py-2 text-xs border border-gray-400 rounded-lg mt-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Confirm New Password"
      />
      <button className="w-full bg-[#f21c1c] text-white font-mono px-10 py-2 text-sm mt-4 rounded-lg hover:bg-red-600 transition-all">
        Confirm Password
      </button>
      <div className="w-full flex justify-center text-xs sm:text-sm mt-2">
        <p
          onClick={() => navigate('/login')}
          className="cursor-pointer text-gray-600 hover:text-[#f21c1c] transition-colors"
        >
          Go Back To Login
        </p>
      </div>
    </form>
  );
};

export default ForgotPassword;

