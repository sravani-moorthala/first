import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StylesButton from '../StylesButton';
import styles from '../CarItem/styles';

const CarItem = props => {
  const {name, tagline, image, taglineCTA} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StylesButton
          type="primary"
          content={'Custom Order'}
          onPress={() => console.warn('Custom Order is pressed')}
        />

        <StylesButton
          type="secondary"
          content={'Existing inventory'}
          onPress={() => console.warn('Existing inventory is pressed')}
        />
      </View>
    </View>
  );
};
export default CarItem;
