/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import LoadingDialog, {
  loadingDialogProps,
} from '../../components/Dialog/LoadingDialog';
import MessageDialog, {
  messageDialogProps,
} from '../../components/Dialog/MessageDialog';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ModalPageParms = {
  modalData: {
    type: string;
    dialogData: loadingDialogProps | messageDialogProps;
  };
};

type ScreenProp = NativeStackScreenProps<ModalPageParms, 'modalData'>;

const styles = StyleSheet.create({
  mask: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

const ModelPageWithTranspec = ({navigation, route}: ScreenProp) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  const {dialogData, type} = route.params;

  console.log('dialogData: ', dialogData);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (dialogData.onDismiss) {
            dialogData.onDismiss();
          }
        }}>
        <View style={styles.mask} />
      </TouchableWithoutFeedback>
      {type === 'loadingDialog' ? (
        <LoadingDialog
          title={dialogData.title}
          message={dialogData.message}
          timeout={(dialogData as loadingDialogProps).timeout}
          onDismiss={dialogData.onDismiss}
          visible={dialogData.visible}
        />
      ) : null}
      {type === 'messageDialog' ? (
        <MessageDialog
          title={dialogData.title}
          message={dialogData.message}
          btns={(dialogData as messageDialogProps).btns}
          onDismiss={dialogData.onDismiss}
          visible={dialogData.visible}
        />
      ) : null}
    </View>
  );
};

export default ModelPageWithTranspec;
