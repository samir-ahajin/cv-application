import moment from "moment";

export default function EducUtil({ educ, i, onDataChange, deleteData }) {
  return (
    <>
      <div id="education">
        <div>
          <label htmlFor="universityName">University/School Name:</label>
          <input
            name="universityName"
            placeholder="STI-College"
            value={educ.universityName}
            type="text"
            onChange={(e) => {
              onDataChange(e, i, "educ");
            }}
          />
        </div>
        <div>
          <label htmlFor="edAddress">Address:</label>
          <input
            name="edAddress"
            placeholder="Bluehomes Executive, Zamboanga City Philippines 7000"
            value={educ.edAddress}
            type="text"
            onChange={(e) => {
              onDataChange(e, i, "educ");
            }}
          />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            name="degree"
            placeholder="Bachelor of Science in Information Technology"
            value={educ.degree}
            type="text"
            onChange={(e) => {
              onDataChange(e, i, "educ");
            }}
          />
        </div>
        <div>
          <label htmlFor="from">Start Date:</label>
          <input
            type="date"
            id="start"
            name="from"
            value={educ.from}
            min="1996-01-01"
            max={moment().format("YYYY-MM-DD")}
            onChange={(e) => {
              onDataChange(e, i, "educ");
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="to">End Date:</label>
          <input
            type="date"
            id="end"
            name="to"
            value={educ.to}
            min="1996-01-01"
            max={moment().format("YYYY-MM-DD")}
            onChange={(e) => {
              onDataChange(e, i, "educ");
            }}
          ></input>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              deleteData(i, "educ");
            }}
          >
            Delete
          </button>
        </div>
        <br />
      </div>
    </>
  );
}
