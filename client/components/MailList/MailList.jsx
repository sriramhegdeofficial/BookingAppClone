import React from "react";

function MailList(props) {
  return (
    <>
      <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="description">
          Sign up and we will send the best deals to you.
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <style jsx>{`
        .mail {
          width: 100%;
          margin-top: 50px;
          background: #003580;
          color: white;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 20px;
          padding: 50px;
          
        }

        .mailTitle {
          font-size: 1.5rem;
          text-align: center;
        }

        .description {
          font-size: 0.85rem;
          text-align: center;
          margin-top: -30px;
          margin-bottom: 22px;
        }

        .mailInputContainer {
          display: flex;
          flex-direction: column;

          gap: 8px 0px;
          align-items: flex-end;
          //border: 2px dashed white;
          width: 100%;
          max-width: 300px;
        }

        .mailInputContainer > input {
          width: 100%;
          height: 38px;
          padding: 0px 15px;
          border: none;
          outline: none;
          //margin-right: 10px;
          border-radius: 5px;
        }

        .mailInputContainer > button {
          height: 38px;
          width: 100px;
          background: #0071c2;
          color: white;
          text-transform: capitalize;
          outline: none;
          border: none;
          padding: 0px 12px;
          border-radius: 5px;
        }

        @media only screen and (min-width: 1024px) {

        
        
          .mailInputContainer {
            flex-direction: row;

            gap: 0px 0px;
            align-items: auto;
            max-width: 400px;
            width: 400px;
          }

          .mailInputContainer > input {
            margin-right: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default MailList;
