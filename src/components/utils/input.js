import React, { useState } from "react";

const InputField = ({ name, type, id, placeholder, onchange }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onchange}
      />
    </>
  );
};
export default InputField;
