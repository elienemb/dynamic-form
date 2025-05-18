import React, {useState} from "react";
import FieldType from "./FieldType";

export default function Form({ schema }) {

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});       
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      schema.fields.forEach((field) => {
        if (field.required && !formData[field.name]) {
          newErrors[field.name] = `${field.label} is required`;
        }
      });
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        setIsSubmitted(true);
        setSubmittedData(formData); // ✅ salvando os dados submetidos
        console.log("Form submitted successfully", formData);
      }
    };

 
    
  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h2 id="form-title" className="text-2xl font-bold">
        {schema.title}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-labelledby="form-title"
        noValidate
      >
        {schema.fields.map((field) => (
          <FieldType
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>

      {isSubmitted && submittedData && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Submitted Data</h2>
          <pre className="text-sm bg-white p-2 rounded overflow-x-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );

}