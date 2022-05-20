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

        .mailInputContainer {
          height: 38px;
        }

        .mailInputContainer > input {
          width: 300px;
          height: 100%;
          padding: 0px 15px;
          border: none;
          outline: none;
          margin-right: 10px;
        }

        .mailInputContainer > button {
          height: 100%;
          background: #0071c2;
          color: white;
          text-transform: capitalize;
          outline: none;
          border: none;
          padding: 0px 12px;
        }
      `}</style>
    </>
  );
}

export default MailList;
