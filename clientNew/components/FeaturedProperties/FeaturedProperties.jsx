import React from "react";

function FeaturedProperties(props) {
  return (
    <>
      <div className="fp">
        <div className="fpItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o="
            alt="Featured Property Image"
            className="fpImg"
          />
          <div className="fpContentContainer">
            <span className="fpName">Taj hotel</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o="
            alt="Featured Property Image"
            className="fpImg"
          />
          <div className="fpContentContainer">
            <span className="fpName">Taj hotel</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o="
            alt="Featured Property Image"
            className="fpImg"
          />
          <div className="fpContentContainer">
            <span className="fpName">Taj hotel</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://t-cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o="
            alt="Featured Property Image"
            className="fpImg"
          />
          <div className="fpContentContainer">
            <span className="fpName">Taj hotel</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .fp {
          width: 100%;
          max-width: 1024px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .fpItem {
          flex: 1;
          gap: 10px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .fpContentContainer {
          padding: 0 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }

        .fpImg {
          width: 100%;
          object-fit: cover;
        }

        .fpName {
          font-weight: bold;
        }

        .fpCity {
          font-weight: 300;
        }

        .fpPrice {
          font-weight: 500;
        }

        .fpRating {
        }

        .fpRating > button {
          background-color: #003580;
          color: white;
          outline: none;
          border: none;
          padding: 5px;
          margin-right: 10px;
          font-weight: bold;
        }

        .fpRating > span {
          font-size: 0.875rem;
        }
      `}</style>
    </>
  );
}

export default FeaturedProperties;
