import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {

  return (
     <SafeAreaView >
<SignInScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
