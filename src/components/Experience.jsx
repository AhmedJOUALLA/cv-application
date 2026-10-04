import { useState } from "react";

const Experience = () => {
  const [info, setInfo] = useState({
    companyName: "",
    positionTitle: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setInfo({
      ...info, 
      [e.target.name] : e.target.value 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div  className="cv-section">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Company Name </label>
          <input
            name="companyName"
            type="text"
            value={info.companyName}
            onChange={handleChange}
          />

          <label>Position Title </label>
          <input
            name="positionTitle"
            type="text"
            value={info.positionTitle}
            onChange={handleChange}
          />

          <label>Main Responsibility</label>
          <textarea
            name="responsibility"
            rows={4}
            value={info.responsibility}
            onChange={handleChange}
          />

          <label>Start Date</label>
          <input
            name="startDate"
            type="date"
            value={info.startDate}
            onChange={handleChange}
          />

          <label>End Date</label>
          <input
            name="endDate"
            type="date"
            value={info.endDate}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>{info.companyName}</h3>
          <p>{info.positionTitle}</p>
          <p>{info.responsibility}</p>
          <p>{info.startDate} - {info.endDate} </p>
          <button type="submit">Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
