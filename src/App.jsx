import inputSchema from "./components/schema/inputSchema.json";
import Form from "./components/form/Form";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Form schema={inputSchema} />
      </main>
    </>
  );
}

export default App;