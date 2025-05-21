import {useState} from "react";
import FieldType from "./FieldType";
import {validateForm} from "../../utils/validateForm"; 

export default function Form({ schema }) {

  // Initialize state variables for form handling
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (name, value) => {
    // update the form data
    setFormData((prevData) => ({
      ...prevData, // spread the previous data
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(schema, formData); // validate the form data
    setErrors(newErrors); // set the errors state

    if (Object.keys(newErrors).length === 0) {
      // no errors
      // If there are no errors, it can proceed with form submission
      setIsSubmitted(true); // set the submitted state to true
      setSubmittedData(formData); // set the submitted data
      setFormData({}); // reset the form data
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
        {schema.fields.map(
          (
            field // map through the fields in the schema
          ) => (
            // and render the appropriate field type
            <FieldType
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
              error={errors[field.name]}
            />
          )
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>

      {isSubmitted &&
        submittedData && ( // If the form has been submitted successfully, display the submitted data
          <div className="mt-6 p-4 border rounded border-green-700 bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Submitted Data</h3>
            <pre className="text-sm p-2 rounded overflow-x-auto bg-lime-100">
              {JSON.stringify(submittedData, null, 2)}{" "}
              {/* Format the submitted data as JSON */}
            </pre>
          </div>
        )}
    </div>
  );
}