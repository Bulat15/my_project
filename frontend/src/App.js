import AuthorsBookContainer from "./components/AuthorsBookContainer";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import ArticleResourseContainer from "./components/ArticleResourseContainer";
import LernContainer from "./components/LernContainer/LernContainer";
import TrustedConteiner from "./components/TrusredConteiner";
import Header from "./components/Header/Header";
import Section_1 from "./components/Section_1";
import Section_3 from "./components/Section_3";
import Section_5 from "./components/Section_5";
import Footer from "./components/Footer";


function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Section_1/>
      <AuthorsBookContainer />
      <Section_3/>
      <TrustedConteiner />
      <Section_5/>
      <LernContainer />
      <ArticleResourseContainer />
      <Footer/>
    </Provider>
  );
}

export default App;