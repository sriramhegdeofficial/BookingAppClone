import React from "react";

function PageWrapper({ children }) {
  return (
    <>
      <div className="mainWrapper">{children}</div>
      <style jsx>
        {`
          .mainWrapper {
            min-width: 100%;
            width: 100%;
            min-height: 100vh;
            //border: 4px dashed blue;
          }
        `}
      </style>
    </>
  );
}

export default PageWrapper;
