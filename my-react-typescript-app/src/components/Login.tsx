import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { AxiosError } from "axios";

type FormLogin = {
  email: string;
  password: string;
};

type ErrorsMsg = Partial<FormLogin>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: FormLogin): ErrorsMsg => {
  const errors: ErrorsMsg = {};

  if (!values.email) {
    errors.email = "email wajib diisi!";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Format email tidak valid!";
  }

  if (!values.password) {
    errors.password = "Password wajib diisi!";
  } else if (values.password.length < 8) {
    errors.password = "Password minimal 8 karakter!";
  }

  return errors;
};

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard";

  const [form, setForm] = useState<FormLogin>({ email: "", password: "" });
  const [errors, setErrors] = useState<ErrorsMsg>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    // Validasi real-time per field
    const newErrors = validate(newForm);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormLogin],
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);

    const validateError = validate(form);
    if (Object.keys(validateError).length > 0) {
      setErrors(validateError);
      return;
    }

    setIsLoading(true);

    try {
      await login(form);
      navigate(from, { replace: true });
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      setApiError(axiosError.response?.data?.message || "Login gagal, coba lagi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">Login</h3>
          <p className="text-sm text-gray-600">Silahkan login dengan akun yang terdaftar</p>
        </div>

        {location.state?.message && <div className="text-green-600 text-sm mb-4 p-2 bg-green-50 rounded">{location.state.message}</div>}

        {apiError && <div className="text-red-500 text-sm mb-4 p-2 bg-red-50 rounded">{apiError}</div>}
        <form onSubmit={handleOnSubmit} autoComplete="off">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="text" id="email" name="email" onChange={handleChange} value={form.email} className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600"
            />
            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
          </div>

          <button type="submit" disabled={isLoading} className="px-4 py-2 mb-8 w-full border-none bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            {isLoading ? "Loading..." : "Login"}
          </button>
          <p className="text-gray-600 text-center text-sm">
            Belum memiliki akun?{" "}
            <Link to={"/register"} className="text-blue-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
