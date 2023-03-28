import { Navigate, Outlet } from "react-router";
import { LoginPageUrl } from "../../constants/urls";
import { useUserContext } from "../../context/userContext";
import { Loading } from "../Loading";

export function PrivateRoute({ children }) {
  const { user, isLoadingUser } = useUserContext();

  if (isLoadingUser) {
    return <Loading />;
  }

  if (!isLoadingUser && !user) {
    return <Navigate to={LoginPageUrl} />;
  }

  return children;
}
