/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {NativeBaseProvider} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Home} from './src/screens/Home';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'default'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Home />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
