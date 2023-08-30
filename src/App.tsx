import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {Routes} from './routes';
import {store} from '@store/store';
import theme from '@global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={'#fff'} />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
