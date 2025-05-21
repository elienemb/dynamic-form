import { describe, it, expect } from "vitest";
import { validateForm } from "./validateForm";

describe("validateForm - input text with and without required", () => {
  it("returns error when required text field is empty", () => {
    const schema = {
      fields: [{ name: "name", label: "Name", type: "text", required: true }],
    };

    const formData = { name: "" }; 

    const result = validateForm(schema, formData);

    expect(result).toEqual({ name: "Name is required" });
  });

  it("does not return error when optional text field is empty", () => {
    const schema = {
      fields: [
        { name: "bio", label: "Bio", type: "text" }, // without required
      ],
    };

    const formData = { bio: "" };

    const result = validateForm(schema, formData);

    expect(result).toEqual({});
  });
});
