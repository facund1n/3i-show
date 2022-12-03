import { useSignOut } from "react-auth-kit";
import Cookies from "js-cookie";

const LogOut = () => {
  const signOut = useSignOut();

  const getUserName = Cookies.get("_auth_state");
  const userNoRegExp = getUserName.replace(/[^a-zA-Z 0-9.]+/g, "");
  const userCleaned = userNoRegExp.slice(4);
  return (
    <div className="text-end">
      <span>Logedo como: </span>
      <h3 className="f-yellow">{userCleaned}</h3>
      <div
        className="f-yellow mx-1 links"
        onClick={() => signOut().finally(window.location.reload())}
      >
        CERRAR SESION
      </div>
    </div>
  );
};
export default LogOut;
