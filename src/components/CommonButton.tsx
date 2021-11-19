import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  wrap: {
    height: 46,
    // marginHorizontal: 27,
    width: window.width - 27 * 2,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 23,
    backgroundColor: '#616ce9',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

function CommmonButton(prop: props) {
  const {text, onPress, style, textStyle} = prop;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.wrap, style]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CommmonButton;
