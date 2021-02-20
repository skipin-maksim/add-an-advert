import React from "react";
import { Row, Col } from "reactstrap";
import NexBtn from "./Buttons/NexBtn";
import PrevBtn from "./Buttons/PrevBtn";
import SaveBtn from "./Buttons/SaveBtn";

export default function RowButtons({
  toggleTab,
  isDisabledNextBtn,
  prevBtn = false,
  nextBtn = false,
  saveBtn = false,
  handleSubmit = null,
}) {
  return (
    <Row className="row-btn">
      <Col xs="4" md="3" lg="2">
        {prevBtn && <PrevBtn toggleTab={toggleTab} prevBtn={prevBtn} />}
      </Col>
      <Col
        xs={{ size: 4, offset: 4 }}
        md={{ size: 3, offset: 6 }}
        lg={{ size: 2, offset: 8 }}
      >
        {saveBtn && <SaveBtn handleSubmit={handleSubmit} />}
        {nextBtn && (
          <NexBtn
            toggleTab={toggleTab}
            nextBtn={nextBtn}
            isDisabledNextBtn={isDisabledNextBtn}
          />
        )}
      </Col>
    </Row>
  );
}
