/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/screen/HomePage';
import PageModal from './src/screen/PageModal/PageModal';
import VModalPage from './src/screen/VModal/VModalPage';
import ModaBugPage from './src/screen/ModalBugPgge';

import {RootStackParamList} from './src/screen/RootStackParams';
import ModelPageWithTranspec from './src/screen/PageModal/ModelPageWithTranspec';
import StaticContainerPage from './src/screen/StaticContainer/StaticContainerPage';

import {navigationRef} from './src//utils/RootNavigation';
import store from './src/redux/index';
import GlobalDialog from './src/components/Dialog/GlobalDialog';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen name="HomePage" component={HomePage} />
            <RootStack.Screen name="ModaBugPage" component={ModaBugPage} />
            <RootStack.Screen name="PageModal" component={PageModal} />
            <RootStack.Screen name="VModalPage" component={VModalPage} />
            <RootStack.Screen
              name="StaticContainerPage"
              component={StaticContainerPage}
            />
          </RootStack.Group>
          <RootStack.Group screenOptions={{presentation: 'transparentModal'}}>
            <RootStack.Screen
              name="ModelPageWithTranspec"
              component={ModelPageWithTranspec}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
      <GlobalDialog />
    </Provider>
  );
};

export default App;
