import AuthorsBookContainer from "./components/AuthorsBookContainer";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'


function App() {
  return (
    <Provider store={store}>
        <section>
          <AuthorsBookContainer />
        </section>
    </Provider>
  );
}

export default App;