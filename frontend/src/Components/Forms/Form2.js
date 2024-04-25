import React from 'react'
import FormInput from './FormInput'
import './Form.css'
import { useState } from 'react'

const Form2 = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Instructor Name",
      type: "text",
      errorMessage:
        "Instructor Name should be 2-16 characters and shouldn't include any special character!",
      label: "Instructor Name",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "Occupation",
      type: "text",
      errorMessage:
        "Select your Occupation!",
      label: "Occupation",
      pattern: "^[A-Za-z0-9]{3,200}$",
      required: true,
    },

    {
      id: 3,
      name: "Medium",
      type: "text",
      errorMessage:
        "Select your medium",
      label: "Medium",
      placeholder: "Tamil",
      pattern: "^[A-Za-z0-9]{3,200}$",
      required: true,
    },
    {
        id: 4,
        name: "Medium",
        type: "int",
        errorMessage:
          "Select your monthly fee",
        label: "fee",
        placeholder: "Tamil",
        pattern: "^[0-9]{3,6}$",
        required: true,
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Create class</h2>
        <h1>Add Class Details</h1>

      
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className='buttonsOrder'>
        <button className='buttonNext'>Next</button>
        <button className='buttonBack'>Back</button>
        </div>
        
      </form>
    </div>
  );
  
}

export default Form2;