import { v4 as uuidv4 } from "uuid";

let finalCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
    photo: "",
    description: "",
  },
  education: [
    {
      id: uuidv4(),
      universityName: "",
      address: "",
      degree: "",
      from: "",
      to: "",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      companyName: "",
      address: "",
      position: "",
      from: "",
      to: "",
    },
  ],
};

export default finalCV;
