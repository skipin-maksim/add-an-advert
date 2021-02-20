import React from "react";
import { TabPane } from "reactstrap";

import FormInput from "../Form-components/FormInput";
import RowButtons from "../RowButtons";

export default function SecondScreen({
  isInvalidPhoneNumber,
  onChangeInput,
  isValidPhoneNumber,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  toggleTab,
  isDisabledNextBtn,
}) {
  return (
    <TabPane tabId="2" className="tab-pane">
      <FormInput
        errorText="Minimum 5 characters"
        isInvalidInput={isInvalidPhoneNumber}
        onChangeInput={onChangeInput}
        isValidInput={isValidPhoneNumber}
        labelTitle="Phone number"
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        data={phoneNumber}
        setData={setPhoneNumber}
      />

      <FormInput
        onChangeInput={onChangeInput}
        labelTitle="E-mail"
        id="email"
        name="email"
        type="text"
        data={email}
        setData={setEmail}
      />
      <RowButtons
        prevBtn="1"
        nextBtn="3"
        toggleTab={toggleTab}
        isDisabledNextBtn={isDisabledNextBtn}
      />
    </TabPane>
  );
}
