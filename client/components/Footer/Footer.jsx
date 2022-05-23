import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="fLists fSmall">
          <div className="fListWrapper">
            <ul className="fList">
              <li className="fListItem">Countries</li>
              <li className="fListItem">Regions</li>
              <li className="fListItem">Cities</li>
              <li className="fListItem">Districts</li>
              <li className="fListItem">Airports</li>
              <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
              <li className="fListItem">Countries</li>
              <li className="fListItem">Regions</li>
              <li className="fListItem">Cities</li>
              <li className="fListItem">Districts</li>
              <li className="fListItem">Airports</li>
              <li className="fListItem">Hotels</li>
            </ul>
          </div>
          <div className="fListWrapper">
            <ul className="fList">
              <li className="fListItem">Countries</li>
              <li className="fListItem">Regions</li>
              <li className="fListItem">Cities</li>
              <li className="fListItem">Districts</li>
              <li className="fListItem">Airports</li>
              <li className="fListItem">Hotels</li>
            </ul>

            <ul className="fList">
              <li className="fListItem">Countries</li>
              <li className="fListItem">Regions</li>
              <li className="fListItem">Cities</li>
              <li className="fListItem">Districts</li>
              <li className="fListItem">Airports</li>
              <li className="fListItem">Hotels</li>
            </ul>
          </div>

          <div className="fListWrapper">
            <ul className="fList">
              <li className="fListItem">Countries</li>
              <li className="fListItem">Regions</li>
              <li className="fListItem">Cities</li>
              <li className="fListItem">Districts</li>
              <li className="fListItem">Airports</li>
              <li className="fListItem">Hotels</li>
            </ul>
          </div>
        </div>
        <div className="fLists fBig">
          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>

          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>

          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>

          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>
        </div>
        <div className="fText">
          Copyright &#169; {new Date().getFullYear()} <span>Booking.com</span>
        </div>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          //max-width: 1024px;
          font-size: 0.75rem;
        }

        .fLists {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          margin-bottom: 50px;
          //border: 2px solid black;
          flex-direction: column;
        }

        .fLists.fBig {
          display: none;
        }

        .fList {
          list-style: none;
          padding: 0;
        }

        .fListWrapper {
          //border: 2px dashed green;
          display: flex;
          justify-content: space-evenly;
        }

        .fListItem {
          margin-bottom: 10px;
          color: #003580;
          cursor: pointer;
        }

        .fText {
          width: 100%;
          max-width: 1024px;
          text-align: center;
          padding: 30px 0px;
        }

        .fText span {
          font-weight: 900;
          color: #003580;
        }

        @media only screen and (min-width: 768px) {
          .fLists.fSmall {
            display: none;
          }

          .fLists {
            flex-direction: row;
          }

          .fLists.fBig {
            display: flex;
            justify-content: space-between;
          }

          .fListWrapper {
            width: 30%;
            //border: 2px dashed green;
            display: flex;
            justify-content: space-evenly;
          }
        }

        @media only screen and (min-width: 1024px) {
          .footer {
            width: 100%;
            max-width: 1024px;
            //border: 3px solid black;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
