import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  function homeHandler() {
    navigate("/");
  }

  return (
    <header>
      <button onClick={homeHandler}>Home</button>
      <Outlet />
    </header>
  );
}

export default Layout;
