## react native  Modal 效果的几种实现方式

### Modal的缺陷

ios上两个modal会导致界面被卡住



### 解决方式

1. View挂在根组件之外
2. screen page 实现
3. 使用react-native 提供的 AppRegistry.setWrapperComponentProvider 具体实现可参考 react-native-root-toast 或者react-native-root-view

