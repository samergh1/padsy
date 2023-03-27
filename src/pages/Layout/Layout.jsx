import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { UserContextProvider } from "../../context/userContext";

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        <Navbar />
        <section className="body">
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}
