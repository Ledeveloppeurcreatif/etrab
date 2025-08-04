function Main() {
  return (
    <>
      <header id="home">
        <div className="header__container">
          <div className="header__content">
            <p>TRANSPORT INTERURBAIN AU TOGO</p>
            <h1>Voyagez sereinement avec ETRAB</h1>
            <div className="header__btns">
              <button className="btn">Réserver un trajet</button>
            </div>
          </div>
          <div className="header__image">
            <img src="img/bus.png" alt="header" />
          </div>
        </div>
      </header>

      <section className="section__container destination__container" id="about">
        <h2 className="section__header">Destinations populaires</h2>
        <p className="section__description">
          Découvrez les villes desservies par ETRAB à travers le Togo
        </p>
        <div className="destination__grid">
          <div className="destination__card">
            <img src="img/card.jpg" alt="destination" />
            <div className="destination__card__details">
              <div>
                <h4>Kara</h4>
                <p>Départ quotidien à 7h — environ 6 000 FCFA</p>
              </div>
              <div className="destination__ratings">
                <span><i className="ri-star-fill"></i></span>
                4.6
              </div>
            </div>
          </div>
          <div className="destination__card">
            <img src="img/card2.jpg" alt="destination" />
            <div className="destination__card__details">
              <div>
                <h4>Sokodé</h4>
                <p>Service fiable et ponctuel — bagages inclus</p>
              </div>
              <div className="destination__ratings">
                <span><i className="ri-star-fill"></i></span>
                4.5
              </div>
            </div>
          </div>
          <div className="destination__card">
            <img src="img/card3.webp" alt="destination" />
            <div className="destination__card__details">
              <div>
                <h4>Dapaong</h4>
                <p>Long trajet confortable — environ 9 000 FCFA</p>
              </div>
              <div className="destination__ratings">
                <span><i className="ri-star-fill"></i></span>
                4.7
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container journey__container" id="tour">
        <h2 className="section__header">Voyagez en toute simplicité</h2>
        <p className="section__description">
          Planifiez votre trajet sans stress avec ETRAB
        </p>
        <div className="journey__grid">
          <div className="journey__card">
            <div className="journey__card__bg">
              <span><i className="ri-bookmark-3-line"></i></span>
              <h4>Réservation facile</h4>
            </div>
            <div className="journey__card__content">
              <span><i className="ri-bookmark-3-line"></i></span>
              <h4>Un clic suffit</h4>
              <p>
                Réservez vos billets rapidement et suivez votre bus en temps réel.
                Fini les files d’attente — voyagez en toute tranquillité.
              </p>
            </div>
          </div>

          <div className="journey__card">
            <div className="journey__card__bg">
              <span><i className="ri-landscape-fill"></i></span>
              <h4>Horaires adaptés</h4>
            </div>
            <div className="journey__card__content">
              <span><i className="ri-landscape-fill"></i></span>
              <h4>Flexibilité garantie</h4>
              <p>
                Choisissez vos horaires et vos destinations selon vos besoins.
                ETRAB s’adapte à votre rythme.
              </p>
            </div>
          </div>

          <div className="journey__card">
            <div className="journey__card__bg">
              <span><i className="ri-map-2-line"></i></span>
              <h4>Expérience locale</h4>
            </div>
            <div className="journey__card__content">
              <span><i className="ri-map-2-line"></i></span>
              <h4>Conseils pratiques</h4>
              <p>
                Nos chauffeurs connaissent les routes du Togo comme leur poche.
                Profitez d’un trajet sécurisé et bien organisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container showcase__container" id="package">
        <div className="showcase__image">
          <img src="img/showcase.webp" alt="showcase" />
        </div>
        <div className="showcase__content">
          <h4>Confort et sécurité à bord</h4>
          <p>
            Nos bus sont climatisés, équipés de télévision, et offrent un espace
            agréable pour les longs trajets. Voyagez dans les meilleures conditions.
          </p>
          <p>
            Que vous alliez à Kara, Sokodé ou Dapaong, ETRAB vous garantit un
            service ponctuel et professionnel.
          </p>
          <div className="showcase__btn">
            <button className="btn">
              Réserver maintenant
              <span><i className="ri-arrow-right-line"></i></span>
            </button>
          </div>
        </div>
      </section>

      <section className="section__container banner__container">
        <div className="banner__card">
          <h4>10+</h4>
          <p>Années d’expérience</p>
        </div>
        <div className="banner__card">
          <h4>15k+</h4>
          <p>Clients satisfaits</p>
        </div>
        <div className="banner__card">
          <h4>4.8</h4>
          <p>Note moyenne</p>
        </div>
      </section>

      <section className="section__container discover__container">
        <h2 className="section__header">
          Découvrez le Togo avec ETRAB
        </h2>
        <p className="section__description">
          Vivez des paysages magnifiques depuis votre siège
        </p>
        <div className="discover__grid">
          <div className="discover__card">
            <span><i className="ri-camera-lens-line"></i></span>
            <h4>Votre route, votre histoire</h4>
            <p>
              Profitez de la liberté de voyager avec nos bus fiables et confortables.
              Que ce soit pour un court trajet ou une longue aventure, ETRAB vous accompagne.
            </p>
          </div>
          <div className="discover__card">
            <span><i className="ri-ship-line"></i></span>
            <h4>Beautés du pays</h4>
            <p>
              Traversez les paysages du Togo, des plaines verdoyantes aux collines du nord.
              Laissez-vous porter par la route et découvrez des lieux inoubliables.
            </p>
          </div>
          <div className="discover__card">
            <span><i className="ri-landscape-line"></i></span>
            <h4>Sites emblématiques</h4>
            <p>
              Nos trajets vous mènent vers les villes historiques et les marchés animés.
              Imprégnez-vous de la culture locale tout en voyageant en toute sérénité.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;