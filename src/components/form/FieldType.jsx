
export default function FieldType({ field, value, onChange, error }) { 
    const { type, name, label, options } = field;

    const handleInputChange = (e) => {
        const inputValue = type === "checkbox" ? e.target.checked : e.target.value;
        onChange(name, inputValue);
    };
    
    const inputId = `field-${name}`;

    let inputElement;

    switch (type) {
      case "text":
      case "number":
      case "date":
        inputElement = (
          <input
            id={inputId}
            type={type}
            name={name}
            value={value || ""}
            onChange={handleInputChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded p-2`}
          />
        );
        break;
      case "select":
        inputElement = (
          <select
            id={inputId}
            name={name}
            value={value || ""}
            role="combobox"
            onChange={handleInputChange}
            className={`border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded p-2`}
          >
            <option value="">Select...</option>
            {options &&
              options.map((opt, idx) => (
                <option key={`${name}-${idx}`} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        );
        break;
      case "checkbox":
        inputElement = (
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name={name}
              checked={value || false}
              onChange={handleInputChange}
            />
            {label}
          </label>
        );
        break;
      case "textarea":
        inputElement = (
          <textarea
            id={inputId}
            name={name}
            value={value || ""}
            onChange={handleInputChange}
            className={`border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded p-2`}
          />
        );
        break;
      case "radio":
        inputElement = options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleInputChange}
              className={`border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded p-2`}
            />
            <label className="ml-2">{option.label}</label>
          </div>
        ));
        break;
      default:
        inputElement = null;
    }
    return (
      <div className="flex flex-col mb-4">
        {type !== "checkbox" && (
          <label className="mb-1 font-medium" htmlFor={inputId}>
            {label}
          </label>
        )}
        {inputElement}
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-red-500 text-sm"
            role="alert"
            aria-live="assertive">
            {error}
          </span>
        )}
      </div>
    );
}