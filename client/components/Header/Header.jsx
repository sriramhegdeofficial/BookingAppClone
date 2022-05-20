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

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ type }) {
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

  const handleOption = (name, op) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: op === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
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
            <>
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
                  <FontAwesomeIcon color="lightgray" icon={faBed} />
                  <input
                    type="text"
                    placeholder="where are you going?"
                    className="headerSearchInput"
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} color="lightgray" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}</span>
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
                  <FontAwesomeIcon icon={faPerson} color="lightgray" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText headerOptionsText"
                  >{`${options.adult} Adults ${String.fromCharCode(0x2e31)} ${
                    options.kid
                  } Kids ${String.fromCharCode(0x2e31)} ${
                    options.room
                  } Rooms`}</span>
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
                <div className="headerSearchItem">
                  <button className="headerBtn">Search</button>
                </div>
              </div>
            </>
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
        }

        .headerContainer {
          width: 100%;
          max-width: 1024px;
          margin: 20px 0px 100px 0px;
        }

        .headerContainer.listMode {
          margin-bottom: 0px;
        }

        .headerList {
          display: flex;
          gap: 40px;
          margin-bottom: 50px;
        }

        .headerListItem {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
        }

        .headerListItem span {
          text-transform: capitalize;
        }

        .headerListItem.active {
          border: 1px solid white;
        }

        .headerListItem:hover {
          background: white;
          color: #003580;
        }

        .headerDesc {
          margin: 20px 0px;
        }

        .headerBtn {
          background-color: #0071c2;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }

        .headerSearch {
          height: 50px;
          max-height: 50px;
          background-color: white;
          border: 3px solid #febb02;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 5px;
          border-radius: 5px;
          position: absolute;
          bottom: -25px;
          width: 100%;
          max-width: 1024px;
        }

        .headerSearchItem {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;

          min-height: 30px;
        }

        .headerOptionsText {
          font-size: 0.9rem;
          text-align: center;
          min-width: 210px;
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
          right: 0;
          background: white;
          z-index: 999;
          box-shadow: 0px 0px 68px -32px rgba(0, 0, 0, 0.75);
        }

        .options {
          position: absolute;
          top: 35px;
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
      `}</style>
    </>
  );
}

export default Header;
