import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommmonButton from '../../components/CommonButton';
import {PageDialogUtils} from '../../utils/DialogUtils';

const styles = StyleSheet.create({
  top20: {
    marginTop: 20,
  },
});

const PageModal = () => {
  return (
    <View>
      <CommmonButton
        text="pageModal Loading"
        style={styles.top20}
        onPress={() => {
          PageDialogUtils.showLoadingDialog({
            visible: true,
            message: 'VModal Loading',
            title: 'VModal',
            timeout: 5000,
            onDismiss: () => {
              PageDialogUtils.hidenLoadingDialog();
            },
          });
        }}
      />
      <CommmonButton
        text="pageModal message"
        style={styles.top20}
        onPress={() => {
          PageDialogUtils.showMessageDialog({
            visible: true,
            message: 'VModal message',
            title: 'VModal',
            btns: [
              {text: '取消', callback: () => {}},
              {text: '确认', callback: () => {}},
            ],
            onDismiss: () => {
              PageDialogUtils.hidenLoadingDialog();
            },
          });
        }}
      />
    </View>
  );
};

export default PageModal;
