const Header = () => {
  return (
    <header
      className="md:max-w-xl flex items-center justify-center flex-col mx-auto p-4"
      role="banner"
    >
      <h1 className="text-xl">Registration Form</h1>
      <p>
        This is a simple dynamic form generator using React and JSON schema. The
        form is generated based on the provided JSON schema, and it supports
        validation and error handling.
      </p>
      <hr />
    </header>
  );
}
export default Header;