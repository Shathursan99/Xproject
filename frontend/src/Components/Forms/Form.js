import React from 'react'
import FormInput from './FormInput'
import './Form.css'
import { useState } from 'react'
import ImageContainer from './ImageContainer'
const Form = () => {
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
      name: "Class Name",
      type: "text",
      errorMessage:
        "Class Name should be 3-16 characters and shouldn't include any special character!",
      label: "Class Name",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "Category",
      type: "text",
      errorMessage:
        "Select suitable Category!",
      label: "Category",
      pattern: "^[A-Za-z0-9]{3,200}$",
      required: true,
    },

    {
      id: 3,
      name: "Description",
      type: "text",
      errorMessage:
        "Description need!",
      label: "Description",
      pattern: ".*",
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

      <div className="image-area">
        <ImageContainer />
        </div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type='' className='buttonNext'>Next</button>
      </form>
    </div>
  );
  
}

export default Form;