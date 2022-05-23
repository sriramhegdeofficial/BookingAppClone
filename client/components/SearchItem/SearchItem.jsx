import React from "react";

function SearchItem() {
  return (
    <>
      <div className="searchItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/344544851.webp?k=6070ce1137c09e8fc452a4b4fed5dae440b6829d57d1482bda221dd493932ea6&o=&s=1"
          alt="hotel image"
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free Airport Taxi</span>
          <span className="siSubTitle">
            Studio Apartment with air conditioning
          </span>
          <span className="siFeatures">
            Entire Studio &#183; 1 bathroom &#183; 21m<sup>2</sup> 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailText">
            <span className="siPrice">$120</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .searchItem {
          border: 1px solid lightgray;
          padding: 10px;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 20px;
        }

        .siImg {
          width: 200px;
          height: 200px;
          object-fit: cover;
        }

        .siDesc {
          display: flex;
          flex-direction: column;
          //gap: 10px;
          flex: 2;
          justify-content: space-between;
          //border: 2px dashed green;
        }

        .siTitle {
          font-size: 1.25rem;
          color: #0071c2;
          margin: 0;
          line-height: 0.7rem;
        }

        .siDistance {
          font-size: 0.75rem;
        }

        .siTaxiOp {
          font-size: 0.75rem;
          background: #008009;
          color: white;
          width: max-content;
          padding: 4px 12px;
          border-radius: 5px;
        }

        .siSubTitle {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .siFeatures {
          font-size: 0.75rem;
        }

        .siCancelOp {
          font-size: 0.75rem;
          color: #008009;
          font-weight: 700;
        }

        .siCancelOpSubtitle {
          font-size: 0.75rem;
          color: #008009;
        }

        .siDetails {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .siRating {
          display: flex;
          justify-content: space-between;
          //border: 1px dashed red;
        }

        .siRating > span {
          font-weight: 500;
        }

        .siRating > button {
          background-color: #003580;
          color: white;
          outline: none;
          border: none;
          padding: 5px;
          //margin-right: 10px;
          font-weight: bold;
          cursor: default;
        }

        .siDetailText {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .siPrice {
          font-size: 1.5rem;
          font-weight: 900;
        }

        .siTaxOp {
          font-size: 0.75rem;
          color: gray;
        }

        .siCheckButton {
          background: #0071c2;
          border: none;
          outline: none;
          color: white;
          font-weight: 700;
          padding: 10px 5px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}

export default SearchItem;
