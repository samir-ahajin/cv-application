import React, { useState } from "react";
import Personal from "./personalInfo";

const Cv = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    objective: "",
  });
  const [experienceInfo, setExperienceInfo] = useState({
    experience: {
      position: "",
      company: "",
      address: "",
      from: "",
      to: "",
    },
    experences: [],
  });
  const [education, setEducation] = useState({
    education: {
      university: "",
      address: "",
      degree: "",
      from: "",
      to: "",
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    //  you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(personalInfo);
  }

  //store the information of the value inputter in the personalInformation
  function handleChangeP(e) {
    let obj = {};
    let key = e.target.id;
    obj[key] = e.target.value;

    setPersonalInfo({ ...personalInfo, ...obj });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <Personal onchange={handleChangeP} />
      <button type="submit">Submit form</button>
    </form>
  );
};
export default Cv;
