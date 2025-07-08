import { Navbar } from "../../components/navbar";
import "./2nd_page.css";

export function Second_page() {
  return (
    <div>
      <Navbar />

      <div
        className="sec_p_outer"
        style={{ marginTop: "75px", display: "flex", flexWrap: "wrap" }}
      >
        <div>
        <div
          className="outer_img"
          style={{ display: "flex", gap: "10px", marginLeft: "18px" }}
        >
          <div className="sec_p_img"></div>
          <div className="sec_p_img"></div>
        </div>
        <div
          className="outer_img"
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "10px",
            marginLeft: "18px",
          }}
        >
          <div className="sec_p_img"></div>
          <div className="sec_p_img"></div>
        </div>
        </div>
      
        <div className="sec_p_content">
          <h2>Andamen</h2>
          <p>Polo Collar Cotton T-shirt</p>
          <div >
            <div className="rating-content">
              <span className="rating-value">4.2 </span>
              <span className="rating-star">★</span>
              <span className="rating-count">11k</span>
            </div>
         
          </div>
          <hr/>
          <div className="sec_p_price" style={{display: "flex", gap: "5px", }}>
            <div className="new_price" style={{ }}>
              ₹531
            </div>
            <div className="old_price" style={{}}>
             ₹1399

            </div>
            <div className="discount">
                62%

            </div>
        <div className="below_line">
            <p>inclusive of all taxes</p>
        </div>
        <div className="size">
            <p>SELECT SIZE</p>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
}
