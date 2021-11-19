import {loadingDialogProps} from '../components/Dialog/LoadingDialog';
import {messageDialogProps} from '../components/Dialog/MessageDialog';
import * as RootNavigation from './RootNavigation';
import {SHOW_DIALOG, HIDE_DIALOG} from '../redux/actionTypes';

import store from '../redux/index';

export class VModalDialogUtils {
  static showLoadingDialog(loadingDialogData: loadingDialogProps) {
    store.dispatch({
      type: SHOW_DIALOG,
      dialogData: {
        type: 'loadingDialog',
        data: loadingDialogData,
      },
    });
  }

  static hidenLoadingDialog() {
    store.dispatch({
      type: HIDE_DIALOG,
    });
  }

  static showMessageDialog(messageDialogData: messageDialogProps) {
    store.dispatch({
      type: SHOW_DIALOG,
      dialogData: {
        type: 'messageDialog',
        data: messageDialogData,
      },
    });
  }

  static hidenMessageDialog() {
    store.dispatch({
      type: HIDE_DIALOG,
    });
  }
}

export class PageDialogUtils {
  static showLoadingDialog(loadingDialogData: loadingDialogProps) {
    const modalData = {
      type: 'loadingDialog',
      dialogData: loadingDialogData,
    };
    RootNavigation.navigate('ModelPageWithTranspec', modalData);
  }

  static hidenLoadingDialog() {
    RootNavigation.goBack();
  }

  static showMessageDialog(messageDialogData: messageDialogProps) {
    const modalData = {
      type: 'messageDialog',
      dialogData: messageDialogData,
    };
    RootNavigation.navigate('ModelPageWithTranspec', modalData);
  }
  static hidenMessageDialog() {
    RootNavigation.goBack();
  }
}
