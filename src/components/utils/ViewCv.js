import React from "react";

const Viewcv = (props) => {
  const { cv } = props;

  return (
    <div>
      <h1>asdfasdf</h1>
      {cv.map((info) => {
        return <div>{info.fname}</div>;
      })}
    </div>
  );
};

export default Viewcv;
