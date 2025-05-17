
import inputSchema from "./inputSchema.json";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <h1>Registration Form</h1>
      <p>
        This is a simple dynamic form generator using React and JSON schema.
        The form is generated based on the provided JSON schema, and it
        supports validation and error handling.
      </p>
      <RegistrationForm schema={inputSchema} />
    </>
  );
}

export default App
