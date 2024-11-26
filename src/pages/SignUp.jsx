import { useNavigate } from "react-router-dom"

const SignUp = ({regsiter,  handleSubmit, errors, onSubmit, isSubmitting}) => {

  const navigate = useNavigate()

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700 border border-gray-300 rounded-lg shadow-lg p-6">
      <div className="inline-flex items-center gap-2 mb-2 mt-6">
        <p className="font-mono text-3xl">SignUp</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        type="text"
        className="w-full px-3 sm:py-2 py-1 text-xs border border-gray-400 rounded-lg mt-2 hover:border-black focus:outline-none focus:ring focus:ring-gray-300"
        placeholder="Enter Your UserName"
      />
      <input
        type="text"
        className="w-full px-3 sm:py-2 py-1 text-xs border border-gray-400 rounded-lg mt-2 hover:border-black focus:outline-none focus:ring focus:ring-gray-300"
        placeholder="Enter Your Email"
      />
      <input
        type="password"
        className="w-full px-3 sm:py-2 py-1 text-xs border border-gray-400 rounded-lg mt-2 hover:border-black focus:outline-none focus:ring focus:ring-gray-300"
        placeholder="Enter Your Password"
      />
      <input
        type="text"
        className="w-full px-3 sm:py-2 py-1 text-xs border border-gray-400 rounded-lg mt-2 hover:border-black focus:outline-none focus:ring focus:ring-gray-300"
        placeholder="Confirm Your Password"
      />
      <button className="bg-[#f21c1c] text-white font-mono px-10 py-2 mt-4 rounded-lg hover:bg-red-600 transition-all">
        SignIn
      </button>
      <div className="w-full flex justify-center text-xs mt-[8px] cursor-pointer">
        <p onClick={() => navigate('/login')} className="cursor-pointer hover:text-[#f21c1c]">Already Have An Account?Login</p>
      </div>
    </form>
  )
}

export default SignUp
