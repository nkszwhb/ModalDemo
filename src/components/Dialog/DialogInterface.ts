import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export enum buttonType {
  DEFAULT = 'default',
  ERROR = 'error',
  CONFIRM = 'confirm',
}

interface singleChooseCallbackParams {
  position: number;
  item: any;
}

type dialogButtonCb = (params?: singleChooseCallbackParams) => void;

export interface dialogButtonProps {
  text: string;
  callback: dialogButtonCb;
  type?: buttonType;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}
