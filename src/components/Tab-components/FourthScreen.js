import React from "react";
import {
  CustomInput,
  TabContent,
  TabPane,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

import FormChecbox from "../Form-components/FormChecbox";
import RowButtons from "../RowButtons";

export default function fourthScreen({
  toggleInput,
  toggleTab,
  serviceOne,
  setServiceOne,
  serviceTwo,
  setServiceTwo,
  serviceThree,
  setServiceThree,
  serviceFour,
  setServiceFour,
  serviceFive,
  setServiceFive,
  handleSubmit,
}) {
  return (
    <TabPane tabId="4" className="tab-pane">
      <h2 style={{ fontSize: "20px" }}>Publication</h2>

      <Row>
        <Col>
          <FormChecbox
            type="checkbox"
            name="serviceOne"
            id="serviceOne"
            value={serviceOne}
            toggleInput={toggleInput}
            setValue={setServiceOne}
            title="Service one"
          />

          <FormChecbox
            type="checkbox"
            name="serviceTwo"
            id="serviceTwo"
            value={serviceTwo}
            toggleInput={toggleInput}
            setValue={setServiceTwo}
            title="Service two"
          />

          <FormChecbox
            type="checkbox"
            name="serviceThree"
            id="serviceThree"
            value={serviceThree}
            toggleInput={toggleInput}
            setValue={setServiceThree}
            title="Service three"
          />

          <FormChecbox
            type="checkbox"
            name="serviceFour"
            id="serviceFour"
            value={serviceFour}
            toggleInput={toggleInput}
            setValue={setServiceFour}
            title="Service four"
          />

          <FormChecbox
            type="checkbox"
            name="serviceFive"
            id="serviceFive"
            value={serviceFive}
            toggleInput={toggleInput}
            setValue={setServiceFive}
            title="Service five"
          />
        </Col>
      </Row>

      <RowButtons
        prevBtn="3"
        saveBtn={true}
        toggleTab={toggleTab}
        handleSubmit={handleSubmit}
      />
    </TabPane>
  );
}
