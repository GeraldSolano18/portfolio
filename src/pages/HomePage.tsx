import React from "react";

const HomePage: React.FC = () => {
  return (
    <div id="bg-img">
      <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a href="" className="nav-link ">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                {" "}
                ABOUT ME{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="work.html" className="nav-link">
                {" "}
                MY WORK{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                {" "}
                CONTACT{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="home">
        <h1 className="lg-heading">
          Ing. Gerald <span className="text-secondary">Solano</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programer & Entrepreneur</h2>
        <div className="icons">
          <a href="#!">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
