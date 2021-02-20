import React, { useState, useEffect } from "react";
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

import FormBlock from "./FormBlock";
import FormInput from "./Form-components/FormInput";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("1");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState(true);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleInput = (value, setValue) => {
    setValue(!value);
  };

  const onChangeInput = (value, setValue) => {
    setValue(value);
  };

  useEffect(() => {
    title.length >= 3
      ? setIsDisabledNextBtn(false)
      : setIsDisabledNextBtn(true);
  }, [description, isDisabledNextBtn, status, title]);

  const isValidInput = () => {
    title.length < 3 ? setIsInvalidInput(true) : setIsInvalidInput(false);
  };

  return (
    <FormBlock>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" style={{ padding: "25px 0" }}>
          <FormInput
            errorText="Minimum 3 characters"
            isInvalidInput={isInvalidInput}
            onChangeInput={onChangeInput}
            isValidInput={isValidInput}
            labelTitle="Title"
            id="title"
            name="title"
            type="text"
            data={title}
            setData={setTitle}
          />

          <FormInput
            onChangeInput={onChangeInput}
            labelTitle="Description"
            id="description"
            name="description"
            type="textarea"
            data={description}
            setData={setDescription}
          />

          <FormGroup row>
            <Col xs="12">
              <Label for="status" check>
                Status: off | on
              </Label>
            </Col>

            <Col xs="1">
              <CustomInput
                type="checkbox"
                id="status"
                name="status"
                checked={status}
                onChange={() => toggleInput(status, setStatus)}
              />
            </Col>
          </FormGroup>

          <Row>
            <Col
              xs={{ size: 4, offset: 8 }}
              md={{ size: 3, offset: 9 }}
              lg={{ size: 2, offset: 10 }}
            >
              <Button
                block={true}
                color="primary"
                onClick={() => {
                  toggleTab("2");
                }}
                disabled={isDisabledNextBtn}
              >
                next
              </Button>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col sm="6">2</Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="6">3</Col>
          </Row>
        </TabPane>

        <TabPane tabId="4">
          <Row>
            <Col sm="6">4</Col>
          </Row>
        </TabPane>
      </TabContent>
    </FormBlock>
  );
}
