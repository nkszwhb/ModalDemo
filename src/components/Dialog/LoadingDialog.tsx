import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as Progress from 'react-native-progress';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export interface loadingDialogProps {
  visible: boolean;
  message: string;
  title?: string | undefined;
  timeout?: number | undefined;
  onDismiss?: () => void | undefined;
}

const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 40,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 27,
    paddingTop: 26,
    borderTopRightRadius: 20, // 圆角
    borderTopLeftRadius: 20, // 圆角
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  textWrap: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  message: {
    lineHeight: 24,
    textAlign: 'left',
    fontSize: 16,
    color: '#666666',
  },
});
const LoadingDialog = (props: loadingDialogProps) => {
  const {
    visible,
    message,
    title,
    // timeout = 15 * 1000,
    // onDismiss = () => {},
  } = props;

  const wrapTranslateY = useSharedValue(500);

  useEffect(() => {
    wrapTranslateY.value = withTiming(visible ? 0 : 500, {
      duration: 250,
      easing: Easing.linear,
    });
  }, [visible, wrapTranslateY]);

  const wrapAnimateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: wrapTranslateY.value,
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[styles.wrap, wrapAnimateStyle]}>
      <Progress.CircleSnail size={30} color={['#333333']} />
      <View style={styles.textWrap}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
};

export default LoadingDialog;
