import AuthorsBookContainer from "./components/AuthorsBookContainer";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import ArticleResourseContainer from "./components/ArticleResourseContainer";
import LernContainer from "./components/LernContainer/LernContainer";
import TrustedConteiner from "./components/TrusredConteiner";
import Nav from "./components/Nav";
import Section_1 from "./components/Section_1";


function App() {
  return (
    <Provider store={store}>
      <Nav/>
      <Section_1/>
        <section>
          <AuthorsBookContainer />
        </section>
        <section>
          <TrustedConteiner />
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