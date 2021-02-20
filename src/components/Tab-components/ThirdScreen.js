import React, { useRef, useState, useEffect } from "react";
import {
  TabPane,
  Col,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  CustomInput,
  FormText,
} from "reactstrap";

import RowButtons from "../RowButtons";

export default function ThirdScreen({
  photoList,
  setPhotoList,
  toggleTab,
  isDisabledNextBtn,
  isValidTypePhoto,
}) {
  const [photoListErr, setPhotoListErr] = useState(false);
  const textInput = useRef(null);

  useEffect(() => {
    photoList.length > 5 ? setPhotoListErr(true) : setPhotoListErr(false);
  }, [photoList, setPhotoList]);

  return (
    <TabPane tabId="3" className="tab-pane">
      <FormGroup row>
        <Col xs={12} md={2}>
          <Label for="photos">Add photo</Label>
        </Col>
        <Col xs={12} md={7}>
          <CustomInput
            type="file"
            id="photos"
            name="photos"
            multiple
            accept="image/png, image/jpeg"
            innerRef={textInput}
            invalid={photoListErr}
            onChange={() => setPhotoList(textInput.current.files)}
          />
          <FormText color={photoListErr ? "danger" : "secondary"}>
            You can add up to 5 photos
          </FormText>
          {!isValidTypePhoto && (
            <p className="err-type-photo">You selected an unknown file</p>
          )}
        </Col>
      </FormGroup>

      <RowButtons
        prevBtn="2"
        nextBtn="4"
        toggleTab={toggleTab}
        isDisabledNextBtn={isDisabledNextBtn}
      />
    </TabPane>
  );
}
