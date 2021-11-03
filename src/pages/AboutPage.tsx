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
    <div >
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
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">me</span>
        </h1>
        <h2 className="sm-heading">Let me tell yoy a few things...</h2>
        <div className="about-info">
          {/* <img src="/dist/img/descarga.png" alt="bio" className="bio-image"/> */}
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <h6>full stack</h6>
            <p>
              I am a professional with a vocation and an entrepreneurial spirit,
              a technological and business leader. I am committed to the
              development and promotion of technology in my country.
            </p>
          </div>
          <div className="job job-1">
            <h3>123 webshops</h3>
            <h6>full stack</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              commodi velit sapiente nostrum sequi hic perspiciatis sint.
              Dolorem adipisci vero, aperiam, mollitia quam, debitis ex autem
              atque sit enim aliquam.
            </p>
          </div>
          <div className="job job-2">
            <h3>Designer</h3>
            <h6>full stack</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              commodi velit sapiente nostrum sequi hic perspiciatis sint.
              Dolorem adipisci vero, aperiam, mollitia quam, debitis ex autem
              atque sit enim aliquam.
            </p>
          </div>
          <div className="job job-3">
            <h3>ABC</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              commodi velit sapiente nostrum sequi hic perspiciatis sint.
              Dolorem adipisci vero, aperiam, mollitia quam, debitis ex autem
              atque sit enim aliquam.
            </p>
          </div>
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
};

export default HomePage;
