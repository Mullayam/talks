import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useProfile } from "../hooks/index";
import SocketEvents from "../helpers/socketEventHandlers";

const AuthProtected = (props: any) => {
  const { userProfile, loading } = useProfile();
  // call Socket Events on Auth protected Routes
useEffect(() => {
  SocketEvents()
}, [])

  /*
    redirect is un-auth access protected routes via url
  */
  if (!userProfile && loading) {
    return (
      // <Navigate to={{ pathname: "/auth-login"}} />
      <Navigate to={{ pathname: "/auth-login"}} />
    );
  }

  return <>{props.children}</>;
};

export { AuthProtected };
