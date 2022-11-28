import { useSignOut } from "react-auth-kit";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const LogOut = () => {
  const signOut = useSignOut();

  return (
    <>
      <div
        className="f-yellow mx-1 links"
        onClick={() => signOut().finally(window.location.reload())}
      >
        CERRAR SESION
      </div>
    </>
  );
};
export default LogOut;
