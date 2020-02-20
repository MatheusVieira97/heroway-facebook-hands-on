import React from 'react';
import * as ReactRedux from 'react-redux';

import Header from './layout/Header';
import store from '../redux/configureStore';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <ReactRedux.Provider store={store}>
      <Header />
      <section className="main">
        <Routes />

      </section>
    </ReactRedux.Provider>
  );
};

export default App;
