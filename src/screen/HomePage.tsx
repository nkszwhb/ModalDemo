import React from 'react';
import {View, StyleSheet} from 'react-native';
import CommmonButton from '../components/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from './RootStackParams';
import VModal from '../components/VModal';

type ScreenProp = StackNavigationProp<RootStackParamList>;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top20: {
    marginTop: 20,
  },
  top60: {
    marginTop: 60,
  },
});

const HomePage = () => {
  const navigation = useNavigation<ScreenProp>();
  const [showVModal, setShowVModal] = React.useState(false);

  return (
    <View style={styles.wrap}>
      <CommmonButton
        text="ModaBugPage"
        style={styles.top20}
        onPress={() => {
          navigation.navigate('ModaBugPage');
        }}
      />
      <CommmonButton
        text="VModal"
        style={styles.top60}
        onPress={() => {
          setShowVModal(true);
        }}
      />
      <CommmonButton
        text="VModal Page"
        style={styles.top60}
        onPress={() => {
          navigation.navigate('VModalPage');
        }}
      />
      <CommmonButton
        text="ModalPage with transpect"
        style={styles.top20}
        onPress={() => {
          navigation.navigate('PageModal');
        }}
      />
      <CommmonButton
        text="StaticContainerPage"
        style={styles.top20}
        onPress={() => {
          navigation.navigate('StaticContainerPage');
        }}
      />
      <VModal
        visible={showVModal}
        onDismiss={() => {
          setShowVModal(false);
        }}
      />
    </View>
  );
};

export default HomePage;
