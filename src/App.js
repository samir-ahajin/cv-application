import React from "react";
import { useState } from "react";
import Overview from "./components/Overview";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import exampleImage from "./components/utils/exampleImage.jpg";
import { createPortal } from "react-dom";

export default function CVMain() {
  const [showModal, setShowModal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
    image: exampleImage,
    description: "",
  });
  const [educStorage, setEducStorage] = useState([
    {
      id: uuidv4(),
      universityName: "",
      edAddress: "",
      degree: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);

  const [expStorage, setExpStorage] = useState([
    {
      id: uuidv4(),
      companyName: "",
      exAddress: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);

  const [finalCVInfo, setfinalCVInfo] = useState([]);

  //updating the personal,education or experience info
  const onDataChange = (e, i, dataInfo) => {
    switch (dataInfo) {
      case "personal":
        let tmpStorage = personalInfo;
        let data;
        if (e.target.files && e.target.files[0]) {
          console.log(e.target.files[0]);
          data = URL.createObjectURL(e.target.files[0]);
        } else {
          data = e.target.value;
        }
        tmpStorage[e.target.id] = data;
        setPersonalInfo({ ...tmpStorage });

        break;

      case "educ":
        const updateEduc = [...educStorage];
        updateEduc[i][e.target.name] = e.target.value;
        setEducStorage(updateEduc);
        break;

      case "exp":
        const updateExp = [...expStorage];
        updateExp[i][e.target.name] = e.target.value;
        setExpStorage(updateExp);
        break;

      default:
        break;
    }
  };
  //insert another input tab for education or experience
  let addTab = (e, tabData) => {
    e.preventDefault();

    if (tabData === "educ") {
      setEducStorage([
        ...educStorage,
        {
          id: uuidv4(),
          universityName: "",
          address: "",
          degree: "",
          from: "2000-01-01",
          to: moment().format("YYYY-MM-DD"),
        },
      ]);
    } else if (tabData === "exp") {
      setExpStorage([
        ...expStorage,
        {
          id: uuidv4(),
          companyName: "",
          address: "",
          position: "",
          from: "2000-01-01",
          to: moment().format("YYYY-MM-DD"),
        },
      ]);
    }
  };
  //Deletes data from either of education or experience tab
  const deleteData = (i, dataInfo) => {
    if (dataInfo === "educ") {
      const updateEduc = [...educStorage];
      updateEduc.splice(i, 1);
      setEducStorage(updateEduc);
    } else if (dataInfo === "exp") {
      const updateExp = [...expStorage];
      updateExp.splice(i, 1);
      setExpStorage(updateExp);
    }
  };
  //show the final output data
  const handleSubmit = (e) => {
    e.preventDefault();

    setfinalCVInfo([
      {
        ...personalInfo,
      },
      {
        ...educStorage,
      },
      {
        ...expStorage,
      },
    ]);
    setShowModal(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  //return value
  return (
    <div id="main">
      {/*Start of form*/}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {/* Personal information section*/}
        <PersonalInfo onDataChange={onDataChange} personalInfo={personalInfo} />

        <hr />
        {/* Education section addTab educStorage ondataChange deleteData*/}
        <h1>Education</h1>
        <div>
          <button
            className="btn"
            onClick={(e) => {
              addTab(e, "educ");
            }}
          >
            {" "}
            Add Education
          </button>
        </div>
        <ul>
          {educStorage.map((educ, i) => (
            <li key={educ.id}>
              <Education
                educ={educ}
                i={i}
                onDataChange={onDataChange}
                deleteData={deleteData}
              />
            </li>
          ))}
        </ul>

        <hr />
        {/* Experience section*/}
        <h1>Experience</h1>
        <div>
          <button
            className="btn"
            onClick={(e) => {
              addTab(e, "exp");
            }}
          >
            {" "}
            Add Experience
          </button>
        </div>
        <ul>
          {expStorage.map((exp, i) => (
            <li key={exp.id}>
              <Experience
                exp={exp}
                i={i}
                onDataChange={onDataChange}
                deleteData={deleteData}
              />
            </li>
          ))}
        </ul>

        <hr />
        {/* Submitting the form after fill up*/}
        <button className="btn" type="submit">
          Preview
        </button>
      </form>
      {/* End of form*/}
      <hr />
      {/*Modal con*/}
      {showModal &&
        createPortal(
          <Overview
            closeModal={closeModal}
            showModal={showModal}
            finalCVInfo={finalCVInfo}
          />,
          document.getElementById("modal")
        )}
    </div>
  );
}
