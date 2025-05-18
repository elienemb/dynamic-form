import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import CheckboxField from "./fields/CheckboxField";
import TextareaField from "./fields/TextareaField";
import RadioField from "./fields/RadioField";

export default function FieldType({ field, value, onChange, error }) {
  const { type, name, label, options } = field;
  const id = `field-${name}`;

  const sharedProps = { id, label, name, value, onChange, error };

  switch (type) {
    case "text":
    case "number":
    case "date":
      return <TextField {...sharedProps} type={type} />;
    case "select":
      return <SelectField {...sharedProps} options={options} />;
    case "textarea":
      return <TextareaField {...sharedProps} />;
    case "checkbox":
      return <CheckboxField {...sharedProps} />;
    case "radio":
      return <RadioField {...sharedProps} options={options} />;
    default:
      return null;
  }
}
