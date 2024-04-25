import React, { useState } from 'react';
import FormInput from './FormInput';
import './Form.css';

const FormAddSyllabus = () => {
  const [forms, setForms] = useState([
    {
      title: "",
      description: ""
    }
  ]);

  const inputs = [
    {
      id: 1,
      name: "Title",
      type: "text",
      errorMessage: "Title should be 3-16 characters and shouldn't include any special character!",
      label: "Title",
      placeholder: "Foundational Concepts",
      pattern: "^[A-Za-z0-9]{3,50}$",
      required: true
    },
    {
      id: 2,
      name: "Description",
      type: "text",
      errorMessage: "Syllabus Description!",
      label: "Description",
      pattern: "^[A-Za-z0-9]{3,200}$",
      required: true,
      placeholder: "Gain a solid understanding of the core principles of digital marketing, including SEO, social media marketing, email marketing, and content strategy."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newForms = [...forms];
    newForms[index][name] = value;
    setForms(newForms);
  };

  const handleAddMore = () => {
    setForms([...forms, { title: "", description: "" }]);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Create class</h2>
        <h1>Add Syllabus</h1>
        {forms.map((form, index) => (
          <div key={index}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={form[input.name]}
                onChange={(e) => handleChange(index, e)}
              />
            ))}
          </div>
        ))}
        <button className='buttonAddMore' type="button" onClick={handleAddMore}>+ Add More</button>
        <button type='submit' className='buttonNext'>Next</button>
      </form>
    </div>
  );
}

export default FormAddSyllabus;
