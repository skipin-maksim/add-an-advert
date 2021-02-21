import React from "react";
import { TabPane } from "reactstrap";

import FormInput from "../Form-components/FormInput";
import FormChecbox from "../Form-components/FormChecbox";
import RowButtons from "../RowButtons";

export default function FirstScreen({
  isInvalidTitle,
  onChangeInput,
  isValidTitle,
  title,
  setTitle,
  description,
  setDescription,
  toggleInput,
  status,
  setStatus,
  toggleTab,
  isDisabledNextBtn,
}) {
  return (
    <TabPane tabId="1" className="tab-pane">
      <FormInput
        errorText="Minimum 3 characters"
        isInvalidInput={isInvalidTitle}
        onChangeInput={onChangeInput}
        isValidInput={isValidTitle}
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

      <FormChecbox
        type="checkbox"
        name="status"
        id="status"
        value={status}
        toggleInput={toggleInput}
        setValue={setStatus}
        title="Status: off | on"
      />

      <RowButtons
        nextBtn="2"
        toggleTab={toggleTab}
        isDisabledNextBtn={isDisabledNextBtn}
      />
    </TabPane>
  );
}
