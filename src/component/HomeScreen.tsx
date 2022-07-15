import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../features/userData/userDataSlice";
import { UserDataInterface } from "../../typings";

const HomeScreen = () => {
  const navigate = useNavigate();

  const data: UserDataInterface = useSelector(getUserData);

  useEffect(() => {
    Object.keys(data).length > 0 ? navigate("/onboarding") : navigate("");
  }, [data, navigate]);

  console.log(data);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center space-y-5">
        <h1>Welcome to facebook Login</h1>
        <Link
          to="/login"
          target="_blank"
          className="px-5 py-4 text-white bg-blue-500 rounded-full "
        >
          Facebook login
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
