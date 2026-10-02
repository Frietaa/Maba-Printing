import Logo from "/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent mt-4">
      <div className="navbar-start px-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>KATALOG</a>
            </li>
            <li>
              <a>LAYANAN KAMI</a>
              <ul className="p-2">
                <li>
                  <a>PRINTING</a>
                </li>
                <li>
                  <a>JASA LAIN</a>
                </li>
              </ul>
            </li>
            <li>
              <a>KONTAK KAMI</a>
            </li>
          </ul>
        </div>
        <a href="#">
          <img src={Logo} alt="Logo" className="h-auto w-45" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-[poppins] text-lg">
          <li>
            <a>Katalog</a>
          </li>
          <li>
            <details>
              <summary>Layanan Kami</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Printing</a>
                </li>
                <li>
                  <a>Jasa Lainnya</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Kontak Kami</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end px-4">
        <a className="btn btn-soft btn-primary px-8 rounded-4xl">Sign-in</a>
      </div>
    </div>
  );
};

export default Navbar;
