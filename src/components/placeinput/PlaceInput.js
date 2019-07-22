import React, { Component } from 'react';
import DefaultInput from "../UI/defaultinput/DefaultInput";

const placeInput = (props) => {

  return (
    <DefaultInput
      placeholder="Place name"
      value={props.placeName}
      onChangeText={props.onChangeText}
    />
  );

};

export default placeInput;
