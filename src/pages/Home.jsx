import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

import Header from "../components/home/Header";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated)
    return (
      <div className="flex flex-col w-full h-full bg-dkhd-purple">
        <div>
          <Header></Header>
        </div>
      </div>
    );

  if (isAuthenticated) {
    return <Redirect push to="/dashboard" />;
  }
};

export default Home;
