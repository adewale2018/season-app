import React from "react";

const Spinner = props => {
  return (
    <>
      <div className='ui active dimmer'>
        <div className='ui massive text loader'><h3>{props.message}</h3></div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </>
  );
};

Spinner.defaultProps = {
  message: "Loading..., please wait!"
}

export default Spinner;
