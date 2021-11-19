import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommmonButton from '../../components/CommonButton';
import {VModalDialogUtils} from '../../utils/DialogUtils';

const styles = StyleSheet.create({
  top20: {
    marginTop: 20,
  },
});

const VModalPage = () => {
  return (
    <View>
      <CommmonButton
        text="VModal Loading"
        style={styles.top20}
        onPress={() => {
          VModalDialogUtils.showLoadingDialog({
            visible: true,
            message: 'VModal Loading',
            title: 'VModal',
            timeout: 5000,
            onDismiss: () => {
              VModalDialogUtils.hidenLoadingDialog();
            },
          });
        }}
      />
      <CommmonButton
        text="VModal message"
        style={styles.top20}
        onPress={() => {
          VModalDialogUtils.showMessageDialog({
            visible: true,
            message: 'VModal message',
            title: 'VModal',
            btns: [
              {text: '取消', callback: () => {}},
              {text: '确认', callback: () => {}},
            ],
            onDismiss: () => {
              VModalDialogUtils.hidenLoadingDialog();
            },
          });
        }}
      />
    </View>
  );
};

export default VModalPage;
