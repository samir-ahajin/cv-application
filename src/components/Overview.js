export default function Overview({ personalInfo, education }) {
  return (
    <>
      <div>
        <ul>
          <li>{personalInfo.firstName}</li>
          <li>{personalInfo.lastName}</li>
          <li>{personalInfo.age}</li>
          <li>{personalInfo.gender}</li>
          <li>{personalInfo.address}</li>
          <li>{personalInfo.contactNumber}</li>
          <li>{personalInfo.email}</li>
          <li>{personalInfo.description}</li>
        </ul>
      </div>
    </>
  );
}
