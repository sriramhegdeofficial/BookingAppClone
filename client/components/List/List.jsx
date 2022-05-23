import React from "react";
import Navbar from "./../Navbar";
import Header from "./../Header";
import SearchItem from "../SearchItem";
import { usePageState } from "./../../shared/context/pagestate";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function List() {
  const [searchResult, setSearchResult] = usePageState();
  const [destination, setDestination] = React.useState(
    searchResult?.destination || "Bengaluru"
  );
  const [date, setDate] = React.useState(
    searchResult?.date || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]
  );
  const [options, setOptions] = React.useState(searchResult?.options);
  const [openDate, setOpenDate] = React.useState(false);

  return (
    <>
      {console.log(date)}
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {date === undefined
                  ? `${format(new Date(), "dd/MM/yyyy")} to ${format(
                      new Date(),
                      "dd/MM/yyyy"
                    )}`
                  : `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                      date[0].endDate,
                      "dd/MM/yyyy"
                    )}`}

                {openDate && (
                  <div className="dateRangeWrapper">
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  </div>
                )}
              </span>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>(per night)</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>(per night)</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adults</span>
                <input
                  min={1}
                  max={50}
                  type="number"
                  className="lsOptionInput"
                  placeholder={options?.adult || 1}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Kids</span>
                <input
                  min={0}
                  max={50}
                  type="number"
                  className="lsOptionInput"
                  placeholder={options?.kid || 0}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Rooms</span>
                <input
                  min={1}
                  max={50}
                  type="number"
                  className="lsOptionInput"
                  placeholder={options?.room || 1}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>

      <style jsx>{`
        .listContainer {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .listWrapper {
          display: flex;
          width: 100%;
          max-width: 1024px;
          gap: 20px;
        }

        .listSearch {
          flex: 1;
          background-color: #febb02;
          //border: 1px dashed green;
          padding: 20px 10px;
          border-radius: 10px;
          position: sticky;
          top: 20px;
          height: max-content;
        }

        .listResult {
          flex: 3;
        }

        .lsItem {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 10px;
        }

        .lsItem > label {
          font-size: 0.75rem;
        }

        .lsItem > input {
          height: 30px;
          border: none;
          padding: 5px;
        }

        .lsItem > span {
          height: 30px;
          padding: 5px;
          background: white;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        .lsTitle {
          font-size: 20px;
          color: #555;
          margin-bottom: 20px;
          line-height: 0rem;
        }

        .dateRangeWrapper {
          position: absolute;
          top: 32px;
          left: 0%;
          background: white;
          z-index: 999999;
          box-shadow: 0px 0px 68px -32px rgba(0, 0, 0, 0.75);
        }

        .lsOptionItem {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #555;
          font-size: 0.75rem;
        }

        .lsOptionInput {
          width: 70px;
        }

        .listSearch > button {
          padding: 10px 20px;
          background: #0071c2;
          border: none;
          outline: none;
          font-weight: 500;
          color: white;
          width: 100%;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}

export default List;
