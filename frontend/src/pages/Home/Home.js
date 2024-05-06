import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
     <div className="home">
       <nav className="container --flex-between ">
          <div className="logo">
           <RiProductHuntLine size={35} />
         </div> 


        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>STE CHATER FRERES</h2>
          <p>
Creation, geographical location, areas of exploitation.
The company CHATEUR FRERES, located in Nianou-grombalia in the governorate of Nabeul in Tunisia, was born in 1998 from a father named ABDELAHMID CHATER. It is now part of the elite in Tunisia in terms of packaging and export of fruits and vegetables in TUNISIA.
          </p>
          <div className="--flex-start">
            <NumberText  text="Fruits" />
            <NumberText  text="vegetables" />
            <NumberText  text="related services." />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" width={"950 px;"} />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
