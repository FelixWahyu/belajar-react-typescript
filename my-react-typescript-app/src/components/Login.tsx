import { useRef, useState } from "react";
import { Link } from "react-router";

type FormLogin = {
  username: string;
  password: string;
};

type ErrorsMsg = Partial<FormLogin>;

const validate = (values: FormLogin): ErrorsMsg => {
  const errors: ErrorsMsg = {};

  if (!values.username) {
    errors.username = "Username wajib diisi!";
  } else if (values.username.length < 3) {
    errors.username = "Username minimal 3 karakter!";
  } else if (values.username.length > 20) {
    errors.username = "Username maksimal 20 karakter!";
  }

  if (!values.password) {
    errors.password = "Password wajib diisi!";
  } else if (values.password.length < 8) {
    errors.password = "Password minimal 8 karakter!";
  }

  return errors;
};

const LoginPage = () => {
  const [error, setError] = useState<ErrorsMsg>({});

  // uncontrolled component/form input
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const username = formData.get("username") as string;
    // const password = formData.get("password") as string;

    const values: FormLogin = {
      username: usernameRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };

    const validation = validate(values);

    if (Object.keys(validation).length > 0) {
      setError(validation);
      return;
    }

    setError({});
    console.log(values);
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="max-w-sm p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mb-4">Login</h3>
          <p className="text-sm text-gray-600">Silahkan login dengan akun yang terdaftar</p>
        </div>
        <form onSubmit={handleOnSubmit} autoComplete="off">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input type="text" id="username" ref={usernameRef} name="username" className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {error.username && <p className="text-red-600 text-xs mt-1">{error.username}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" id="password" ref={passwordRef} name="password" className="px-3 py-1.5 mt-1 w-full border border-gray-300 rounded-lg focus:outline-1 focus:outline-blue-600 focus:border-blue-600" />
            {error.password && <p className="text-red-600 text-xs mt-1">{error.password}</p>}
          </div>

          <button type="submit" className="px-4 py-2 mb-8 w-full border-none bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Login
          </button>
          <p className="text-gray-600 text-center text-sm">
            Belum memiliki akun?{" "}
            <Link to={"/register"} className="text-blue-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
