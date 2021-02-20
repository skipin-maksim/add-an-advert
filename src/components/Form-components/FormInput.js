import React from "react";
import { Col, FormGroup, Label, Input, FormFeedback } from "reactstrap";

export default function FormInput({
  isInvalidInput = false,
  onChangeInput,
  isValidInput,
  labelTitle,
  errorText = "",
  setData,
  data,
  name,
  type,
  id,
  xsL = "12",
  mdL = "2",
  xsI = "12",
  mdI = "7",
}) {
  return (
    <FormGroup row>
      <Col xs={xsL} md={mdL}>
        <Label for="title">{labelTitle}</Label>
      </Col>

      <Col xs={xsI} md={mdI}>
        <Input
          id={id}
          name={name}
          type={type}
          invalid={isInvalidInput}
          value={data}
          autoComplete="off"
          onBlur={isValidInput}
          onChange={({ target }) => onChangeInput(target.value, setData)}
        />
        <FormFeedback>{errorText}</FormFeedback>
      </Col>
    </FormGroup>
  );
}
