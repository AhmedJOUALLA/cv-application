import { useState } from "react";

const Education = () => {
  const [info, setInfo] = useState({ school: "", title: "", date: "" });
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
    <div>
       <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>School name </label>
          <input
            name="school"
            value={info.school}
            onChange={handleChange}
          />

          <label>Title of study </label>
          <input
            name="title"
            value={info.title}
            onChange={handleChange}
          />

          <label>Date of study</label>
          <input
            name="date"
            value={info.date}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{info.school}</p>
          <p>{info.title}</p>
          <p>{info.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
