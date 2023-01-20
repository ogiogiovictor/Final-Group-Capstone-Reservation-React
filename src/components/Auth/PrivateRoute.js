import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const userName = localStorage.getItem("username");

  const navigate = useNavigate();

  //   if (userName) {
  //     return <Outlet />;
  //   } else navigate("/slider");
  return userName ? <Outlet /> : <div>log in</div>;
}
export default PrivateRoute;
