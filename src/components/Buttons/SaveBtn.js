import { logDOM } from "@testing-library/react";
import React from "react";
import { Button } from "reactstrap";

export default function SaveBtn({ handleSubmit }) {
  return (
    <Button
      block={true}
      color="success"
      onClick={(e) => {
        handleSubmit(e);
      }}
    >
      save
    </Button>
  );
}
