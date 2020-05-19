import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const initialTeamList = [
  {
    name: "Some Guy",
    email: "some@guy.com",
    role: "Hype Man",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (evt) => {
    const { name } = evt.target;
    const { value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return;
    }

    const newTeamMember = { ...formValues };
    setTeamMembers([newTeamMember, ...teamMembers]);

    setFormValues(initialFormValues);

    console.log(teamMembers);
  };

  return (
    <div>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {teamMembers.map((member, index) => {
        return (
          <div key={index}>
            <h3> {member.name} </h3>
            <p> {member.email} </p>
            <p> {member.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
