function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-blur">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Portfolio
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-center">
            <a className="nav-link text-white" href="#about">
              About
            </a>
            <a className="nav-link text-white" href="#projects">
              Projects
            </a>
            <a className="nav-link text-white" href="#skills">
              Skills
            </a>
            {/* <a className="nav-link text-white" href="#contact">
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
