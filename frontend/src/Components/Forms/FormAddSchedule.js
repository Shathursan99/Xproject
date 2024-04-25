import React from 'react'
import FormInput from './FormInput'
import './Form.css'
import { useState } from 'react'

const FormAddSchedule = () => {
  const [values, setValues] = useState({
    date: "",
    time: "",
    repeat: "",
    day: "",
    starts: "",
    ends: "",
  });

  const inputs = [
    {
      id: 1,
      name: "select date",
      type: "date",
      errorMessage:
        "Please select Date!",
      
      placeholder:"Select Date",
      
      required: true,
    },
    {
      id: 2,
      name: "select time",
      type: "time",
      errorMessage:
        "Select your Occupation!",
         
      required: true,
      placeholder: "Select Time",
    },

    {
      id: 3,
      name: "repeat",
      type: "text",
      errorMessage:
        "fill the repeat field!",
      
      placeholder: "Repeat",
      pattern: "^[A-Za-z0-9]{3,200}$",
      required: true,
    },
    {
        id: 4,
        name: "day",
        type: "day",
        errorMessage:
          "Select Day",
       
        placeholder: "Day",
        // pattern: "^[0-9]{3,6}$",
        required: true,
      },
      {
        id: 5,
        name: "starts",
        type: "time",
        errorMessage:
          "Select start time",
       
        placeholder: "Start",
        // pattern: "^[0-9]{3,6}$",
        required: true,
      },
      {
        id: 6,
        name: "ends",
        type: "time",
        errorMessage:
          "Select End time",
       
        placeholder: "End",
        // pattern: "^[0-9]{3,6}$",
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
        <h1>Add Schedule</h1>    
        <div className="column-layout">
          <div className="column-item">
            {inputs.slice(0, 2).map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          
          <div className="columnItem">
            {inputs.slice(2).map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
        <button className='buttonAddMore' type="button">+ Add Next</button>
        <div className='buttonsOrder'>
        <button className='buttonNext'>Next</button>
        <button className='buttonBack'>Back</button>
        </div>
       
        
      </form>
    </div>
  );
  
}

export default FormAddSchedule;