import { useState } from "react";
import { Link } from "react-router";

type FormRegister = {
  nama: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ErrorMessage = Partial<FormRegister>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validation = (errorsMsg: FormRegister): ErrorMessage => {
  const errors: ErrorMessage = {};

  if (!errorsMsg.nama) {
    errors.nama = "Nama lengkap wajib diisi!";
  } else if (errorsMsg.nama.length < 3) {
    errors.nama = "Nama lengkap minimal 3 karakter!";
  } else if (errorsMsg.nama.length > 50) {
    errors.nama = "Nama lengkap maksimal 50 karakter!";
  }

  if (!errorsMsg.username) {
    errors.username = "Username wajib diisi!";
  } else if (errorsMsg.username.length < 3) {
    errors.username = "Username minimal 3 karakter!";
  } else if (errorsMsg.username.length > 20) {
    errors.username = "Username maksimal 20 karakter!";
  }

  if (!errorsMsg.email) {
    errors.email = "Email wajib diisi!";
  } else if (!emailRegex.test(errorsMsg.email)) {
    errors.email = "Format email tidak valid!";
  }

  if (!errorsMsg.password) {
    errors.password = "Password wajib diisi!";
  } else if (errorsMsg.password.length < 8) {
    errors.password = "Password minimal 8 karakter!";
  }

  if (!errorsMsg.confirmPassword) {
    errors.confirmPassword = "Konfirmasi password wajib diisi!";
  } else if (errorsMsg.confirmPassword !== errorsMsg.password) {
    errors.confirmPassword = "Password tidak sama!";
  }

  return errors;
};

const RegisterPage = () => {
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [user, setUser] = useState<FormRegister>({
    nama: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...user, [name]: value };
    setUser(newValues);

    const newErrors = validation(newValues);
    setErrors({ ...errors, [name]: newErrors[name as keyof FormRegister] });
  };

  const handleSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const nama = formData.get("nama") as string;
    // const username = formData.get("username") as string;
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    // const confirmPassword = formData.get("confirm_password") as string;

    const validateError = validation(user);

    if (Object.keys(validateError).length > 0) {
      setErrors(validateError);
      return;
    }

    setErrors({});
    console.log(user);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-sm p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">Register</h3>
          <p className="text-sm text-gray-600">Silahkan registrasi untuk membuat akun baru</p>
        </div>
        <form onSubmit={handleSubmited}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input type="text" id="nama" name="nama" onChange={handleChange} value={user.nama} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input type="text" id="username" name="username" onChange={handleChange} value={user.username} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" name="email" onChange={handleChange} value={user.email} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={user.password}
              className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={user.confirmPassword}
              className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="px-4 py-2 mb-8 w-full border-none bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Register
          </button>
          <p className="text-gray-600 text-center text-sm">
            Sudah memiliki akun?{" "}
            <Link to={"/"} className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
