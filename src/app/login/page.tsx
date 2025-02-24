/**
 * The main page component.
 *
 * @component
 * @login
 * ```tsx
 * <Login />
 * ```
 */
const LoginPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto my-auto flex flex-col justify-center items-center w-1/3 h-full">
        <h1 className="text-xl">FortexCRM</h1>
        <h2 className="mt-5">Welcome back!</h2>
        <div className="mt-5 input-group flex flex-col justify-center items-center container mx-auto">
          <input
            type="text"
            placeholder="Username"
            className="input-control m-5 border-2 border-gray-300 rounded-md p-2 w-1/2 text-sm h-10"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-control m-5 border-2 border-gray-300 rounded-md p-2 w-1/2 text-sm h-10"
          />
        </div>
        <div className="btn-group flex flex-col justify-center items-center container mx-auto">
          <button className="btn-primary m-5 w-1/2 h-10 bg-blue-600 border-blue-500 text-white rounded-md">
            Sign In
          </button>
          <span className="text-sm">Forgot password?</span>
          <div className="divider w-1/3 bg-gray-300 h-1 mt-5 mb-5 rounded-xl"></div>
          <button className="btn-secondary m-5 w-1/2 h-10 bg-cyan-600 border-gray-300 text-white rounded-md">
            Sign Up for Free
          </button>
          <strong className="text-sm">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </strong>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
