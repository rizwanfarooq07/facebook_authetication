import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { getData, getUserData } from "../features/userData/userDataSlice";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  const data = useSelector(getUserData);
  const dispatch = useDispatch();
  const componentClicked = (data: any) => {
    console.log(data, "data");
  };

  const responseFacebook = (response: any) => {
    // setData(response);
    // localStorage.setItem("UserData", JSON.stringify(response));
    dispatch(getData(response));
    response && window.close();
  };

  console.log(data);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center">
        <h1>Facebook app</h1>
        <FacebookLogin
          appId="1424776517951268"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon={<BsFacebook className="mr-2" />}
          cssClass="bg-blue-600 flex items-center py-4 px-5 rounded-lg text-white space-x-2 m-5 text-xl border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Login;
