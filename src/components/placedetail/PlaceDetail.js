import React from 'react';
import { Modal, Button, View, Image, Text } from 'react-native';

const placeDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.placeImage}/>
        <Text>{props.selectedPlace.placeName}</Text>
      </View>
    );
  }
  
  return (
    <Modal>
      <View>
        {modalContent}
        <View>
          <Button />
          <Button />
        </View>
      </View>
    </Modal>
  )
};

export default placeDetail;