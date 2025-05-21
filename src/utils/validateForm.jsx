export function validateForm(schema, formData) { 

    const errors = {};

    schema.fields.forEach((field) => {
        if (field.required) { //check if field is required
            // Get the value of the field from formData
            const value = formData[field.name];

            // Say what counts as "empty" based on field type
            const isEmpty =
                field.type === "checkbox"
                    ? !value // checkbox must be checked
                    : field.type === "number"
                    ? value === "" || value === null || isNaN(value) // must be a valid number
                    : field.type === "select" || field.type === "radio"
                    ? !value // must have a selected option
                    : !value?.toString().trim(); // fallback for text-based inputs

            // Register error message if value is invalid
            if (isEmpty) {
                errors[field.name] = `${field.label} is required`;
            }
        }
    });

    return errors;
}