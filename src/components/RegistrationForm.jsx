import React, { useState } from "react";

  // Get the schema from the inputSchema.json file
const ReegistrationForm = ({ schema }) => {

  const [formData, setFormData] = useState({});

  //Update the form data when the user types in the input fields and checkboxes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  return (
    <>
      <h2>{schema.title}</h2>
      <form>
        {schema.fields.map((field) => {
            // Check the type of the field and render the appropriate input
            if (field.type === "checkbox") {
                // For checkbox inputs
                return (
                    <div key={field.name}>
                    <label>
                        <input
                        type="checkbox"
                        name={field.name}
                        checked={formData[field.name] || false}
                        onChange={handleChange}
                        />
                        {field.label}
                    </label>
                    </div>
                );
                }
            if (field.type === "select") {
                // For select inputs
                return (
                    <div key={field.name}>
                    <label>
                        {field.label}
                        <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        >
                        {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </select>
                    </label>
                    </div>
                );
                }
          // For text and number inputs
          return (
            <div key={field.name}>
              <label>
                {field.label}
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                />
              </label>
            </div>
            
          );
           
        })}
        <button type="submit">Submit</button>

      </form>
    </>
  );
}

export default ReegistrationForm;

