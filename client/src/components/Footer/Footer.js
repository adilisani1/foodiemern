import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-top'>
        <div className='container footer-top-inner'>
          <div className='footer-brand'>
            <Link to="/" className='footer-logo-link'>
              <img src="/images/foood-logo.png" alt="Street Food" className='footer-logo' />
            </Link>
            <p className='footer-brand-text'>
              Bold flavors, fresh ingredients, and meals made to enjoy — from our kitchen to your table.
            </p>
            <div className='footer-social-icons'>
              <a href="https://twitter.com" className='footer-social' aria-label="Twitter" target="_blank" rel="noreferrer">
                <TwitterIcon className='icons' />
              </a>
              <a href="https://instagram.com" className='footer-social' aria-label="Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon className='icons' />
              </a>
              <a href="https://youtube.com" className='footer-social' aria-label="YouTube" target="_blank" rel="noreferrer">
                <YouTubeIcon className='icons' />
              </a>
            </div>
          </div>

          <div className='footer-col opening-hours'>
            <h3>Opening hours</h3>
            <ul>
              <li><span>Mon–Thu</span> 10:00 AM – 1:00 AM</li>
              <li><span>Saturday</span> 11:00 AM – Midnight</li>
              <li><span>Sunday</span> Kitchen closed</li>
            </ul>
          </div>

          <div className='footer-col footer-links'>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className='footer-col stay-in-touch'>
            <h3>Stay in touch</h3>
            <p>Join our e-club for offers, new dishes, and weekly specials.</p>
            <form className='subscribe' onSubmit={(e) => e.preventDefault()}>
              <input className='form-control' placeholder='Your email…' type='email' aria-label='Email for newsletter' />
              <button type='submit' className='signup-btn'>Sign up</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='container footer-bottom-inner'>
          <p className="copyright-text">© {new Date().getFullYear()} Street Food. All rights reserved.</p>
          <img className="payment-card" src="/images/payment.png" alt="Accepted payment methods" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
