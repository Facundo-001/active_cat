import React from "react";
import './style.css'
// import './script.js'
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        zIndex: 5,
        position: "fixed",
        width: "100%",
        fontSize: '1.3rem',
        fontWeight: 'bold'
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <div className="icon-container">
          <img
            src="https://cdn2.steamgriddb.com/icon/48b508b64892bdf1d3a44e6de12e146a.ico"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          <span style={{ paddingLeft: '8px'}}>UltraShop</span>
        </div>
      </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
            <div className="audio-player">
              <audio id="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
              <button id="playPause" className="audio-btn">▶️</button>
              <input id="seekBar" type="range" min="0" max="100" value="0" />
              <span id="currentTime">00:00</span> / <span id="duration">00:00</span>
            </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./Soporte">
                Soporte
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-disabled="true">
                Menu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
