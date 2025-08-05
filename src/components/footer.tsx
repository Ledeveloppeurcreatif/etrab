function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo">
              <a href="#" className="logo">ETRAB</a>
            </div>
            <p>
              Voyagez à travers le Togo avec confort et fiabilité grâce à ETRAB,
              votre partenaire de confiance pour le transport routier vers les
              villes du nord. Ponctualité, sécurité et service client au cœur de chaque trajet.
            </p>
            <ul className="footer__socials">
              <li>
                <a href="#!"><i className="ri-facebook-fill"></i></a>
              </li>
              <li>
                <a href="#!"><i className="ri-instagram-line"></i></a>
              </li>
              <li>
                <a href="#!"><i className="ri-youtube-line"></i></a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Liens rapides</h4>
            <ul className="footer__links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#tour">Services</a></li>
          <li><a href="#contact">Contacts</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__links">
              <li>
                <a href="#">
                  <span><i className="ri-phone-fill"></i></span>+228 26 61 98 35
                </a>
              </li>
              <li>
                <a href="#">
                  <span><i className="ri-record-mail-line"></i></span>
                  etrab.contact@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <span><i className="ri-map-pin-2-fill"></i></span>
                  Rue Saint Matthias, Adidoadin, Lomé – Togo
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Newsletter</h4>
            <form action="#!">
              <input type="text" placeholder="Entrez votre email" />
              <button className="btn">S'abonner</button>
            </form>
          </div>
        </div>

        <div className="footer__bar">
          Copyright © 2025 ETRAB Sarl. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

export default Footer;