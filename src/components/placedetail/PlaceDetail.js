import React from 'react';
import { Modal, Button, View, Image, Text } from 'react-native';

const placeDetail = (props) => {
  return (
    <Modal>
      <View>
        <Image source={props.placeImage}/>
        <Text>{props.placeName}</Text>
        <View>
          <Button />
          <Button />
        </View>
      </View>
    </Modal>
  )
};

export default placeDetail;