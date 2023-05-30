import moment from "moment";

export default function Education({ educ, i, onEducChange, deleteEduc }) {
  return (
    <>
      <div>
        <label htmlFor="universityName">University/School Name:</label>
        <input
          name="universityName"
          placeholder="STI-College"
          value={educ.universityName}
          type="text"
          onChange={(e) => {
            onEducChange(e, i, "educ");
          }}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          name="address"
          placeholder="Bluehomes Executive, Zamboanga City Philippines 7000"
          value={educ.address}
          type="text"
          onChange={(e) => {
            onEducChange(e, i, "educ");
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
            onEducChange(e, i, "educ");
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
            onEducChange(e, i, "educ");
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
            onEducChange(e, i, "educ");
          }}
        ></input>
      </div>
      <div>
        <button
          onClick={() => {
            deleteEduc(i, "educ");
          }}
        >
          Delete
        </button>
      </div>
      <br />
    </>
  );
}
