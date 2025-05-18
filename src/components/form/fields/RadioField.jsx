
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
        {options.map((opt, idx) => {
          const optionId = `${id}-${idx}`;
          return (
            <label
              key={optionId}
              htmlFor={optionId}
              className="inline-flex items-center gap-2"
            >
              <input
                type="radio"
                id={optionId}
                name={name}
                value={opt}
                checked={value === opt}
                onChange={(e) => onChange(name, e.target.value)}
                aria-invalid={!!error}
              />
              {opt}
            </label>
          );
        })}
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
