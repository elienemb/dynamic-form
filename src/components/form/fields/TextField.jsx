export default function TextField({ id, label, name, type, value, onChange, error }) { 

    return (
      <div className="flex flex-col mb-4">
        <label htmlFor={id} className="mb-1 font-medium">
          {label}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          value={value || ""}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded p-2`}
        />
        {error && (
          <span
            id={`${id}-error`}
            role="alert"
            className="text-red-500 text-sm"
          >
            {error}
          </span>
        )}
      </div>
    );
}