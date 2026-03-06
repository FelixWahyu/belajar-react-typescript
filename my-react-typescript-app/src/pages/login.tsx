import LoginPage from "../components/Login";
import GuestLayout from "../layouts/GuestLayout";

const Login = () => {
  return (
    <>
      <GuestLayout>
        <LoginPage />
      </GuestLayout>
    </>
  );
};

export default Login;
