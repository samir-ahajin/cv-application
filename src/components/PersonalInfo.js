let tmpImg;
export default function PersonalInfo({ updateInfo, personalInfo }) {
  if (personalInfo.image !== "") {
    tmpImg = personalInfo.image;
  }
  if (personalInfo.image === "") {
    personalInfo.image = tmpImg;
  }

  return (
    <>
      <label htmlFor="image">Upload a Photo:</label>
      <input
        id="image"
        type="file"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
        required
      />
      <img src={personalInfo.image} width="50px" alt="face" />
      <br />
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        placeholder="Samir"
        value={personalInfo.firstName}
        type="text"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        placeholder="Ahajin"
        value={personalInfo.lastName}
        type="text"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        placeholder="18"
        value={personalInfo.age}
        type="number"
        min="18"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />

      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        value={personalInfo.gender}
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        placeholder="Bluehomes, Zamora Drive, Cabatangan, Zamboanga City PH 3000"
        value={personalInfo.address}
        type="text"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />

      <label htmlFor="contactNumber">Contact Number</label>
      <input
        id="contactNumber"
        placeholder="09123456789"
        value={personalInfo.contactNumber}
        type="text"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="samirahajin@gmail.com"
        value={personalInfo.email}
        type="email"
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Objective / About Yourself . . . "
        value={personalInfo.description}
        rows={6}
        cols={50}
        onChange={(e) => {
          updateInfo(e, 1, "personal");
        }}
      />
      <br />
    </>
  );
}
