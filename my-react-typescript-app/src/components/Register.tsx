import { Link } from "react-router";

const RegisterPage = () => {
  const handleSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nama = formData.get("nama");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm_password");
    console.log({
      nama,
      username,
      password,
      confirmPassword,
    });
  };

  return (
    <section className="max-w-sm mx-auto">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">Register</h3>
          <p className="text-sm text-gray-600">Silahkan registrasi untuk membuat akun baru</p>
        </div>
        <form onSubmit={handleSubmited}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input type="text" id="nama" name="nama" required className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input type="text" id="username" name="username" required className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" id="password" name="password" required className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
              Konfirmasi Password
            </label>
            <input type="password" id="confirm_password" required name="confirm_password" className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
          </div>

          <button type="submit" className="px-4 py-2 mb-8 w-full border-none bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Register
          </button>
          <p className="text-gray-600 text-sm">
            Sudah memiliki akun?{" "}
            <Link to={"/"} className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
