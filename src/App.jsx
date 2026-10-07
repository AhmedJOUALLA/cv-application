import "./styles/cv.css";
import Section from "./components/Section";

const generalFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone number", type: "tel" },
];

const educationFields = [
  { name: "school", label: "School name", type: "text" },
  { name: "title", label: "Title of study", type: "text" },
  { name: "date", label: "Date of study", type: "date" },
];



const experienceFields = [
  { name: "companyName", label: "Company name", type: "text" },
  { name: "positionTitle", label: "Position title", type: "text" },
  { name: "responsibility", label: "Main responsibilities", type: "textarea" },
  { name: "startDate", label: "Start date", type: "date" },
  { name: "endDate", label: "End date", type: "date" },
];

function App() {
  return (
    <>
      <Section title="General Information" fields={generalFields} />
      <Section title="Educational Experience" fields={educationFields} />
      <Section title="Practical Experience" fields={experienceFields} />
    </>
  );
}

export default App;
