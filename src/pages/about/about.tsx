import './styles.css';
const AboutUs = () => {
  return (
    <main>
      {/* SOBRE NOSOTROS */}
      <section className="about container d-flex flex-column align-items-center">
        <h1 className="subtitle">Sobre Nosotros</h1>
        {/* NOSOTROS */}
        <div className="cards justify-content-center row row-cols-1 row-cols-md-2 row-cols-xl-3 m-0 p-0">
          {/* NOSOTROS ITEM 1 */}
          <div className="card">
            <div className="image">
              <img
                src="https://pbs.twimg.com/media/EwdZ6ViXMAcSAWf?format=jpg&name=large"
                alt="crash pensando"
                title="crash bandicoot pensando"
              />
            </div>
            <div className="divider"></div>
            <div className="text">
              <h2>¿Quiénes Somos?</h2>
              <p>
                GoodGame - Workshop de Videojuegos es la plataforma líder en
                el mundo del gaming y desarrollo de videojuegos. Con un equipo
                de expertos en el campo, ofrecemos talleres, noticias,
                entrevistas y contenido exclusivo sobre los videojuegos más
                recientes y populares. Nuestro objetivo es brindar a nuestros
                participantes una experiencia completa y actualizada en el mundo
                del desarrollo de videojuegos. ¡Acompáñanos para estar al día con
                lo mejor del mundo de los videojuegos!
              </p>
            </div>
          </div>
          {/* NOSOTROS ITEM 2 */}
          <div className="card">
            <div className="image">
              <img
                src="https://pbs.twimg.com/media/Cd7FhP6WEAAg1zT.jpg"
                alt="kirby leyendo"
                title="kirby leyendo"
              />
            </div>
            <div className="divider"></div>
            <div className="text">
              <h2>Un Poco de Historia</h2>
              <p>
                GoodGame - Workshop de Videojuegos fue fundada en el año 2022 por
                un grupo de entusiastas apasionados por los videojuegos y la
                tecnología. Con el propósito de crear una fuente confiable y
                actualizada de información sobre el mundo del desarrollo de
                videojuegos, nuestra plataforma comenzó a ofrecer talleres,
                noticias, entrevistas y contenido exclusivo sobre los videojuegos
                más recientes y populares. Con el tiempo, GoodGame se ha convertido
                en una de las plataformas líderes en el campo del desarrollo de
                videojuegos, brindando una experiencia completa a nuestros
                participantes.
              </p>
            </div>
          </div>
          {/* NOSOTROS ITEM 3 */}
          <div className="card">
            <div className="image">
              <img
                src="https://images.nintendolife.com/2b3c96ae343db/ko-meets-sonic-the-hedgehog-ok-k-o-lets-be-heroes-cartoon-network-1-40-screenshot.large.jpg"
                alt="sonic y tails corriendo"
                title="sonic y tails corriendo"
              />
            </div>
            <div className="divider"></div>
            <div className="text">
              <h2>Nuestro Propósito</h2>
              <p>
                El propósito de GoodGame - Workshop de Videojuegos es ofrecer a
                nuestros participantes una experiencia completa y actualizada en
                el mundo del desarrollo de videojuegos, brindando talleres,
                noticias, entrevistas y contenido exclusivo sobre los videojuegos
                más recientes y populares. Además, nuestra misión es ser una
                fuente confiable y experta en el campo del desarrollo de
                videojuegos para nuestros participantes.
              </p>
            </div>
          </div>
        </div>
        {/* FIN DE NOSOTROS */}
      </section>
      {/* FIN DE SOBRE NOSOTROS */}
      {/* CITA */}
      <section className="quote d-flex justify-content-center">
        <blockquote className="blockquote">
            <p>
                Desde los primeros niveles hasta los más desafiantes, juntos hemos
                avanzado en esta aventura llamada vida. Gracias a cada uno de los
                participantes y colaboradores de GoodGame - Workshop de Videojuegos,
                por ser parte de esta comunidad que celebra la pasión por los
                videojuegos. Son la fuerza que nos impulsa a seguir explorando y
                superando desafíos, y por eso, agradecemos cada momento compartido
                juntos. ¡Gracias por ser parte de esta épica odisea en el mundo de los videojuegos!
            </p>
            <cite className="blockquote-footer ">Equipo de GoodGame</cite>
        </blockquote>
      </section>
    </main>
  );
}

export default AboutUs;
