import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import { useRouter } from "next/router";
import { usePageState } from "../../shared/context/pagestate";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ type }) {
  const [pageState, setPageState] = usePageState();
  const [destination, setDestination] = React.useState(null);
  const [openDate, setOpenDate] = React.useState(false);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = React.useState({
    adult: 1,
    kid: 0,
    room: 1,
  });
  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const router = useRouter();

  const handleOption = (name, op) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: op === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    setPageState({
      destination,
      date,
      options,
    });
    router.push("/hotels");
  };

  return (
    <>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <div className="headerSectionWrapper">
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or
                more with a free Booking account.
              </p>
              <button className="headerBtn">SignIn / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <div className="headerSearchItemWrapper">
                    <div className="minorWrapper">
                      <FontAwesomeIcon color="lightgray" icon={faBed} />
                    </div>
                    <input
                      type="text"
                      placeholder="where are you going?"
                      className="headerSearchInput majorWrapper"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>

                <div className="headerSearchItem">
                  <div className="headerSearchItemWrapper">
                    <div className="minorWrapper">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        color="lightgray"
                      />
                    </div>

                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText majorWrapper"
                    >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                      date[0].endDate,
                      "dd/MM/yyyy"
                    )}`}</span>
                  </div>

                  {openDate && (
                    <div className="dateRangeWrapper">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <div className="headerSearchItemWrapper">
                    <div className="minorWrapper">
                      <FontAwesomeIcon icon={faPerson} color="lightgray" />
                    </div>

                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText majorWrapper"
                    >{`${options.adult} Adults ${String.fromCharCode(0x2e31)} ${
                      options.kid
                    } Kids ${String.fromCharCode(0x2e31)} ${
                      options.room
                    } Rooms`}</span>
                  </div>

                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1 ? true : false}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            disabled={options.adult >= 50 ? true : false}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Kids</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.kid <= 0 ? true : false}
                            className="optionCounterButton"
                            onClick={() => handleOption("kid", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.kid}
                          </span>
                          <button
                            disabled={options.kid >= 50 ? true : false}
                            className="optionCounterButton"
                            onClick={() => handleOption("kid", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1 ? true : false}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            disabled={options.room >= 50 ? true : false}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="headerSearchItem searchButtonWrapper">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: #003580;
          color: white;
          display: flex;
          justify-content: center;
          position: relative;
          //border: 10px dashed pink;
          width: 100%;
          padding: 0px 12px;
          //margin-bottom: 150px;
        }

        .headerContainer {
          width: 100%;
          max-width: 1024px;
          margin: 20px 0px 135px 0px;
          //border: 2px solid white;
        }

        .headerSectionWrapper {
          width: 100%;
        }

        .headerContainer.listMode {
          margin-bottom: 0px;
        }

        .headerList {
          display: flex;
          //gap: 40px;
          gap: 35px;
          margin-bottom: 50px;
          //border: 2px dashed green;
          overflow-x: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .headerList::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .headerListItem {
          display: flex;
          align-items: center;
          //gap: 10px;
          gap: 10px;
          //padding: 10px 20px;
          padding: 10px 20px;
          min-width: min-content;
          border-radius: 20px;
          cursor: pointer;
          transition: all 400ms ease;
        }

        .headerListItem span {
          text-transform: capitalize;
          white-space: nowrap;
        }

        .headerListItem.active {
          border: 1px solid white;
        }

        .headerListItem:hover {
          background: white;
          color: #003580;
        }

        .headerTitle {
          font-size: 1.7rem;
        }

        .headerDesc {
          margin: 20px 0px;
          font-size: 0.8rem;
        }

        .headerBtn {
          background-color: #0071c2;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }

        .headerSearch {
          height: 250px;
          // max-height: 50px;
          background-color: transparent;
          //border: 3px solid #febb02;
          display: flex;
          align-items: center;
          justify-content: center;
          //padding: 10px 5px;
          border-radius: 5px;
          position: absolute;
          bottom: -125px;
          width: calc(100% - 24px);
          max-width: 1024px;
          flex-direction: column;
          //border: 5px solid green;
        }

        .headerSearchItem {
          width: 100%;
          display: flex;
          align-items: center;
          //gap: 10px;
          position: relative;
          margin: 8px;
          height: 35px;
          //z-index: 99;
          background: white;
          justify-content: center;
          margin: 5px;
          border: 3px solid #febb02;
          //padding: 8px 0px;
        }

        .headerSearchItem input {
          //background: red;
          //flex-grow: 1;
          width: 80%;
        }

        .headerSearchItemWrapper {
          display: flex;

          width: 100%;
          //border: 1px solid black;
          height: 100%;
          font-size: 0.9rem;
        }

        .headerSearchItemWrapper span {
          //background: red;

          text-align: left;
        }

        .headerSearchItemWrapper .minorWrapper {
          //background: green;

          width: 20%;
          display: flex;
          justify-content: flex-end;
          padding: 0px 8px;
          align-items: center;
        }

        .headerSearchItemWrapper span.majorWrapper {
          // background: green;
          width: 80% !important;
          display: flex;
          position: relative;
          align-items: center;
        }

        .headerSearchInput {
          border: none;
          outline: none;
        }

        .headerSearchText {
          color: rgba(0, 0, 0, 0.35);
          cursor: pointer;
          user-select: none;
          width: 100%;
        }

        .dateRangeWrapper {
          position: absolute;
          top: 40px;
          right: 0%;
          background: white;
          z-index: 999999;
          box-shadow: 0px 0px 68px -32px rgba(0, 0, 0, 0.75);
        }

        .options {
          position: absolute;

          top: 40px;
          right: 0%;
          background-color: white;
          color: gray;
          border-radius: 5px;
          z-index: 999;
          -webkit-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
        }

        .optionItem {
          width: 200px;
          display: flex;
          justify-content: space-between;
          margin: 10px;
        }

        .optionCounter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: black;

          min-width: 55%;
          max-width: 55%;
        }

        .optionCounterButton {
          width: 30px;
          aspect-ratio: 1 / 1;
          border: 1px solid #0071c2;
          border-radius: 5px;
          color: #0071c2;
          background-color: white;
          cursor: pointer;
        }

        .optionCounterButton:disabled {
          cursor: not-allowed;
        }

        .optionCounterNumber {
          flex-grow: 1;
          display: flex;
          justify-content: center;
        }

        .headerSearchItem.searchButtonWrapper {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          border: none;
          background: none;
        }

        @media only screen and (min-width: 768px) {
          .headerTitle {
            font-size: 2rem;
          }

          .headerDesc {
            font-size: 1.2rem;
          }

          .headerSearch {
            //height: 250px;
            max-height: 50px;
            background-color: white;
            border: 3px solid #febb02;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 5px;
            border-radius: 0px;
            position: absolute;
            bottom: -25px;

            max-width: 1024px;
            flex-direction: row;
            //border: 5px solid green;
          }

          .headerSearchItem {
            width: 25%;
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;

            height: 100%;
            //z-index: 99;
            background: white;
            justify-content: center;
            margin: 0px;
            border: none;
            //padding: 8px 0px;
            //border: 2px solid black;
          }

          .headerSearchItemWrapper span {
            //background: red;

            font-size: 0.6rem;
          }

          .headerSearchItem.searchButtonWrapper {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            border: none;
            background: none;
            max-width: 10%;
            //border: 2px solid green;
          }
        }

        @media only screen and (min-width: 1024px) {
          .headerSearchItemWrapper span {
            //background: red;

            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
