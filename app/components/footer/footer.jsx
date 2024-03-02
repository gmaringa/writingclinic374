import Link from 'next/link';
import './footer.css';
import {
  SiGmail,
} from 'react-icons/si'
import {
  FaInstagramSquare,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaArrowCircleUp 
} from 'react-icons/fa'
import {
  FaMedium,
  FaXTwitter,
} from 'react-icons/fa6'

export default function Footer() {
    return (
      <div className='footer'>
        <div className="container">
          <div className="footer_items">
              <div className='footer_links'>
                  <h1>Links</h1>
                  <div className="links">
                    <Link href='/'>Home</Link>
                    <Link href='/'>Services</Link>
                    <Link href='/'>Contact</Link>
                  </div>
              </div>
              <div className='about_footer'>
                  <h1>About</h1>
                  <div className="link">
                    <Link href='/'>About me</Link>
                    <Link href='/'>My blog</Link>
                    <Link href='/'>Portfolio</Link>
                    <Link href='/'>Services</Link>
                  </div>
              </div>
              <div className='social_footer'>
                <h1>Social</h1>
                <div className="social_links">
                  <div className="first_social_links">
                      <Link href='/'>
                        <SiGmail />
                      </Link>
                      <Link href='/'>
                        <FaInstagramSquare />
                      </Link>
                      <Link href='/'>
                        <FaMedium />
                      </Link>
                      <Link href='/'>
                        <FaWhatsapp />
                      </Link>
                  </div>
                  <div className="second_social_links">
                      <Link href='/'>
                        <FaFacebook />
                      </Link>
                      <Link href='/'>
                        <FaXTwitter />
                      </Link>
                      <Link href='/'>
                        <FaLinkedin />
                      </Link>
                      <Link href='/'>
                        <FaTelegram />
                      </Link>
                  </div>
                </div>
              </div>
              <div className='right_footer_side'>
                <div className="login_footer_btn">
                    <Link href='/home'>Hire Me</Link>
                </div>
                <Link href='/' className='arrow-up'>
                    <FaArrowCircleUp />
                </Link>
              </div>
          </div>
        </div>
      </div>
    );
  }