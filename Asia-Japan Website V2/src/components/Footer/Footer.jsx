import "./Footer.css";
import asia_lg from "./Asia_Japan_logo.png";
import fb from "./facebook.png";
import yt from "./youtube.png";
import tt from "./tik_tok.png";
import wa from "./whatsapp.svg";
import li from "./linkedin.svg";
import line from "./line.svg";
import ma from "./mail.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <ul>
              <img className="asia_logo" src={asia_lg} alt="" />
              <li>
                <p>Japanese hospitality for you in real estate business</p>
              </li>

              <div className="footer_1_logos">
                <div>
                  <img src={fb} alt="" />
                </div>
                <div>
                  <img src={yt} alt="" />
                </div>
                <div>
                  <img src={tt} alt="" />
                </div>
                <div>
                  <img src={wa} alt="" />
                </div>
                <div>
                  <img src={li} alt="" />
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
              </div>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Link</h4>
            <ul>
              <li>
                <a className="footer_link" href="www.facebook.com">
                  Home
                </a>
              </li>
              <li>
                <a className="footer_link" href="www.facebook.com">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer_link" href="www.facebook.com">
                  Property listing
                </a>
              </li>
              <li>
                <a className="footer_link" href="www.facebook.com">
                  Sell properties
                </a>
              </li>
              <li>
                <a className="footer_link" href="www.facebook.com">
                  Our Projects
                </a>
              </li>
              <li>
                <a className="footer_link" href="www.facebook.com">
                  Our Service
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <h5>Phone</h5>
              </li>
              <li>
                <p>+88029822328</p>
              </li>
              <li>
                <h5>Email</h5>
              </li>
              <li>
                <p>Info@asiajapan-bd.com</p>
              </li>
              <li>
                <h5>Location</h5>
              </li>
              <li>
                <p>Flat 5/B, House#73, Road# 04, Block#C, Banani dhaka</p>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer_4">
              <div className="footer_container">
                <div>
                  <img src={ma} alt="" />
                </div>
                <p className="footer_p">
                  If you have any question and quires then type mail and contact
                  us or want real estate news and Investment
                </p>
                <div className="footer_p_email">
                  <input
                    type="email"
                    id="myEmail"
                    className="place_email"
                    placeholder="   nayansarkar229@gmail.com"
                  />
                  <button className="footer_btn">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
