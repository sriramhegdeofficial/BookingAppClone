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
          min-height: 245px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .container.nostyle {
          justify-content: flex-start;
        }
      `}</style>
    </>
  );
}

export default PListRow;
