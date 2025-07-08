import React from "react";
import "./card.css";
import "../../productList";


export default function Card(props) {
    const { price, discountPercentage } = props;
    const originalPrice = price / (1 - discountPercentage / 100);

    return (
        <div className="outer_card">
            <div className="image">
                <img src={props.thumbnail}></img>

            </div>
            <div className="rating">
                <div className="rating-content">
                    <span className="rating-value">4.2 </span>
                    <span className="rating-star">★</span>
                    <span className="rating-count">11k</span>
                </div>
            </div>

            <div className="content">
                <div className="heading">
                    {props.brand}
                </div>
                <div className="desc">
                    {props.title}
                </div>
                <div className="price">
                    <div className="new_price">
                        {props.price}
                    </div>
                    <div className="old_price">
                        
                        {originalPrice.toFixed(2)}
                    </div>
                    <div className="discount">
                    {discountPercentage > 0 ? `${discountPercentage}%` : null} 
                    </div>
                </div>

            </div>
        </div>

    );
}