import React from "react";
import { Button } from "reactstrap";

export default function PrevBtn({ toggleTab, prevBtn }) {
  return (
    <Button
      block={true}
      color="secondary"
      onClick={() => {
        toggleTab(prevBtn);
      }}
      disabled={false}
    >
      prev
    </Button>
  );
}
