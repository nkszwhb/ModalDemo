import React from 'react';
import {useSelector} from 'react-redux';
import VModal from '../VModal';
import MessageDialog, {messageDialogProps} from './MessageDialog';
import LoadingDialog, {loadingDialogProps} from './LoadingDialog';
import {ReducerState} from '../../redux/index';

export default () => {
  const showDialog = useSelector(
    (state: ReducerState) => state.global.showDialog,
  );
  const {type, data} = useSelector(
    (state: ReducerState) => state.global.dialogData,
  );
  return (
    <VModal
      visible={showDialog}
      onDismiss={() => {
        if (data.onDismiss) {
          data.onDismiss();
        }
      }}>
      <LoadingDialog
        title={data.title}
        message={data.message}
        timeout={(data as loadingDialogProps).timeout}
        onDismiss={data.onDismiss}
        visible={showDialog && type === 'loadingDialog'}
      />
      <MessageDialog
        title={data.title}
        message={data.message}
        btns={(data as messageDialogProps).btns}
        onDismiss={data.onDismiss}
        visible={showDialog && type === 'messageDialog'}
      />
    </VModal>
  );
};
