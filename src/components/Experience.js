import moment from "moment";

export default function Experience({ exp, i, onExpChange, deleteExp }) {
  return (
    <>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          name="companyName"
          placeholder="SM Mall of Asia"
          value={exp.companyName}
          type="text"
          onChange={(e) => {
            onExpChange(e, i, "exp");
          }}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          name="address"
          placeholder="Manila City Philippines 7000"
          value={exp.address}
          type="text"
          onChange={(e) => {
            onExpChange(e, i, "exp");
          }}
        />
      </div>
      <div>
        <label htmlFor="position">Position:</label>
        <input
          name="position"
          placeholder="Manager"
          value={exp.position}
          type="text"
          onChange={(e) => {
            onExpChange(e, i, "exp");
          }}
        />
      </div>
      <div>
        <label htmlFor="from">Start Date:</label>
        <input
          type="date"
          id="start"
          name="from"
          value={exp.from}
          min="1996-01-01"
          max={moment().format("YYYY-MM-DD")}
          onChange={(e) => {
            onExpChange(e, i, "exp");
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="to">End Date:</label>
        <input
          type="date"
          id="end"
          name="to"
          value={exp.to}
          min="1996-01-01"
          max={moment().format("YYYY-MM-DD")}
          onChange={(e) => {
            onExpChange(e, i, "exp");
          }}
        ></input>
      </div>
      <div>
        <button
          onClick={() => {
            deleteExp(i, "exp");
          }}
        >
          Delete
        </button>
      </div>
      <br />
    </>
  );
}
