const LoginPage = () => {
  return (
    <section className="max-w-sm mx-auto">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">Login</h3>
          <p className="text-sm text-gray-600">Silahkan login dengan akun yang terdaftar</p>
        </div>
        <form action="" className="" encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input type="text" id="username" name="username" className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" id="password" name="password" className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
          </div>

          <button type="submit" className="px-4 py-2 mb-8 w-full border-none bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Login
          </button>
          <p className="text-gray-600 text-sm">
            Belum memiliki akun?{" "}
            <a href="" className="text-blue-500 font-medium">
              Register
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
