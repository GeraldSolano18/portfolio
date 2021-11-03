import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const clickAction = () => setOpen(!open);

  const menuArray = [
    {
      id: 1,
      path: "/",
      name: "home",
    },
    {
      id: 2,
      path: "/aboutMe",
      name: "about me",
    },
    {
      id: 3,
      path: "/myWork",
      name: "my work",
    },
    {
      id: 4,
      path: "/contact",
      name: "contact",
    },
  ];

  return (
    <div id="bg-img">
      <section>
        <div
          onClick={() => clickAction()}
          className={`menu-btn ${open && "close"}`}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className={`menu ${open && "show"}`}>
          <div className={`menu-branding ${open && "show"}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${open && "show"}`}>
            {menuArray.map((item) => (
              <li key={item.id} className={`nav-item ${open && "show"}`}>
                <NavLink
                  // activeClassName="current"
                  to={item.path}
                  className="nav-link "
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <main id="home">
        <h1 className="lg-heading">
          Ing. Gerald <span className="text-secondary">Solano</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programer & Entrepreneur</h2>
        <div className="icons">
          <NavLink to="#!">
            <i className="fab fa-twitter fa-2x"></i>
          </NavLink>
          <NavLink to="">
            <i className="fab fa-facebook fa-2x"></i>
          </NavLink>
          <NavLink to="">
            <i className="fab fa-github fa-2x"></i>
          </NavLink>
          <NavLink to="">
            <i className="fab fa-linkedin fa-2x"></i>
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
