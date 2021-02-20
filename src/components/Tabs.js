import React, { useState, useEffect, useCallback } from "react";
import { TabContent } from "reactstrap";

import FormBlock from "./FormBlock";
import FirstScreen from "./Tab-components/FirstScreen";
import SecondScreen from "./Tab-components/SecondScreen";
import ThirdScreen from "./Tab-components/ThirdScreen";
import FourthScreen from "./Tab-components/FourthScreen";
import SuccessScren from "./Tab-components/SuccessScren";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("1");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [photoList, setPhotoList] = useState([]);
  const [serviceOne, setServiceOne] = useState(false);
  const [serviceTwo, setServiceTwo] = useState(false);
  const [serviceThree, setServiceThree] = useState(false);
  const [serviceFour, setServiceFour] = useState(false);
  const [serviceFive, setServiceFive] = useState(false);

  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState(true);
  const [isInvalidTitle, setIsInvalidTitle] = useState(false);
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] = useState(false);
  const [isValidTypePhoto, setIsValidTypePhoto] = useState(true);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleInput = (value, setValue) => {
    setValue(!value);
  };

  const onChangeInput = (value, setValue) => {
    setValue(value);
  };

  const allData = {
    title,
    description,
    status,
    phoneNumber,
    email,
    photoList,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allData);

    toggleTab("5");
  };

  const validationTypePhotoList = useCallback((files) => {
    const fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];

    for (let key in files) {
      if (Number(key) || key === "0") {
        return fileTypes.includes(files[key].type);
      }
    }
  }, []);

  useEffect(() => {
    activeTab === "1" && title.length >= 3
      ? setIsDisabledNextBtn(false)
      : setIsDisabledNextBtn(true);
  }, [activeTab, isDisabledNextBtn, title.length]);

  useEffect(() => {
    if (activeTab === "2" && phoneNumber) setIsDisabledNextBtn(false);
    if (activeTab === "2" && phoneNumber.length < 5) setIsDisabledNextBtn(true);
  }, [activeTab, isDisabledNextBtn, phoneNumber]);

  useEffect(() => {
    if (activeTab === "3") setIsDisabledNextBtn(false);

    if (photoList.length > 0) {
      const isValidPhoto = validationTypePhotoList(photoList);
      setIsValidTypePhoto(isValidPhoto);

      isValidPhoto ? setIsDisabledNextBtn(false) : setIsDisabledNextBtn(true);

      activeTab === "3" && isValidTypePhoto && photoList.length <= 5
        ? setIsDisabledNextBtn(false)
        : setIsDisabledNextBtn(true);
    }
  }, [
    activeTab,
    isDisabledNextBtn,
    validationTypePhotoList,
    photoList,
    photoList.length,
    isValidTypePhoto,
  ]);

  const isValidTitle = () => {
    title.length < 3 ? setIsInvalidTitle(true) : setIsInvalidTitle(false);
  };

  const isValidPhoneNumber = () => {
    phoneNumber.length < 5
      ? setIsInvalidPhoneNumber(true)
      : setIsInvalidPhoneNumber(false);
  };

  return (
    <FormBlock>
      <TabContent activeTab={activeTab} style={{ padding: "25px 0" }}>
        <FirstScreen
          isInvalidTitle={isInvalidTitle}
          onChangeInput={onChangeInput}
          isValidTitle={isValidTitle}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          toggleInput={toggleInput}
          status={status}
          setStatus={setStatus}
          toggleTab={toggleTab}
          setIsDisabledNextBtn={setIsDisabledNextBtn}
          isDisabledNextBtn={isDisabledNextBtn}
          serviceOne={serviceOne}
          setServiceOne={setServiceOne}
        />

        <SecondScreen
          isInvalidPhoneNumber={isInvalidPhoneNumber}
          onChangeInput={onChangeInput}
          isValidPhoneNumber={isValidPhoneNumber}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          toggleTab={toggleTab}
          isDisabledNextBtn={isDisabledNextBtn}
        />

        <ThirdScreen
          toggleTab={toggleTab}
          isDisabledNextBtn={isDisabledNextBtn}
          photoList={photoList}
          setPhotoList={setPhotoList}
          isValidTypePhoto={isValidTypePhoto}
        />

        <FourthScreen
          toggleInput={toggleInput}
          toggleTab={toggleTab}
          serviceOne={serviceOne}
          setServiceOne={setServiceOne}
          serviceTwo={serviceTwo}
          setServiceTwo={setServiceTwo}
          serviceThree={serviceThree}
          setServiceThree={setServiceThree}
          serviceFour={serviceFour}
          setServiceFour={setServiceFour}
          serviceFive={serviceFive}
          setServiceFive={setServiceFive}
          handleSubmit={handleSubmit}
        />

        <SuccessScren />
      </TabContent>
    </FormBlock>
  );
}
