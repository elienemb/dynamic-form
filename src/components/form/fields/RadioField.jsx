export default function RadioField({
  id,
  label,
  name,
  value,
  onChange,
  options = [],
  error,
}) {
  return (
    <fieldset className="mb-4">
      <legend className="mb-1 font-medium">{label}</legend>
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <label
            key={`${name}-${idx}`}
            htmlFor={`${id}-${idx}`}
            className="inline-flex items-center space-x-2"
          >
            <input
              type="radio"
              id={`${id}-${idx}`}
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(name, opt.value)} 
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
              className="text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </span>
      )}
    </fieldset>
  );
}
