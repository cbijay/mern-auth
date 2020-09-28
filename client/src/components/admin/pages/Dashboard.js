import React, { useContext, useEffect } from "react";
import AdminHeader from "../layouts/AdminHeader";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

function Dashboard() {
  const history = useHistory();
  const { authUser } = useContext(AppContext);

  useEffect(() => {
    if (!authUser.user) {
      history.push("/");
    }
  });
  return <AdminHeader />;
}

export default Dashboard;
