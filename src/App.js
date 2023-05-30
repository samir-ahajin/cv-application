import React from "react";
import { useState } from "react";
import Overview from "./components/Overview";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import exampleImage from "./components/utils/exampleImage.jpg";

export default function CVMain() {
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
      address: "",
      degree: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);

  const [expStorage, setExpStorage] = useState([
    {
      id: uuidv4(),
      companyName: "",
      address: "",
      position: "",
      from: "2000-01-01",
      to: moment().format("YYYY-MM-DD"),
    },
  ]);

  //inserting Data
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
        setEducStorage(updateExp);
        break;

      default:
        break;
    }
  };

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

  return (
    <div id="main">
      <form>
        <h1>Personal Information</h1>
        <PersonalInfo updateInfo={onDataChange} personalInfo={personalInfo} />

        <hr />
        <h1>Education</h1>

        <button
          onClick={(e) => {
            addTab(e, "educ");
          }}
        >
          {" "}
          Add Education
        </button>
        <ul>
          {educStorage.map((educ, i) => (
            <li key={educ.id}>
              <Education
                educ={educ}
                i={i}
                onEducChange={onDataChange}
                deleteEduc={deleteData}
              />
            </li>
          ))}
        </ul>

        <hr />
        <h1>Experience</h1>

        <button
          onClick={(e) => {
            addTab(e, "exp");
          }}
        >
          {" "}
          Add Experience
        </button>
        <ul>
          {expStorage.map((exp, i) => (
            <li key={exp.id}>
              <Experience
                exp={exp}
                i={i}
                onExpChange={onDataChange}
                deleteExp={deleteData}
              />
            </li>
          ))}
        </ul>

        <hr />
      </form>

      <p>{JSON.stringify(personalInfo)}</p>
      <hr />

      <Overview personalInfo={personalInfo} />
    </div>
  );
}
