import React from 'react'
import "./ProductDetailCard.css"

const ProductDetailCard = ({Data}) => {
    return (
        <div className="ProductDetailCard mt-20">
        <div className="ProductDetailCard-Img">
          <img src={Data.url} />
        </div>
        <div className="ProductDetailCard-details">
          <p className="ProductDetailCard-name">{Data.Product}</p>
          <div className="ratingsAndreviews">
            <div className="stars">{Data.rating} ◈</div>
            <p className="ratings">
              {Data.rating} Ratings & {Data.reviews} Reviews
            </p>
          </div>
          <div className="ProductDetailCard-Productdetails">
            <li className="ProductDetailCard-detail">{Data.Descripition}</li>
            <li className="ProductDetailCard-detail">{Data.Display}</li>
            <li className="ProductDetailCard-detail">{Data.Camera}</li>
            <li className="ProductDetailCard-detail">{Data.Proccessor}</li>
          </div>
        </div>
  
        <div className="ProductDetailCard-PriceandDelivery">
          <div className="pricecontainer">
            <p className="ProductDetailCard-price">{Data.Sellingprice}</p>
            <img
              src="https://www.shutterstock.com/image-vector/shopping-cart-logo-design-letter-260nw-1753676507.jpg"
              height={21}
              alt=""
            />
          </div>
          <p className="freedel">Free delivery</p>
          <p className="discount">
            Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
          </p>
        </div>
      </div>
    );
}

export default ProductDetailCard
