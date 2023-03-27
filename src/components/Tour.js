import React from "react";

const Tour = (props) => {
  return (
    <div className="container">
      <img src={props.image} alt="" width={150} />
      <div className="items">
        <h3>{props.location}</h3>
        <p>{props.title}</p>
        <div className="content">
          <p>
            <span>{props.startdate}</span> - <span>{props.enddate}</span>
          </p>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
