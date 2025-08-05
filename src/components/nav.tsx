function Nav() {
  return (
    <>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#" className="logo">ETRAB</a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>

        <ul className="nav__links" id="nav-links">
          <li><a href="#home">ACCUEIL</a></li>
          <li><a href="#destinations">DESTINATIONS</a></li>
          <li><a href="#about">À PROPOS</a></li>
          <li><a href="#tour">SERVICES</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#booking">RÉSERVER</a></li>
        </ul>

        <div className="nav__btns">
          <button className="btn">RÉSERVER</button>
        </div>
      </nav>
    </>
  );
}

export default Nav;