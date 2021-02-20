import React from "react";
import { CustomInput, FormGroup } from "reactstrap";

export default function FormChecbox({
  name,
  id,
  type,
  value,
  toggleInput,
  setValue,
  title,
}) {
  return (
    <FormGroup>
      <CustomInput
        type={type}
        id={id}
        name={name}
        checked={value}
        onChange={() => toggleInput(value, setValue)}
        label={title}
      />
    </FormGroup>
  );
}
