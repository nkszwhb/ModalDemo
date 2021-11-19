import React from 'react';
import {View, StyleSheet} from 'react-native';
import CommmonButton from '../../components/CommonButton';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../RootStackParams';
import VModal from '../../components/VModal';
import rootView from 'react-native-root-view';
import LoadingDialog from '../../components/Dialog/LoadingDialog';

type ScreenProp = StackNavigationProp<RootStackParamList>;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top20: {
    marginTop: 20,
  },
  mask: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const StaticContainerPage = () => {
  const [message, setMessage] = React.useState('loading');
  return (
    <View style={styles.wrap}>
      <CommmonButton
        text="show"
        style={styles.top20}
        onPress={() => {
          setTimeout(() => {
            setMessage('loading message');
          }, 2000);
          rootView.set(
            <VModal
              visible
              key="loadingdialog"
              onDismiss={() => {
                rootView.remove();
              }}>
              <LoadingDialog visible message={message} />
            </VModal>,
          );
        }}
      />
    </View>
  );
};

export default StaticContainerPage;
