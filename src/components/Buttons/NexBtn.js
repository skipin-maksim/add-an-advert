import React from "react";
import { Button } from "reactstrap";

export default function NexBtn({ toggleTab, nextBtn, isDisabledNextBtn }) {
  return (
    <Button
      block={true}
      color="primary"
      onClick={() => {
        toggleTab(nextBtn);
      }}
      disabled={isDisabledNextBtn}
    >
      next
    </Button>
  );
}
