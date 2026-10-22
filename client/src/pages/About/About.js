import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about-wrapper">
        <div className="about-hero-shade" aria-hidden="true" />
        <div className="about-hero-content">
          <p className="about-eyebrow">Foodie</p>
          <h1 className="about-title">About us</h1>
          <p className="about-hero-text">
            Fresh flavors, honest cooking, and meals made to be shared.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-intro">
            <p className="about-kicker">Our story</p>
            <h2>From a small kitchen to your table</h2>
            <p>
              What began as a street-food kitchen grew into Foodie. Bold
              flavors, quality ingredients, and food that feels like home.
            </p>
          </div>

          <div className="about-section-wrapper">
            <div className="about-img-wrap">
              <img
                src="/images/about.png"
                className="about-img"
                alt="Foodie kitchen"
              />
            </div>

            <div className="about-section-text">
              <h3>Crafted with care, served with heart</h3>
              <p>
                Every dish is built around fresh produce, careful seasoning, and
                recipes refined over years of cooking for our community.
              </p>
              <p>
                From everyday favorites to weekend specials, we cook with the
                same care whether you dine in, take away, or order for delivery.
              </p>
              <Link to="/menu" className="about-cta">
                Explore the menu
              </Link>
            </div>
          </div>

          <ul className="about-highlights">
            <li className="about-highlight">
              <span className="about-highlight-label">Fresh</span>
              <p>Ingredients chosen daily for taste and quality.</p>
            </li>
            <li className="about-highlight">
              <span className="about-highlight-label">Fast</span>
              <p>Order in minutes and enjoy meals made to order.</p>
            </li>
            <li className="about-highlight">
              <span className="about-highlight-label">Local</span>
              <p>Street-food spirit with a modern kitchen polish.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
