import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen px-10">
      <span className="text-8xl font-bold text-dkhd-purple-200 mt-7 md:tracking-tighter">
        Go!
      </span>
      <span className="md:w-4/12 text-3xl text-dkhd-purple-200 font-light mt-10 text-center leading-relaxed">
        A URL shortener by{" "}
        <a
          href="https://hadna.space"
          target="_blank"
          rel="noreferrer"
          className="border-b-4 border-dashed font-medium"
        >
          @dkhd
        </a>
        .<br />
        Github repository{" "}
        <a
          href="https://github.com/dkhd/go-url-shortener"
          target="_blank"
          rel="noreferrer"
          className="border-b-4 border-dashed font-medium"
        >
          here
        </a>
        .
      </span>
      <div className="flex flex-col mt-20">
        <button
          className="text-3xl px-10 py-3 bg-dkhd-purple-200 rounded-full text-dkhd-purple hover:bg-dkhd-purple-400 hover:text-dkhd-purple-200 font-title"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
        <span className="text-dkhd-purple-200 font-light mt-3">
          Authentication by Auth0
        </span>
      </div>
    </div>
  );
};

export default Header;
