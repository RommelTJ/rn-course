import React, { Component } from 'react';
import DefaultInput from "../UI/defaultinput/DefaultInput";

const placeInput = (props) => {

  return (
    <DefaultInput
      placeholder="Place name"
      value={props.placeData.value}
      valid={props.placeData.valid}
      touched={props.placeData.touched}
      onChangeText={props.onChangeText}
    />
  );

};

export default placeInput;
