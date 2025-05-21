export default function TextareaField({ id, label, name, value, onChange, error }) { 
    return (
      <div className="flex flex-col mb-4">
        <label htmlFor={id} className="mb-1 font-medium">
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          value={value || ""}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
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