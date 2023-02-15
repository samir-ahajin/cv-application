import InputField from "./input";

const Personal = ({ onchange }) => {
  return (
    <>
      <InputField
        name={"fname"}
        type={"text"}
        id={"firstName"}
        placeholder={"First Name"}
        onchange={onchange}
      />
      <InputField
        name={"lname"}
        type={"text"}
        id={"lastName"}
        placeholder={"Last Name"}
        onchange={onchange}
      />
      <InputField
        name={"addr"}
        type={"text"}
        id={"address"}
        placeholder={"Ex. B Street, Zamboanga City, Philippines 7000"}
        onchange={onchange}
      />
      <InputField
        name={"nmber"}
        type={"text"}
        id={"number"}
        placeholder={"Ex. +639123458982"}
        onchange={onchange}
      />
      <InputField
        name={"email"}
        type={"email"}
        id={"email"}
        placeholder={"Ex. samahajin@gmail.com"}
        onchange={onchange}
      />
      <textarea
        name="objtives"
        cols="30"
        rows="10"
        placeholder={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus."
        }
        id="objective"
        onChange={onchange}
      ></textarea>
    </>
  );
};
export default Personal;
