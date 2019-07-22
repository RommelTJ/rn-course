import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';
import imagePlaceholder from "../../assets/SanDiego.jpg";

class PickImage extends Component {

  render() {
    return (
      <View>
        <View style={styles.placeholder} >
          <Image source={imagePlaceholder} style={styles.previewImage}/>
        </View>
        <View style={styles.button}>
          <Button title="Pick image" />
        </View>
      </View>
    );
  }

}

export default PickImage;
