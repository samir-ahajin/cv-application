import moment from "moment";

export default function Experience({ exp, i, onDataChange, deleteData }) {
  return (
    <>
      <div className="grid-con">
        <div className="grid-item">
          <label htmlFor="companyName">Company Name:</label>
        </div>
        <div className="grid-item">
          <input
            name="companyName"
            placeholder="SM Mall of Asia"
            value={exp.companyName}
            type="text"
            onChange={(e) => {
              onDataChange(e, i, "exp");
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="exAddress">Address:</label>
        <input
          name="exAddress"
          placeholder="Manila City Philippines 7000"
          value={exp.exAddress}
          type="text"
          onChange={(e) => {
            onDataChange(e, i, "exp");
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
            onDataChange(e, i, "exp");
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
            onDataChange(e, i, "exp");
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
            onDataChange(e, i, "exp");
          }}
        ></input>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            deleteData(i, "exp");
          }}
        >
          Delete
        </button>
      </div>
      <br />
    </>
  );
}
