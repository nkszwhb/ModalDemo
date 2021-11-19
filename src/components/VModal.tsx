import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  withSpring,
  runOnJS,
  useAnimatedStyle,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  wrap: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

interface VModalProps {
  visible: boolean;
  onDismiss: () => void;
  cancelable?: boolean;
  children?: React.ReactNode | undefined;
}

function VModal(props: VModalProps) {
  const {visible, onDismiss, cancelable = true, children} = props;
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    // visible 为true先显示mask
    if (visible) {
      setShow(true);
    }
  }, [visible]);

  const updateMaskShow = React.useCallback(() => {
    'worklet';
    if (!visible) {
      // 执行动画完成之后隐藏mask， 否则会阻挡视图点击
      runOnJS(setShow)(false);
    }
  }, [visible, setShow]);

  const maskStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(visible ? 1 : 0, {}, updateMaskShow),
    };
  }, [visible, updateMaskShow]);

  if (show) {
    return (
      <View style={styles.wrap}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (cancelable) {
              onDismiss();
            }
          }}>
          <Animated.View style={[styles.mask, maskStyle]} />
        </TouchableWithoutFeedback>
        {children}
      </View>
    );
  }
  return null;
}

export default VModal;
