export default function CheckboxField({ label, name, value, onChange, error }) { 
    return (
      <div className="flex items-center mb-4">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name={name}
            checked={value || false}
            onChange={(e) => onChange(name, e.target.checked)}
          />
          {label}
        </label>
        <p id="subscribe-help" className="sr-only">
          Press space to toggle this checkbox
        </p>
        {error && (
          <span role="alert" className="text-red-500 text-sm ml-4">
            {error}
          </span>
        )}
      </div>
    );

}