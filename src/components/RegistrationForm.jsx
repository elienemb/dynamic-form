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
    <div className="md:max-w-xl flex items-center justify-center flex-col mx-auto p-4">
      <h2 className="text-base font-bold mb-4">{schema.title}</h2>
      <form className="space-y-4" noValidate>
        <fieldset>
          {schema.fields.map((field) => {
            // Check the type of the field and render the appropriate input
            if (field.type === "checkbox") {
              // For checkbox inputs
              return (
                <div key={field.name} className="flex items-center pb-4">
                  <input
                    id={field.name}
                    className="mr-2"
                    type="checkbox"
                    name={field.name}
                    checked={formData[field.name] || false}
                    onChange={handleChange}
                  />
                  <label htmlFor={field.name}>{field.label}</label>
                </div>
              );
            }
            if (field.type === "select") {
              // For select inputs
              return (
                <div key={field.name} className="flex flex-col pb-">
                  <label className="mb-1 font-medium">{field.label}</label>
                  <select
                    className="border border-gray-300 rounded p-2"
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
                </div>
              );
            }
            // For text and number inputs
            return (
              <div key={field.name} className="flex flex-col pb-4">
                <label className="mb-1 font-medium" htmlFor={field.name}>{field.label}</label>
                <input
                  id={field.name}
                  className="border border-gray-300 rounded p-2"
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  required={field.required}
                />
              </div>
            );
          })}
        </fieldset>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReegistrationForm;

