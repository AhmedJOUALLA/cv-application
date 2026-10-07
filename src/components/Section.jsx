import { useState } from "react";

const Section = ({ title, fields }) => {

  
  const initialInfo = {};
  fields.forEach((field) => {
    initialInfo[field.name] = "";
  })

  const [info, setInfo] = useState(initialInfo);
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = (e) => {
      setInfo({
        ...info,
        [e.target.name]: e.target.value,
      });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  }
  return (
    <div className="cv-section">
         <h2>{title}</h2>
         {isEditing ? (
           <form onSubmit={handleSubmit}>
             {fields.map((field) => (
               <div key={field.name}>
                 <label>{field.label}</label>
                 {field.type === "textarea" ? (
                   <textarea
                     name={field.name}
                     rows={4}
                     value={info[field.name]}
                     onChange={handleChange}
                   />
                 ) : (
                   <input
                     name={field.name}
                     type={field.type}
                     value={info[field.name]}
                     onChange={handleChange}
                   />
                 )}
               </div>
             ))}
             <button type="submit">Submit</button>
           </form>
         ) : (
           <div>
             {fields.map((field) => (
               <p key={field.name}>
                 <strong>{field.label}:</strong> {info[field.name]}
               </p>
             ))}
             <button onClick={() => setIsEditing(true)}>Edit</button>
           </div>
         )}
       </div>
  );
};

export default Section;