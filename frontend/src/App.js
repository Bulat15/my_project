import AuthorsBookContainer from "./components/AuthorsBookContainer";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import ArticleResourseContainer from "./components/ArticleResourseContainer";
import LernContainer from "./components/LernContainer/LernContainer";


function App() {
  return (
    <Provider store={store}>
        <section>
          <AuthorsBookContainer />
        </section>
        <section>
          <ArticleResourseContainer />
        </section>
        <section>
          <LernContainer />
        </section>
    </Provider>
  );
}

export default App;