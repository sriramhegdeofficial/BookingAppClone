import React from "react";

function Featured() {
  return (
    <>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt="image of some booking"
            className="featuredImg"
          />
          <div className="featureTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt="image of some booking"
            className="featuredImg"
          />
          <div className="featureTitles">
            <h1>Austin</h1>
            <h2>blue properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
            alt="image of some booking"
            className="featuredImg"
          />
          <div className="featureTitles">
            <h1>Santa Monica</h1>
            <h2>Green Hive</h2>
          </div>
        </div>
      </div>
      <style jsx>{`
        .featured {
          width: 100%;
          // max-width: 1024px;
          display: flex;
          justify-content: space-between;
          gap: 0px;
          overflow-x: scroll;
          //border: 2px solid red;
          padding: 0px 12px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .featured::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .featuredItem {
          position: relative;
          color: white;
          border-radius: 10px;
          overflow: hidden;
          height: 250px;
          width: 30%;
          min-width: 250px;
        }

        .featured .featuredItem:nth-child(2) {
          margin: 0px 35px;
        }

        .featuredImg {
          width: 100%;
          height: 100%;
          object-fit: "cover";
        }

        .featureTitles {
          position: absolute;
          z-index: 1;
          bottom: 20px;
          left: 20px;
        }

        .featureTitles h1,
        .featureTitles h2 {
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.82);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 100%; // some width
        }

        @media only screen and (min-width: 1024px) {
          .featured {
            width: 100%;
            max-width: 1024px;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Featured;
