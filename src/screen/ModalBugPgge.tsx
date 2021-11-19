/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Modal, View, Button} from 'react-native';

const ModaBugPage = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button
        title={'show Modal'}
        onPress={() => {
          setShow(true);
          setTimeout(() => {
            setVisible(true);
          }, 250);
        }}
      />

      <Modal visible={show} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            paddingTop: 150,
          }}>
          <Button
            title={'dismiss one'}
            onPress={() => {
              setShow(false);
            }}
          />
        </View>
      </Modal>
      <Modal visible={visible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            paddingTop: 200,
          }}>
          <Button
            title={'dismiss two'}
            onPress={() => {
              setVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModaBugPage;
