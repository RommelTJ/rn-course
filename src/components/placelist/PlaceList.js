import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from "../listitem/ListItem";

const placeList = (props) => {
  const placesOutput = props.places.map((place, idx) => {
    return <ListItem key={idx} placeName={place} />;
  });

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
