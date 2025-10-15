import React from "react";
import "./footer.css";


const HomePage = () => {
  return (
    <div>
      {/* 
      <nav>
        <nav className="nav1">
          <img
            src="https://appeal-rice-stuff.figma.site/_assets/v11/d498e9944a7fec3e1a17eab501d66111511f5cba.svg"
            alt="Primal Training"
          />
          <h2>PrimalTraining</h2>
        </nav>
        <nav className="nav2">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>
            <div className="rys">Reserve Your spot</div>
          </h4>
          <h3>
            <i className="ri-add-line"></i>
          </h3>
        </nav>
      </nav>
      */}

      {/* Join PT */}
      <section className="join-pt">
        <p className="subheading">WHAT WE BELIEVE IN</p>
        <h1 className="mainheading">Join the Primal Tribe Today!</h1>

        <button className="Button">
          <svg
            className="Button-svg"
            width="200"
            height="50"
            viewBox="0 0 300 80"
          >
            <rect
              className="Button-line Button-line--outer"
              strokeWidth="8"
              stroke="#7A1FA2"
              strokeLinecap="round"
              fill="none"
              x="4"
              y="4"
              width="292"
              height="72"
              rx="36"
            />
            <rect
              className="Button-line Button-line--inner"
              strokeWidth="4"
              stroke="#9C27B0"
              strokeLinecap="round"
              fill="none"
              x="4"
              y="4"
              width="292"
              height="72"
              rx="36"
            />
          </svg>
          <div className="Button-content">Reserve Your Spot</div>
        </button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="https://appeal-rice-stuff.figma.site/_assets/v11/d498e9944a7fec3e1a17eab501d66111511f5cba.svg"
              alt="Logo"
            />
          </div>

          <div className="masking-container">
            <h1 className="masked-text">PrimalTraining</h1>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>CONTACT</h4>
            <p>Email: hello@figma.com</p>
            <p>Phone: (203) 555-5555</p>
          </div>

          <div className="footer-section">
            <h4>OPENING HOURS</h4>
            <p>Mon – Fri: 5:00 – 23:00</p>
            <p>Saturdays: 8:00 – 16:00</p>
            <p>Sundays: 8:00 – 13:00</p>
            <p>Holidays: 8:00 – 16:00</p>
          </div>

          <div className="footer-section">
            <h4>SOCIAL</h4>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://twitter.com/">X</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="https://www.spotify.com/">Spotify</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
