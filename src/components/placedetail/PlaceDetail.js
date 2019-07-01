import React from 'react';
import { Button, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const placeDetail = (props) => {
  return (
    <View style={styles.modalContainer}>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Ionicons size={32} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
        <Button title="Close" onPress={props.onModalClosed} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    marginTop: 64
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default placeDetail;
