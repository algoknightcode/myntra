import "./footer.css";
import { BelowFooter } from "./below_footer";

export function Footer() {
  return (
    <>
      <div className="outer1">
        <div className="content123">
          <div className="c1">
            <h4>Get to Know Us</h4>
            <ul>
              <li>About Myntra</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Myntra Research</li>
            </ul>
          </div>
          <div className="c2">
            <h4>Connect with Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="c3">
            <h4>Make Money with Us</h4>
            <ul>
              <li>Sell on Myntra</li>
              <li>Partner with Myntra</li>
              <li>Protect and Build Your Brand</li>
              <li>Myntra Global Selling</li>
              <li>Supply to Myntra</li>
              <li>Become an Affiliate</li>
              <li>Fulfillment by Myntra</li>
              <li>Advertise Your Products</li>
              <li>Myntra Pay on Merchants</li>
            </ul>
          </div>
          <div className="c4">
            <h4>Let Us Help You</h4>
            <ul>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Myntra App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <BelowFooter />
    </>
  );
}