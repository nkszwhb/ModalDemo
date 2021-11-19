/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
  StyleSheet,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {dialogButtonProps, buttonType} from './DialogInterface';

export interface messageDialogProps {
  visible: boolean;
  message: string;
  title?: string | undefined;
  btns: dialogButtonProps[];
  onDismiss?: () => void | undefined;
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    paddingTop: 26,
    borderTopRightRadius: 20, // 圆角
    borderTopLeftRadius: 20, // 圆角
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  textWrap: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#4c4c4c',
    paddingHorizontal: 27,
  },
  message: {
    lineHeight: 24,
    textAlign: 'left',
    fontSize: 12,
    color: '#666666',
    paddingHorizontal: 27,
    marginBottom: 10,
  },
  chooseWrap: {
    alignSelf: 'stretch',
    paddingVertical: 5,
    backgroundColor: '#eeeeee',
  },
  item: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 27,
    backgroundColor: '#ffffff',
  },
  itemText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#333',
  },
  buttonWrap: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    borderColor: 'rgba(0,0,0,0.6)',
    borderTopWidth: 1 / PixelRatio.get(),
  },
  button: {
    fontSize: 15,
    lineHeight: 24,
  },
});
const MessageDialog = (props: messageDialogProps) => {
  const {visible, message, title, btns = [], onDismiss = () => {}} = props;

  const [selectValue, setSelectValue] = useState(undefined);

  const wrapTranslateY = useSharedValue(height);

  useEffect(() => {
    wrapTranslateY.value = withTiming(visible ? 0 : height, {
      duration: 250,
      easing: Easing.linear,
    });
  }, [visible, wrapTranslateY]);

  const getButtonTextStyle = useCallback((type: buttonType | undefined) => {
    let color = '#000';
    if (type === buttonType.ERROR) {
      color = '#f43f31';
    } else if (type === buttonType.CONFIRM) {
      color = '#616ce9';
    }
    return {color};
  }, []);

  const getItemTextValue = useCallback(
    (item: any) => {
      return {
        color: item === selectValue ? '#616ce9' : '#4c4c4c',
      };
    },
    [selectValue],
  );

  const onItemSelect = useCallback(
    item => {
      return () => {
        if (item === selectValue) {
          setSelectValue(undefined);
        } else {
          setSelectValue(item);
        }
      };
    },
    [selectValue],
  );

  const buttonPress = useCallback(
    (btn: dialogButtonProps) => {
      return () => {
        if (typeof btn.callback === 'function') {
          btn.callback();
        }
        // 隐藏dialog
        onDismiss();
      };
    },
    [onDismiss],
  );

  useEffect(() => {
    wrapTranslateY.value = withTiming(visible ? 0 : height, {
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
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Text style={styles.message}>{message}</Text>
      <View style={styles.buttonWrap}>
        {btns.map(btn => {
          return (
            <TouchableOpacity onPress={buttonPress(btn)} key={btn.text}>
              <View style={[styles.item]}>
                <Text style={[styles.button, getButtonTextStyle(btn.type)]}>
                  {btn.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};

export default MessageDialog;
