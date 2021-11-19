// import {} from '../components/Dialog/DialogInterface';
import {loadingDialogProps} from '../components/Dialog/LoadingDialog';
import {messageDialogProps} from '../components/Dialog/MessageDialog';

import {SHOW_DIALOG, HIDE_DIALOG} from './actionTypes';

export enum dialogtype {
  'loadingDialog',
  'messageDialog',
}

type dialogData = {
  loadingDialog: loadingDialogProps;
  messageDialog: messageDialogProps;
};

type dialogTypeProps<T> = {
  type: keyof T;
  data: T[keyof T];
};

export interface GlobalState {
  showDialog: boolean;
  dialogData: dialogTypeProps<dialogData>;
}

const initialState: GlobalState = {
  showDialog: false,
  dialogData: {
    type: 'loadingDialog',
    data: {
      visible: false,
      message: '',
      timeout: 5000,
    },
  },
};

export default function (state = initialState, action: any): GlobalState {
  switch (action.type) {
    case SHOW_DIALOG:
      return {...state, showDialog: true, dialogData: action.dialogData};
    case HIDE_DIALOG:
      return {...state, showDialog: false};
    default:
      return state;
  }
}
