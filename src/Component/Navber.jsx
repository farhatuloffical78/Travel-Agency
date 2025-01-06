import logo from '../assets/logo.png';
import { Authcontext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  const { user, logOut } = useContext(Authcontext);

  return (
    <div className="flex justify-center items-center">
      <div className="navbar container mx-auto justify-center items-center fixed z-10 top-0 bg-black bg-opacity-50 pl-2 pr-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn mr-1 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                key="home"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                key="findtutor"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
                }
                to="/allpackage"
              >
                Our Tour Packages
              </NavLink>
              <NavLink
                key="umrah"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
                }
                to="umrah"
              >
                Umrah Packages
              </NavLink>
              <NavLink
                key="contact"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={logo}
              className="lg:w-10 w-9 h-9 lg:h-10 rounded-full"
              alt="Logo"
            />
            <a className="btn btn-ghost font-bold md:text-2xl text-base text-white">
              <p>
                Travel<span className="text-red-500">Bloom</span>
              </p>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">
            <NavLink
              key="home"
              className={({ isActive }) =>
                isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              key="findtutor"
              className={({ isActive }) =>
                isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
              }
              to="/allpackage"
            >
              Our Tour Packages
            </NavLink>
            <NavLink
              key="umrah"
              className={({ isActive }) =>
                isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
              }
              to="umrah"
            >
              Umrah Packages
            </NavLink>
            <NavLink
              key="contact"
              className={({ isActive }) =>
                isActive ? 'text-red-500 text-lg font-semibold' : 'text-white text-lg font-semibold'
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex gap-3 justify-center items-center">
              <img
                src={user?.photoURL || 'path/to/default-avatar.png'}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                title={user?.displayName}
              />
            </div>
          ) : (
            <NavLink
              to="/register"
              className="btn text-base font-bold bg-gray-200 rounded-full text-black"
            >
              Register
            </NavLink>
          )}

          {user ? (
            <button
              className="btn text-base font-bold bg-gray-200 rounded-full text-black"
              onClick={logOut}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn text-base font-bold bg-gray-200 rounded-full text-black"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
