import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { AxiosError } from "axios";

type FormRegister = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type ErrorMessage = Partial<FormRegister>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validation = (errorsMsg: FormRegister): ErrorMessage => {
  const errors: ErrorMessage = {};

  if (!errorsMsg.name) {
    errors.name = "Nama lengkap wajib diisi!";
  } else if (errorsMsg.name.length < 3) {
    errors.name = "Nama lengkap minimal 3 karakter!";
  } else if (errorsMsg.name.length > 50) {
    errors.name = "Nama lengkap maksimal 50 karakter!";
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
  const { register } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [form, setForm] = useState<FormRegister>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...form, [name]: value };
    setForm(newValues);

    const newErrors = validation(newValues);
    setErrors({ ...errors, [name]: newErrors[name as keyof FormRegister] });
  };

  const handleSubmited = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateError = validation(form);
    if (Object.keys(validateError).length > 0) {
      setErrors(validateError);
      return;
    }
    setIsLoading(true);

    try {
      const { confirmPassword: _, ...registerDto } = form;

      await register(registerDto);
      navigate("/", {
        state: { message: "Registrasi berhasil! Silakan login." },
      });

      setErrors({});
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      setApiError(axiosError.response?.data?.message || "Registrasi gagal, coba lagi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-sm p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">Register</h3>
          <p className="text-sm text-gray-600">Silahkan registrasi untuk membuat akun baru</p>
        </div>

        {apiError && <div className="text-red-500 text-sm mb-4 p-2 bg-red-50 rounded-lg">{apiError}</div>}
        <form onSubmit={handleSubmited}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input type="text" id="name" name="name" onChange={handleChange} value={form.name} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input type="text" id="username" name="username" onChange={handleChange} value={form.username} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" name="email" onChange={handleChange} value={form.email} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
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
              value={form.password}
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
              value={form.confirmPassword}
              className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" disabled={isLoading} className="px-4 py-2 mb-8 w-full border-none bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            {isLoading ? "Loading..." : "Daftar"}
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
