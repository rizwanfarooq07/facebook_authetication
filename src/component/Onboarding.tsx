import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserDataInterface } from "../../typings";
import { getUserData } from "../features/userData/userDataSlice";

const Onboarding = () => {
  const navigate = useNavigate();
  const data: UserDataInterface = useSelector(getUserData);

  useEffect(() => {
    Object.keys(data).length === 0 && navigate("/");
  }, [data, navigate]);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center space-y-5">
        <h1>Welcome to Onboarding {data.name}</h1>
        {Object.keys(data).length > 0 && (
          <img
            src={data.picture?.data?.url}
            alt=""
            className="w-20 h-20 rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default Onboarding;
