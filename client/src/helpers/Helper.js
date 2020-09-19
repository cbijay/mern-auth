import Axios from "axios";

const checkLogin = async (setAuthUser) => {
  let token = localStorage.getItem("auth-token");

  if (token == null) {
    localStorage.setItem("auth-token", "");
    token = "";
  }

  const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid");

  if (tokenRes.data) {
    const authUserRes = await Axios.get("http://localhost:5000/users/", {
      headers: { "x-auth-token": token },
    });

    setAuthUser({
      token,
      user: authUserRes.data,
    });
  }
};

export default checkLogin;
