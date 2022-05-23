import React from "react";
import PListRow from "../PListRow";

function PropertyList(props) {
  return (
    <>
      <div className="pList">
        <PListRow isFull={true}>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg"
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/684880.webp?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o="
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
        </PListRow>
        <PListRow isFull={false}>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg"
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt="property image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
        </PListRow>
      </div>
      <style jsx>{`
        .pList {
          width: 100%;
          //max-width: 1024px;

          padding: 0px 12px;
        }

        .pListItem {
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          width: 18%;
          min-width: 184px;
          margin: 0px 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: white;
        }

        .pListItem:nth-child(1) {
          margin-left: 0px;
        }

        .pListItem:nth-child(5) {
          margin-right: 0px;
        }

        .pListImg {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .pListTitles h1 {
          font-size: 1.125rem;
          line-height: 1.3rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 100%; // some width
        }

        .pListTitles h2 {
          font-size: 0.875rem;
          font-weight: 300;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 100%; // some width
        }

        @media only screen and (min-width: 1024px) {
          .pList {
            max-width: 1024px;

            //border: 2px dashed red;
            padding: 0px;
          }

          .pListItem {
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
}

export default PropertyList;
