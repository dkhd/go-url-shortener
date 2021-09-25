import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

import PleaseWait from "../components/global/PleaseWait";
import Shortener from "../components/dashboard";
import { getUserByEmail, createUser } from "../util/db";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [uid, setUid] = useState("");
  const { logout } = useAuth0();

  useEffect(() => {
    if (user && user.hasOwnProperty("email"))
      getUserByEmail(user.email).then((res) => {
        if (res.data.length === 0) {
          createUser({
            name: user.name || "",
            email: user.email || "user@email.com",
            nickname: user.nickname || "",
            picture: user.picture || "",
          }).then((res) => {
            setUid(res.ref.value.id);
          });
        } else {
          setUid(res.data[0].value.id);
        }
      });
  }, [user]);

  if (isLoading) {
    return <PleaseWait></PleaseWait>;
  }

  if (isAuthenticated)
    return (
      <div className="flex flex-col w-full overflow-hidden h-screen bg-dkhd-purple justify-center items-center">
        <button
          className="fixed top-5 right-5 p-3 rounded-xl bg-red-200 font-light text-red-900"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
        <span className="md:w-4/12 text-3xl text-dkhd-purple-200 font-light mt-10 text-center leading-relaxed text-center">
          Welcome, {user.name}!
        </span>
        <div className="w-full">
          <Shortener uid={uid}></Shortener>
        </div>
      </div>
    );

  if (!isAuthenticated) return <Redirect push to="/" />;
};

export default Dashboard;
