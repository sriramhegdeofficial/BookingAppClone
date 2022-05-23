import React from "react";

function PListRow({ isFull, children }) {
  return (
    <>
      <div className={isFull === true ? "container" : "container nostyle"}>
        {children}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 100%;
          min-height: 245px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          overflow-x: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .container::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .container.nostyle {
          justify-content: flex-start;
        }
      `}</style>
    </>
  );
}

export default PListRow;
