import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const SignUp = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm();

  // handling form submission
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve,5000))
    console.log("Form Submitted", data)
    reset()
  }

  // watch password field for validations
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700 border border-gray-300 rounded-lg shadow-lg p-6">
      <div className="inline-flex items-center gap-2 mb-2 mt-6">
        <p className="font-mono text-3xl">SignUp</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* UserName Validation */}
      <input
        type="text"
        className={`w-full px-3 sm:py-2 text-xs py-1 border hover:border-black rounded-lg mt-2 ${errors.username ? "border-red-500": "border-gray-400"}`}
        placeholder="Enter Your UserName"
        {...register("username", {
          required: "UserName is Required",
          minLength: {value: 4, message: "Min length shoud be at least 4"},
          maxLength: {value: 10, message: "Max length should be at least 10"}
        })}
      />
      {errors.username && (
        <p className="text-xs justify-start m-30 mt-1 text-red-500">{errors.username.message}</p>
      )}

      {/* Email Validation */}
      <input
        type="text"
        className={`w-full px-3 sm:py-2 text-xs py-1 border hover:border-black rounded-lg mt-2 ${errors.email ? "border-red-500": "border-gray-400"}`}
        placeholder="Enter Your Email"
        {...register("email",{
          required: "Email is Required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="text-xs justify-start m-30 mt-1 text-red-500">{errors.email.message}</p>
      )}

      {/* Password Validation */}
      <input
        type="text"
        className={`w-full px-3 sm:py-2 py-1 text-xs border hover:border-black rounded-lg mt-2 ${errors.password ? "border-red-500" : "border-gray-400"}`}
        placeholder="Enter Your Password"
        {...register("password", {
          required: "Password is Required",
          minLength: {value: 4, message: "Min length should be at least 4"},
          maxLength: {value: 10, message: "Max length should be at least 10"},
          pattern:{
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
            message: "Password must be one letter and one number",
          }
        })}
      />
      {errors.password && (
        <p className="text-xs justify-start mt-2 mb-1 text-red-500">{errors.password.message}</p>
      )}

      {/* Confirm Password Validations */}
      <input
        type="text"
        className={`w-full px-3 sm:py-2 py-1 text-xs border hover:border-black rounded-lg mt-2 ${errors.confirmPassword ? "border-red-500" : "border-gray-400"}`}
        placeholder="Confirm Your Password"
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p className="text-xs justify-start mt-2 text-red-500">{errors.confirmPassword.message}</p>
      )}
      <button disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} className="bg-[#f21c1c] text-white font-mono px-10 py-2 mt-4 rounded-lg hover:bg-red-600 transition-all">
        SignIn
      </button>
      <div className="w-full flex justify-center text-xs mt-[8px] cursor-pointer">
        <p onClick={() => navigate('/login')} className="cursor-pointer hover:text-[#f21c1c]">Already Have An Account?Login</p>
      </div>
    </form>
  )
}

export default SignUp
