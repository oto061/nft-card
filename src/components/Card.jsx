import "./Card.css";
import clock from "../images/icon-clock.svg";
import ethereum from "../images/icon-ethereum.svg";
import view from "../images/icon-view.svg";
import avatar from "../images/image-avatar.png";
import equilibrium from "../images/image-equilibrium.jpg";

export default function Card() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="img-top">
            <img src={equilibrium} alt="equilibrium-image" />
            <div className="img-overlay">
              <img src={view} alt="view-icon" />
            </div>
          </div>
          <div className="card-text">
            <a href="#">Equilibrium #3429</a>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </div>
          <div className="flex">
            <div class="ethereum">
              <img src={ethereum} alt="ethereum-image" />
              <p>0.041 ETH</p>
            </div>
            <div className="days">
              <img src={clock} alt="clock-image" />
              <p>3 days left</p>
            </div>
          </div>
          <hr />
          <div className="author">
            <img src={avatar} alt="author-image" />
            <p>
              Creation of{" "}
              <a href="#" className="name">
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
