import AuthorsBookContainer from "./components/AuthorsBookContainer";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import ArticleResourseContainer from "./components/ArticleResourseContainer";


function App() {
  return (
    <Provider store={store}>
        <section>
          <AuthorsBookContainer />
        </section>
        <section>
          <ArticleResourseContainer />
        </section>
    </Provider>
  );
}

export default App;