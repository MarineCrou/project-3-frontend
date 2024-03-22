import { Link, useNavigate } from "react-router-dom";
// import { IUser } from "../interfaces/user";

// interface NavbarProps {
//   user: null | IUser;
//   setUser: Function;
// }

function Navbar() {
  //   console.log("user in the navbar: ", user);
  //   const navigate = useNavigate();

  //   function logout() {
  //     localStorage.removeItem("token");
  //     setUser(null);
  //     navigate("/");
  //   }

  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/products" className="navbar-item">
                Shop All
              </Link>
              {/* // ! Show and hide appropriate routes for member/visitor */}
              <Link to="/signup" className="navbar-item">
                Signup
              </Link>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/create" className="navbar-item">
                Create Product
              </Link>
              <button className="button navbar-item is-ghost">Logout</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;