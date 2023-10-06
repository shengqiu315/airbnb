import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import store from './store';
import App from '@/App';
import theme from './assets/theme';

import "@/assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    {/* 使用 styled-components 提供的provider */}
    <ThemeProvider theme={theme}>
      {/* 使用 redux 的Provider */}
      <Provider store={store}>
        {/* 使用hash路由 */}
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>
  // </React.StrictMode>
);

