import React from "react";

const Heading = (props) => {
  return (
    <div className="w-fit mx-auto">
        <h2 className="md:text-5xl text-3xl font-bold">
            <span className="text-orange-500">{props.span}</span> {props.text}
        </h2>
        <div className="md:w-35 w-22 h-1 md:mt-5 mt-3 bg-orange-400 ml-auto"></div>
    </div>
  );
};

export default Heading;
