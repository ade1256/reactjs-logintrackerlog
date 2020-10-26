import React from 'react';
import baseUrl from '../../Config/baseUrl';

const HeaderComponent = () => {
  return (
    <div>
      <div id="header-wrap">
        <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
          <div className="container">
            <a href="/" className="navbar-brand">
             Logintracker
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="lni-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="hero-area" className="hero-area-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="contents text-center">
                  <h2 className="head-title wow fadeInUp">
                    Logintracker
                  </h2>
                  <div
                    className="header-button wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <a
                      href="/auth/login"
                      className="btn btn-common"
                    >
                      Login
                    </a>
                  </div>
                </div>
                <div
                  className="img-thumb text-center wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <img
                    className="img-fluid"
                    src="assets\img\hero-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;