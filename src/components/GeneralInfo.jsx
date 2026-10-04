import { useState } from "react";

const GeneralInfo = () => {
  console.log('render');
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = (e) => {
    console.log("name is ",e.target.name)
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {  
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <div>
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Enter name </label>
          <input value={info.name} name="name" onChange={handleChange} />

          <label>Enter email </label>
          <input type="email" value={info.email} name="email" onChange={handleChange} required />

          <label>Enter Phone number</label>
          <input type="number" value={info.phone} name="phone" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>{info.name}</h3>
          <p>{info.email}</p>
          <p>{info.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
