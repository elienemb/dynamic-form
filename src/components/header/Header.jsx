const Header = () => {
  return (
    <header
      className="md:max-w-xl flex items-center justify-center flex-col mx-auto p-4"
      role="banner"
    >
      <h1 className="text-xl font-bold" id="page-title">
        Registration Form
      </h1>
      <p
        aria-describedby="page-title"
        className="text-gray-700 text-sm text-center"
      >
        This form is dynamically generated from a JSON schema to demonstrate
        reusable, accessible, and scalable frontend architecture. It supports
        various field types, built-in validation, and real-time display of
        submitted data.
      </p>
      <hr aria-hidden="true" className="w-full my-4 border-t border-gray-300" />
    </header>
  );
}
export default Header;