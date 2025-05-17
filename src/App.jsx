
import inputSchema from "./inputSchema.json";
import RegistrationForm from "./components/RegistrationForm";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <RegistrationForm schema={inputSchema} />
      </main>
    </>
  );
}

export default App;
