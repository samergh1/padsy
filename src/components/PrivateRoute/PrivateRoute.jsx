import { Navigate, Outlet } from "react-router";
import { LoginPageUrl } from "../../constants/urls";
import { useUserContext } from "../../context/userContext";

export function PrivateRoute({ children }) {
  const { user, isLoadingUser } = useUserContext();

  if (isLoadingUser) {
    return <h1>LOADING USER...</h1>;
  }

  if (!isLoadingUser && !user) {
    return <Navigate to={LoginPageUrl} />;
  }

  return children;
}
