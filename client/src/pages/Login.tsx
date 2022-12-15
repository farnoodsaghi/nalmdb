import React from "react";
import { Icon } from "@iconify/react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const { fetchTempRequestToken, is_logged_in } =
    React.useContext(UserContext)!;

  const handleLogin = async () => {
    const token = await fetchTempRequestToken();
  };
  if (is_logged_in) {
    return <Navigate to="/" />;
  }
  return (
    <main className="h-full w-full bg-carbon-black">
      <div className="flex flex-col min-h-screen min-w-full justify-center items-center gap-4">
        <div className="block font-viga text-8xl text-white">
          <h1 className="bg-clip-text	text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
            NALMDB
          </h1>
        </div>
        <div>
          <h4 className="text-lg font-light font-sarabun text-light-grey text-center">
            Log in to leave your cool reviews and ratings!
          </h4>
        </div>
        <div className="mt-3">
          <button
            onClick={handleLogin}
            className="flex flex-row gap-1 justify-between items-center bg-darker-grey rounded text-base font-light font-sarabun text-white p-3"
          >
            <span>Log in with TMDB</span>
            <Icon icon="ic:round-arrow-forward" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
